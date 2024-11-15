import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css',
})
export class TitlePageComponent {
  @Input('titlePages') title: string = '';
}
