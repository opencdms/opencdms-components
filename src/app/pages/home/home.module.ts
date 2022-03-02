import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule, GridModule } from '@coreui/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DialogsModule } from 'src/app/dialogs/dialogs.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: ':component',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, DialogsModule, SidebarModule, GridModule],
  providers: [],
})
export class HomeModule {}
