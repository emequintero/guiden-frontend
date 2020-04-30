import { NgModule } from '@angular/core';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { MdcIconButtonModule } from '@angular-mdc/web/icon-button';
import { MdcIconModule } from '@angular-mdc/web/icon';
import {MdcMenuModule} from '@angular-mdc/web/menu';
import {MdcListModule} from '@angular-mdc/web/list';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcIconButtonModule,
    MdcIconModule,
    MdcMenuModule,
    MdcListModule
  ]
})
export class MaterialModule { }