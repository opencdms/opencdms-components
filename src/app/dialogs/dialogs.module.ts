import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPlotComponent } from './inventory-plot/inventory-plot.component';
import { ComponentsModule } from '../components/components.module';
import { GridModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';

export const CUSTOM_DIALOGS = [InventoryPlotComponent];

@NgModule({
  declarations: CUSTOM_DIALOGS,
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, GridModule],
  exports: CUSTOM_DIALOGS,
})
export class DialogsModule {}
