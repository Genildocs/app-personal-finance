import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-sidebar',
  templateUrl: './icons-sidebar.component.html',
  styleUrl: './icons-sidebar.component.css',
})
export class IconsSidebarComponent {
  styleUl = ['flex', 'md:flex-col', 'items-center', 'justify-center', 'h-full'];
  styleLi = [
    'grow',
    'self-stretch',
    'flex',
    'items-center',
    'justify-center',
    'md:justify-start',
    'md:p-5',
  ];
}
