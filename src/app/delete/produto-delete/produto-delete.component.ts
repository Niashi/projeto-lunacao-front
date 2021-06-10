import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto()

  categoria: Categoria = new Categoria()
  idProduto: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/logar'])
    }

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  apagar() {
    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/principal'])
    })

  }

}
