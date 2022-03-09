import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPlotComponent } from './inventory-plot/inventory-plot.component';
import { ComponentsModule } from '../components/components.module';
import { GridModule } from '@coreui/angular';

export const CUSTOM_DIALOGS = [InventoryPlotComponent];

@NgModule({
  declarations: CUSTOM_DIALOGS,
  imports: [CommonModule, ComponentsModule, GridModule],
  exports: CUSTOM_DIALOGS,
})
export class DialogsModule {}
