import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerModule, TableModule, ToastModule, UtilitiesModule } from '@coreui/angular';
import { StationSelectComponent } from './station-select/station-select.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationDisplayComponent } from './notification-display/notification-display.component';
import { ElementSelectComponent } from './element-select/element-select.component';

/** Components to export as standalone webcomponents */
export const CUSTOM_COMPONENTS = [StationSelectComponent, ElementSelectComponent];

/** Components shared locally but not exported */
const CORE_COMPONENTS = [LoaderComponent, NotificationDisplayComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS, ...CORE_COMPONENTS],
  imports: [CommonModule, FormsModule, SpinnerModule, TableModule, UtilitiesModule, ToastModule],
  exports: [...CUSTOM_COMPONENTS, ...CORE_COMPONENTS],
})
export class ComponentsModule {}
