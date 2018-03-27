import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {    
    messaging: any;
    currentMessage = new BehaviorSubject(null);
    constructor() {         
        this.messaging = firebase.messaging();
    }

    getPermission() {
        this.messaging.requestPermission()
            .then(() => {
                console.log("Notification permission grant.");
                console.log(this.messaging.getToken());
                return this.messaging.getToken();
            })
            .catch((err) => {
                console.log('Unable to get permission to notify.', err);
            });
    }

    receiveMessage() {
        this.messaging.onMessage((payload) => {
            console.log("Message receive: ", payload);
            this.currentMessage.next(payload);
        });
    }
}