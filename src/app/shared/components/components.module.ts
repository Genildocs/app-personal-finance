import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ProfilePicturesComponent } from './profile-pictures/profile-pictures.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { SidebarDesktopComponent } from './sidebar-desktop/sidebar-desktop.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    InputFieldsComponent,
    ButtonsComponent,
    ProfilePicturesComponent,
    CompanyListComponent,
    PersonListComponent,
    SidebarDesktopComponent,
    SidebarMobileComponent,
  ],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [
    InputFieldsComponent,
    ButtonsComponent,
    ProfilePicturesComponent,
    CompanyListComponent,
    PersonListComponent,
    SidebarDesktopComponent,
    SidebarMobileComponent,
  ],
})
export class ComponentsModule {}
