import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
    
  todos = signal<any[]>([]);

  http = inject(HttpClient)
  
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').pipe()
    .subscribe((data: any) => {
      this.todos.set(data);
    })
  }
}