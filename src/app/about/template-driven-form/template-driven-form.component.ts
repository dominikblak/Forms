import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('contactForm')
  contactForm: NgForm;

  message = new TemplateMessage();
  courses = ['Angular', 'Java', 'Java8', 'OrmLite'];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(contactForm) {
    console.log(this.message);
    this.reset();

  }
  reset() {
    this.message = new TemplateMessage();
    this.contactForm.resetForm(this.message);
  }
}
class TemplateMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course = 'Angular',
    public bot?: boolean
  ) { }
}
