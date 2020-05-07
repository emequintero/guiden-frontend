import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdcDialogModule } from '@angular-mdc/web/dialog';
import { AppComponent } from './app.component';
import { NodeComponent } from './components/node/node.component';
import { GraphComponent } from './components/graph/graph.component';
import { NavComponent } from './components/nav/nav.component';
import { GuidenComponent } from './components/guiden/guiden.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { LegendComponent } from './components/legend/legend.component';
import { TutorialDialogComponent } from './components/tutorial-dialog/tutorial-dialog.component';
import { UppertrimPipe } from './pipes/uppertrim.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    GraphComponent,
    NavComponent,
    GuidenComponent,
    LegendComponent,
    TutorialDialogComponent,
    UppertrimPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    MdcDialogModule
  ],
  entryComponents: [
    TutorialDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
