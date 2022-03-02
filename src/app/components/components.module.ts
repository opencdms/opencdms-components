import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '@coreui/angular';
import { StationSelectComponent } from './station-select/station-select.component';
import { TestComponent } from './test/test.component';
import { LoaderComponent } from './loader/loader.component';

export const CUSTOM_ELEMENTS = [TestComponent, StationSelectComponent];

@NgModule({
  declarations: [...CUSTOM_ELEMENTS, LoaderComponent],
  imports: [CommonModule, FormsModule, SpinnerModule],
  exports: [...CUSTOM_ELEMENTS],
})
export class ComponentsModule {}
