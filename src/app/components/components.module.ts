import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule, SpinnerModule, TableModule, ToastModule, UtilitiesModule } from '@coreui/angular';
import { StationSelectComponent } from './station-select/station-select.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationDisplayComponent } from './notification-display/notification-display.component';
import { ElementSelectComponent } from './element-select/element-select.component';
import { SummaryTypeSelectComponent } from './summary-type-select/summary-type-select.component';

/** Components to export as standalone webcomponents */
export const CUSTOM_COMPONENTS = [StationSelectComponent, ElementSelectComponent, SummaryTypeSelectComponent];

/** Components shared locally but not exported */
const CORE_COMPONENTS = [LoaderComponent, NotificationDisplayComponent];

/** Modules imported from CoreUI */
const CORE_UI_IMPORTS = [FormModule, SpinnerModule, TableModule, ToastModule, UtilitiesModule];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS, ...CORE_COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...CORE_UI_IMPORTS],
  exports: [...CUSTOM_COMPONENTS, ...CORE_COMPONENTS],
})
export class ComponentsModule {}
