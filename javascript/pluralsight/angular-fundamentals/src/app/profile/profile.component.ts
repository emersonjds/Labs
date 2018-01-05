import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    name: 'Emerson',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLvct2h4zfcF8gDg5Pa5gRUhfZg5FXGbDQNv13P6uLx3r4XfnOg'
  };

  constructor() { }

  ngOnInit() {
  }

}
