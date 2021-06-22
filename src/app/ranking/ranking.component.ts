import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  ChallengeRankingModel,
  EventService,
} from "../shared/service/event.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"],
})
export class RankingComponent implements OnInit {
  private id: number;
  rankings: ChallengeRankingModel[] = [];
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    console.log("init", this.activatedRoute.snapshot.paramMap);
    console.log("init", this.id);
  }

  //TODO
  ngOnInit(): void {
    //  this.rankings = [ { username: 'user1' },
    //  { username: 'user2' },  { username: 'user3' } ];
    this.eventService.getChallengeRankings(this.id).subscribe(
      (res) => {
        this.rankings = res;
      },
      (error) => {
        console.error("Fail to get challenge rankings", error);
      }
    );
  }
}
