import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./componenetes/home/home.component";
import { CardapioComponent } from "./componenetes/cardapio/cardapio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CardapioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodwagon';
}
