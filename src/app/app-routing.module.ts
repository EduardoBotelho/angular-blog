import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'content/:id', component: ContentComponent }, // Página de conteúdo
  { path: '**', redirectTo: '' } // Redireciona rotas inválidas para a página inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
