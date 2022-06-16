import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';

@Component({
  selector: 'app-action-area',
  templateUrl: './action-area.component.html',
  styleUrls: ['./action-area.component.scss']
})
export class ActionAreaComponent implements OnInit {

  constructor(public actions: ActionsService) { }

  ngOnInit(): void {
  }

}
