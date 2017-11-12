import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private name: string;

  ngOnInit() {

    console.log(this.changeTitle("maria")) 
  }

  changeTitle(name: string) {
    return this.title = name;
  }

  
}
