import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { SearchComponent } from '../search/search.component';
import { ProductCardComponent } from '../product-card/product-card.component';




@NgModule({
  declarations: [ProductComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ProductModule { }