import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsListsComponent } from './produits-lists/produits-lists.component';
import { AutoCardComponent } from './auto-card/auto-card.component';
import { ModelAutoComponent } from './model-auto/model-auto.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsListsComponent,
    AutoCardComponent,
    ModelAutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: 'produits', component: ProduitsListsComponent },
      { path: 'model/:id', component: ModelAutoComponent },
      {path:'', redirectTo:'home',pathMatch:'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
