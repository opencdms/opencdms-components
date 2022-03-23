import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogDataService } from 'src/app/services/dialog-data.service';
import { NoEmptyValuesValidator } from 'src/app/validators/noEmptyValues';
import { DialogBaseComponent } from '../dialog.base';

@Component({
  selector: 'app-climatic-summary',
  templateUrl: './climatic-summary.component.html',
  styleUrls: ['./climatic-summary.component.scss', '../dialogs.scss'],
})
export class ClimaticSummaryComponent extends DialogBaseComponent {
  public static componentName = 'climatic-summary';

  constructor(fb: FormBuilder, dialogDataService: DialogDataService) {
    super(
      fb,
      {
        station_ids: [[], Validators.required],
        element_ids: [[], Validators.required],
        period: [['', ''], NoEmptyValuesValidator()],
      },
      dialogDataService
    );
  }

  ngOnInit(): void {}
}
