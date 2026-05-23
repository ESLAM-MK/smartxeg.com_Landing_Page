import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./components/hero-section/hero-section";
import { Services } from "./components/services/services";
import { Contacts } from "./components/contacts/contacts";
import {  About } from "./components/about/about";

@Component({
  selector: 'app-root',
  imports: [ Navbar, HeroSection, Services, Contacts, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart-x');
}
