import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { TransactionsComponent } from './shared/pages/transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    title: 'Personal finance - Home',
    component: HomeComponent,
  },
  {
    path: 'transactions',
    title: 'Personal finance - Transactions',
    component: TransactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
