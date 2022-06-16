import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionAreaComponent } from './action-area/action-area.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionAreaComponent,
    UsersPageComponent,
    OrdersPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
