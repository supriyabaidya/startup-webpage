import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {Job} from '../job.model';
import {CareerService} from '../career.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit, OnDestroy {
  jobs: Job[];
  jobsChangedSubscription: Subscription;

  constructor(private careerService: CareerService) {
  }

  ngOnInit() {
    this.jobsChangedSubscription = this.careerService.jobsChanged
      .subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs;
        }
      );
    this.jobs = this.careerService.getJobs();
  }

  ngOnDestroy(): void {
    this.jobsChangedSubscription.unsubscribe();
  }

  onSearch(form: NgForm) {
    const keyword = form.value.search;
    // console.log(keyword);

    this.jobs = this.careerService.searchJob(keyword);
  }

}
