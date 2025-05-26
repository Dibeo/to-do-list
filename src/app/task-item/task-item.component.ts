import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: string;
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }
}
