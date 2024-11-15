import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  values: string[] = ['4,836.0', '3,814.25', '1,700.50'];
  nameCard: string[] = ['Current balance', 'Income', 'Expenses'];
  titlePage: string = 'Overview';
}
