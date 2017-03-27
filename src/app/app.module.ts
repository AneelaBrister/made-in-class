import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { BinderComponent } from './binder/binder.component';
import { DataService } from './data.service';
import { AsyncPageComponent } from './async-page/async-page.component';
import { WidgetComponent } from './widget/widget.component';

const appRoutes: Routes = [
	{ path: '', component: ButtonPanelComponent, pathMatch: 'full' },
	{ path: 'async-page', component: AsyncPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonPanelComponent,
    BinderComponent,
    AsyncPageComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
