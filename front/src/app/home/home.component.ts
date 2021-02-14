import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @Input()
  index: number;

  constructor() {}

  ngOnInit(): void {}

  generateTestArray(): Array<string> {
    return [
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
      'Abdal',
      'Alexandre',
      'Kalvin',
      'Ludovic',
    ];
  }
}
