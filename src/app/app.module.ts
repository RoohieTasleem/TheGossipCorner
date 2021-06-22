import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/common/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from "../common/auth/auth.module";
import { AppComponent } from './app.component';

import { LayoutComponent } from '../common/layout/layout.component';

import { AboutUsComponent } from 'src/features/about-us/about-us.component';
import { HomeComponent } from 'src/features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
