import { Component, inject, Signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly productService = inject (ProductService) ; 
  products : Signal<Product[]>=this.productService.products ; 
}
