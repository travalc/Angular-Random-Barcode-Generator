import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors : string[] = 
    [
      'Aqua',
      'Chartreuese',
      'Crimson',
      'DarkGoldenRod',
      'DarkSalmon',
      'DarkViolet'
    ]

  indexes : number[] = 
  [
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6)
  ];
}
