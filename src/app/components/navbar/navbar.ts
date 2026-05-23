import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  scrollTo(component:string){
    document.getElementById(component)?.scrollIntoView(
      {behavior:'smooth'}
    )
  }
  
}
