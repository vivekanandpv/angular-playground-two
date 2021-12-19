import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { QueryComponent } from './query/query.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    QueryComponent,
    StructuralDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
