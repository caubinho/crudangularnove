import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  //atributo chamado product
  product: Product

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    //pego a id da rota
    const id = +this.route.snapshot.paramMap.get('id')

    //Atualizo o form com dados ao inicializar pegando o id
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {

    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Atualizado com sucesso!')
      this.router.navigate(["/products"]);
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
