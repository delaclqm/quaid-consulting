import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  private subscription: Subscription;
  public projects : any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(
      this.api.getProjects().subscribe((data) => {
        this.projects = data;
        console.log(data);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
