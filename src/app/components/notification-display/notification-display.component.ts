import { Component, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService, INotfication } from 'src/app/services/notification.service';

interface INotificationDisplay extends INotfication {
  visible?: boolean;
}

@Component({
  selector: 'app-notification-display',
  templateUrl: './notification-display.component.html',
  styleUrls: ['./notification-display.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NotificationDisplayComponent {
  public notifications: INotificationDisplay[] = [];
  private componentDestroyed$ = new Subject();

  constructor(public notificationService: NotificationService) {}

  public closeNotification(index: number) {
    this.notifications[index].visible = false;
  }

  ngOnInit() {
    this.notificationService.notifications$.pipe(takeUntil(this.componentDestroyed$)).subscribe((notification) => {
      this.notifications.push({ ...notification, visible: true });
    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
