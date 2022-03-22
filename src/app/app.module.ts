import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './features/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './features/home/product/product.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeModule } from './features/home/home.module';
import { FashionsComponent } from './features/home/fashions/fashions.component';
import { DiscountComponent } from './features/home/discount/discount.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FashionsComponent,
    DiscountComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
