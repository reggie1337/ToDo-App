import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activities: Task[] = [];
  currentIndex = 0;
  form = this.fb.group({
    act: ['', [Validators.required]],
    cw: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  newActivity() {
    console.log(this.form.get('act').value);
    console.log(this.form.get('cw').value);
    this.activities.push({
      id: this.currentIndex,
      isComplete: false,
      act: this.form.get('act').value,
      cw: this.form.get('cw').value,
    });
    this.currentIndex++;
  }

  taskDone(task: Task) {
    task.isComplete = true;
  }

  taskDelete(task: Task) {
    this.activities = this.activities.filter((a) => a.id !== task.id);
  }

  ngOnInit(): void {}
}
