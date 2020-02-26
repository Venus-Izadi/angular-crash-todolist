import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String = ' World ';

  constructor(){
    this.changeName(' Earth ');
  }

  private changeName(to: string) {
    return this.name = to;
  }
}
