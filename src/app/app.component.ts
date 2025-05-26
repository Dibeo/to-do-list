import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    TaskItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newTask = '';
  items: string[] = [];

  addToList() {
    if (this.newTask.trim()) {
      this.items.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.items.splice(index, 1);
  }
}
