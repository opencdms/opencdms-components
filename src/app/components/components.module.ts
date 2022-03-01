import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StationSelectComponent } from './station-select/station-select.component';
import { TestComponent } from './test/test.component';

export const CUSTOM_ELEMENTS = [TestComponent, StationSelectComponent];

@NgModule({
  declarations: [...CUSTOM_ELEMENTS],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
