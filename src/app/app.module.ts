import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { TruckComponent } from './truck/truck.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { TruckCreateComponent } from './truck-create/truck-create.component';
import { TruckEditComponent } from './truck-edit/truck-edit.component';

const appRoutes: Routes = [
  {
    path: 'trucks',
    component: TruckComponent,
    data: { title: 'Food Truck List' }
  },
  {
    path: 'truck-details/:id',
    component: TruckDetailComponent,
    data: { title: 'Foodtruck Details' }
  },
  {
    path: 'truck-create',
    component: TruckCreateComponent,
    data: { title: 'Create Foodtruck' }
  },
  {
    path: 'truck-edit/:id',
    component: TruckEditComponent,
    data: { title: 'Edit Food Truck' }
  },
  { path: '',
    redirectTo: '/trucks',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TruckComponent,
    TruckDetailComponent,
    TruckCreateComponent,
    TruckEditComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
