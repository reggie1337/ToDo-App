import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activities: Task[] = [];
  form = this.fb.group({
    act: [''],
    cw: [''],
  });

  constructor(private fb: FormBuilder) {}

  newActivity() {
    console.log(this.form.get('act').value);
    console.log(this.form.get('cw').value);
    this.activities.push({
      act: this.form.get('act').value,
      cw: this.form.get('cw').value,
    });
  }

  ngOnInit(): void {}
}
