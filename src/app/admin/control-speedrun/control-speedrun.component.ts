import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/model/players.model';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-control-speedrun',
  templateUrl: './control-speedrun.component.html',
  styleUrls: ['./control-speedrun.component.css']
})
export class ControlSpeedrunComponent implements OnInit {

  players: Player[];

  constructor() { }

  ngOnInit(): void {
    this.players = this.getPlayers();
  }

  getPlayers(): Player[] {
    
    return [{ id: 3, timer: "2:45", url_youtube: "cxjklvds" }];
  }

}
