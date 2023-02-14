
import { Component, OnInit } from '@angular/core';
import { AutomobiServiceService } from '../shared/automobi-service.service';


@Component({
  selector: 'app-produits-lists',
  templateUrl: './produits-lists.component.html',
  styleUrls: ['./produits-lists.component.css']
})
export class ProduitsListsComponent implements OnInit {

  public autoData: any;
  public ErrMessage: string="";

  constructor(public servicesAuto: AutomobiServiceService){}

  ngOnInit(): void {

    this.servicesAuto.getAutomobil().subscribe({
      next: auto => {
        this.autoData = auto
      },
      error: err => this.ErrMessage = err
    })
    
  }

}
