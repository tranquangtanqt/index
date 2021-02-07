import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message) {
    this.messageSource.next(message);
  }
}
