import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomobiServiceService } from '../shared/automobi-service.service';

@Component({
  selector: 'app-model-auto',
  templateUrl: './model-auto.component.html',
  styleUrls: ['./model-auto.component.css']
})
export class ModelAutoComponent implements OnInit {

  public item: any;

  @ViewChild('image',{static:false}) image : ElementRef =<ElementRef>{}

  constructor(private router: ActivatedRoute, private AutoService : AutomobiServiceService ) { }

  ngOnInit(): void {

    const parametre: string = this.router.snapshot.params['id']
    
    this.AutoService.getAutomobil().subscribe((auto: any) => {
      this.item = auto.find((item: any) => item._id === parametre)

    })
  
  }

/**
  Affichage d'un seul image en grand lorsqu'on click sur cel ci
 */
  show(item:string) {
    this.image.nativeElement.src = `./assets/AUTO/${item}`
  }

}
