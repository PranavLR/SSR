import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SSR';

  titleService = inject(Title)  
  metaService = inject(Meta)  

  constructor() {
    this.titleService.setTitle("Pranav Joshi")
    // this.metaService.addTag({name: 'description', content: 'Hello Pranav Joshi'})
  }

}
