import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface INotfication {
  type: 'error' | 'success';
  title: string;
  text: string;
  meta?: any;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications$ = new Subject<INotfication>();

  createNotification(notification: INotfication) {
    this.notifications$.next(notification);
    console.log('[NOTIFICATION]', notification);
  }
}
