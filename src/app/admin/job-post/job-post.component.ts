import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onJobPost(form: NgForm) {
    console.log('onJobPost');
    console.log(form.value.title);
    console.log(form.value.description);
    console.log(form.value.requirements);
    console.log(form.value.experience);
    console.log(form.value.salary);
  }
}
