import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomobiServiceService {



  private readonly URI:string ="api/auto.json"

  constructor(private http: HttpClient) { }
  
  getAutomobil():Observable <any> {
    return this.http.get<any>(this.URI).pipe(
      tap((auto) => {
        console.log("Bien réçe"),
   
          catchError(this.ErrorMessage)
      })
    )
  }







  private ErrorMessage(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Une erreur est survenu dans ', error.error.message)
    }
    else {
      console.log('Backend erreur ', error.status)
      console.log('Body ', error.error)
    }

    return throwError('Une erreur réeseyer plutard')
  }
}
