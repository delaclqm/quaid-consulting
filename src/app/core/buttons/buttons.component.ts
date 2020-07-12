import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() link: string;
  @Input() text: string;
  @Input() filled: boolean;

  constructor() { }

  ngOnInit() {
  }
}
