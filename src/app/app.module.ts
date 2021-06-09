import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EducativoComponent } from './educativo/educativo.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    EducativoComponent,
    MenuComponent,
    LoginComponent,
    CadastrarComponent,
    PrincipalComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutoEditComponent,
    UserEditComponent,
    MenuLogadoComponent,
    MenuLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
