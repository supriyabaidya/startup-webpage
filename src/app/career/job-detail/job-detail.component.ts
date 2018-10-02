import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {CareerService} from '../career.service';
import {Job} from '../job.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job;

  constructor(private route: ActivatedRoute, private careerService: CareerService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.job = this.careerService.getJob(params['id']);
        }
      );
  }

}
