import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe, RouterLink],
  selector: 'app-product-selected',
  styleUrl: './product-selected.css',
  templateUrl: './product-selected.html',
})

export class ProductSelected implements OnInit {

  product = signal<Product|undefined>(undefined) ;
  private readonly activatedRoute = inject (ActivatedRoute) ;
  private readonly productService = inject (ProductService) ;
  private readonly router = inject (Router) ;

  ngOnInit(): void {
    let idProduct = this.activatedRoute.snapshot.paramMap.get('idP') ;
    if (idProduct) {
      this.product.set (this.productService.getProductById(idProduct)) ;
    }
  }

  onBackToProducts() {
    this.router.navigate (["/products"]) ;
  }

}
