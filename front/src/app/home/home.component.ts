import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
