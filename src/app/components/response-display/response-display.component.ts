import { Component, ViewEncapsulation } from '@angular/core';
import { cilDataTransferDown } from '@coreui/icons';
import { DialogDataService } from 'src/app/services/dialog-data.service';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ResponseDisplayComponent {
  public icons = { cilDataTransferDown };

  constructor(public dialogDataService: DialogDataService) {}

  public get submission() {
    return this.dialogDataService.submission;
  }

  public close() {
    this.dialogDataService.submission.status = undefined;
  }

  public async save() {
    return this.dialogDataService.saveResponse();
  }
}

export class NotificationDisplayComponent {}
