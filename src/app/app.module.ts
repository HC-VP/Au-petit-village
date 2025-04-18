import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';

import { SortByPricePipe } from './sort-by-price.pipe';
import { SortByNamePipe } from './sort-by-name.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { ProductDetailComponent } from './components/products-detail/products-detail.component'

@NgModule({
  declarations: [
    AppComponent,        
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    HomeComponent,

    SortByPricePipe,
    SortByNamePipe,
    FilterByNamePipe,
    ProductDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
