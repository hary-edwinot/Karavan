import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.css']
})
export class AutoCardComponent implements OnInit{

  @Input()

  public automobil :any
    
    
  constructor() { }

  ngOnInit(): void {
  }


}
