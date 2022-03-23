import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  FormModule,
  SpinnerModule,
  TableModule,
  ToastModule,
  UtilitiesModule,
  GridModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { StationSelectComponent } from './station-select/station-select.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationDisplayComponent } from './notification-display/notification-display.component';
import { ElementSelectComponent } from './element-select/element-select.component';
import { SummaryTypeSelectComponent } from './summary-type-select/summary-type-select.component';
import { PeriodSelectComponent } from './period-select/period-select.component';
import { MissingValuesSelectComponent } from './missing-values-select/missing-values-select.component';
import { ResponseDisplayComponent } from './response-display/response-display.component';

/** Components to export as standalone webcomponents */
export const CUSTOM_COMPONENTS = [
  StationSelectComponent,
  ElementSelectComponent,
  SummaryTypeSelectComponent,
  PeriodSelectComponent,
  MissingValuesSelectComponent,
];

/** Components shared locally but not exported */
const CORE_COMPONENTS = [LoaderComponent, NotificationDisplayComponent, ResponseDisplayComponent];

/** Modules imported from CoreUI */
const CORE_UI_IMPORTS = [
  ButtonGroupModule,
  FormModule,
  SpinnerModule,
  TableModule,
  ToastModule,
  UtilitiesModule,
  GridModule,
  IconModule,
];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS, ...CORE_COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...CORE_UI_IMPORTS],
  exports: [...CUSTOM_COMPONENTS, ...CORE_COMPONENTS],
})
export class ComponentsModule {}
