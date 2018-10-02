import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() job: Job;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }

}
