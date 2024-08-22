import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
      menuIcon.classList.toggle('active', this.isMenuOpen);
    }
  }
}
