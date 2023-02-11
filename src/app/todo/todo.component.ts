import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hello-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {}
