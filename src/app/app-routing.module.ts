import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { App2019Component } from './2019/app.component';
import { App2020Component } from './2020/app.component';

const routes: Routes = [
  { path: '', component: App2020Component, pathMatch: 'full' },
  { path: '2019', component: App2019Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
