import { Component, OnInit, Input } from '@angular/core';
import { getShortDate } from 'src/app/services/utils/date-utils';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.scss']
})
export class TimelineBlockComponent implements OnInit {

  @Input() content;
  public isEducation = false;
  
  constructor() { }

  ngOnInit() {
    if (this.content.degree) this.isEducation = true;
    this.content.duration = getShortDate(new Date(this.content.startDate)) + ' - ';
    this.content.duration += getShortDate(new Date(this.content.endDate));
  }

}
