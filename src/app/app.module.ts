import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecurringBillsComponent } from './shared/pages/recurring-bills/recurring-bills.component';
import { PotsComponent } from './shared/pages/pots/pots.component';
import { BudgetComponent } from './shared/pages/budget/budget.component';
import { TransactionsComponent } from './shared/pages/transactions/transactions.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { AuthComponent } from './shared/pages/auth/auth.component';
import { ComponentsModule } from './shared/components/components.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RecurringBillsComponent,
    PotsComponent,
    BudgetComponent,
    TransactionsComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
