import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NodeComponent } from './components/node/node.component';
import { GraphComponent } from './components/graph/graph.component';
import { NavComponent } from './components/nav/nav.component';
import { GuidenComponent } from './components/guiden/guiden.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material.module';
import { LegendComponent } from './components/legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    GraphComponent,
    NavComponent,
    GuidenComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
