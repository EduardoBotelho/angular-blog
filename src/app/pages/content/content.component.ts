import { dataFake } from './../../data/dataFake';
import { Component, Input, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"
  contentTitle: string = "Lancamentos 2025"

  contentDescription: string = "Novo Lancamentos de Filmes"

  public id:string | null ="0";
 constructor  (
  private route:ActivatedRoute
 ){}
  ngOnInit():void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("Id");
      this.setValuesToComponent(this.id);
    });    // You can add an
    // y initialization logic here if needed
  }
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
  }
}
