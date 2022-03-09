import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerModule, TableModule, UtilitiesModule } from '@coreui/angular';
import { StationSelectComponent } from './station-select/station-select.component';
import { TestComponent } from './test/test.component';
import { LoaderComponent } from './loader/loader.component';

export const CUSTOM_COMPONENTS = [TestComponent, StationSelectComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS, LoaderComponent],
  imports: [CommonModule, FormsModule, SpinnerModule, TableModule, UtilitiesModule],
  exports: [...CUSTOM_COMPONENTS],
})
export class ComponentsModule {}
