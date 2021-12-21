import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { QueryComponent } from './query/query.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { ScientistCardComponent } from './scientist-card/scientist-card.component';
import { CardHolderComponent } from './card-holder/card-holder.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './_state/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from './message.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    QueryComponent,
    StructuralDemoComponent,
    TableDemoComponent,
    ScientistCardComponent,
    CardHolderComponent,
    LeftComponent,
    RightComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }), //  counter is the name of the slice (section fo the entire state)
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: false,
      autoPause: false,
    }),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MessageService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
