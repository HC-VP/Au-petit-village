import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';



import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailComponent } from './components/products-detail/products-detail.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent},
  { path: "products", component: ProductComponent},

  { path: "footer", component: FooterComponent},
  { path: "header", component: HeaderComponent},
  { path: 'product/:id', component: ProductDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


