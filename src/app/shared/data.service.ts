import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from './message';

@Injectable()
export class DataService {
    private messageSource = new BehaviorSubject<Message>(null);
    currentMessage = this.messageSource.asObservable();
    
    constructor() { }

    changeMessage(message: any) {
        this.messageSource.next(message)
    }
}