import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  private subscription: Subscription;
  public experience;
  public education;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscription = new Subscription();

    this.subscription.add(
      this.api.getExperience('_sort=endDate:DESC').subscribe((data) => {
        this.experience = data;
      })
    );

    this.subscription.add(
      this.api.getEducation().subscribe((data) => { 
        this.education = data;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
