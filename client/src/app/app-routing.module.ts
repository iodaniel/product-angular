import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
// import { EditProductComponent } from './components/create-product/create-product.component';
const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'edit-product/:id', component: CreateProductComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}//redirige cuando el usuario agregar una router que no exite 
  //lo redirige a la list esta linea debe de estar al final de las rutas. 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
