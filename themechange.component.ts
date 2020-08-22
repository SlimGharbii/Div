import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themechange',
  templateUrl: './themechange.component.html',
  styleUrls: ['./themechange.component.css']
})
export class ThemechangeComponent implements OnInit {
theme ='';
  constructor() { }

  ngOnInit(): void {
  }
changeTheme(theme:string){
  this.theme=theme;
}
}
