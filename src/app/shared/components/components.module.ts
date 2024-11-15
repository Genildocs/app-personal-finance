import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { SidebarDesktopComponent } from './sidebar-desktop/sidebar-desktop.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconsSidebarComponent } from './icons-sidebar/icons-sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { CardPotsComponent } from './card-pots/card-pots.component';
import { TitlePageComponent } from './title-page/title-page.component';
@NgModule({
  declarations: [
    InputFieldsComponent,
    SidebarDesktopComponent,
    SidebarMobileComponent,
    IconsSidebarComponent,
    CardsComponent,
    CardPotsComponent,
    TitlePageComponent,
  ],
  imports: [CommonModule, AngularSvgIconModule, RouterLink, RouterLinkActive],
  exports: [
    InputFieldsComponent,
    SidebarDesktopComponent,
    SidebarMobileComponent,
    CardsComponent,
    CardPotsComponent,
    TitlePageComponent,
  ],
})
export class ComponentsModule {}
