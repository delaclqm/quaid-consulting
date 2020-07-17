import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, Validators, FormGroup, FormGroupDirective, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private subscription: Subscription;
  public form: FormGroup;
  public isLoading: boolean;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private reactiveForm: ReactiveFormsModule,
    private snackBar: MatSnackBar) {

    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.subscription = new Subscription();
  }

  onSubmit(formData, formDirective: FormGroupDirective) {
    if (this.form.status === 'INVALID') {
      this.snackBar.open('Please Enter all Fields', 'Dismiss', {
        duration: 5000,
        panelClass: 'error'
      });
    } else {
      this.isLoading = true;
      formDirective.resetForm();
      this.form.reset();
      this.subscription.add(this.api.contactMeFormSubmit(formData)
        .subscribe(
          () => {
            this.isLoading = false;
            this.snackBar.open('Submission Sucessful!', 'Dismiss', {
              duration: 10000,
              panelClass: 'accent'
            });
          },
          error => {
            this.isLoading = false;
            this.snackBar.open('Whoops, something went wrong.', 'Dismiss', {
              duration: 5000,
              panelClass: 'error'
            });
          }
        ));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
