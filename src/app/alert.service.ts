import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //service is injectable throughout the application through asingle shared instance//
})
export class AlertService {
  alertMe(message: string) {   //alertMe method taking a message as a string//
    alert(message);   //call the alert method//
  }

  constructor() { }
}
