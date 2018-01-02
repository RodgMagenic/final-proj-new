import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './@shared/material.module';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardListComponentComponent } from './board-list-component/board-list-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NewBoardComponentComponent } from './new-board-component/new-board-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    BoardListComponentComponent,
    ParentComponentComponent,
    NewBoardComponentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
