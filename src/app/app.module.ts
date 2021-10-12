import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BoxGridComponent } from './box/components/box-grid/box-grid.component';
import { SumWalletsPipe } from './user/sum-wallets.pipe';
import { BoxItemComponent } from './box/components/box-item/box-item.component';
import { BoxDetailsComponent } from './box/components/box-details/box-details.component';
import { BoxOpeningItemComponent } from './box/components/box-opening-item/box-opening-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoxGridComponent,
    BoxItemComponent,
    BoxDetailsComponent,
    BoxOpeningItemComponent,
    SumWalletsPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
