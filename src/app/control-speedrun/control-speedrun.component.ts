import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-control-speedrun',
  templateUrl: './control-speedrun.component.html',
  styleUrls: ['./control-speedrun.component.css']
})
export class ControlSpeedrunComponent implements OnInit {

  players: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
