import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form = this.fb.group({
    activity: [''],
    cw: [''],
  });
  constructor(private fb: FormBuilder) {}
  newActivity() {
    console.log(this.form.get('activity').value);
  }

  ngOnInit(): void {}
}
