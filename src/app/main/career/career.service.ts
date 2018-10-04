import {Job} from './job.model';
import {Subject} from 'rxjs';

export class CareerService {
  jobsChanged = new Subject<Job[]>();
  private jobs: Job[] = [
    new Job('test job title1', 'test job desc1 test job desc1 test job desc1 test job desc1',
      ['test job requirement1', 'test job requirement1', 'test job requirement1', 'test job requirement1'], 1, 180000),
    new Job('test job title1', 'test job desc1 test job desc1 test job desc1 test',
      ['test job requirement1', 'test job requirement1', 'test job requirement1', 'test job requirement1'], 1, 180000),
    new Job('test job title2', 'test job desc2 test job desc2',
      ['test job requirement2', 'test job requirement2', 'test job requirement2', 'test job requirement2'], 3, 250000),
    new Job('test job title3', 'test job desc3 test job desc3 test job desc3',
      ['test job requirement3', 'test job requirement3', 'test job requirement3', 'test job requirement3'], 4, 300000),
    new Job('test job title3', 'test job desc3 test job desc3',
      ['test job requirement3', 'test job requirement3', 'test job requirement3', 'test job requirement3'], 4, 300000),
    new Job('test job title4', 'test job desc4',
      ['test job requirement4', 'test job requirement4', 'test job requirement4', 'test job requirement4'], 5, 400000),
    new Job('test job title5 test job title5 test job title5 test job title5 test job title5 test job title5 test job title5',
      'test job desc5 test job desc5 test job desc5 test job desc5 test job desc5',
      ['test job requirement5', 'test job requirement5', 'test job requirement5', 'test job requirement5'], 0.5, 150000)
  ];

  getJobs() {
    return this.jobs.slice();
  }

  setJobs(jobs: Job[]) {
    this.jobs = jobs;
    this.jobsChanged.next(this.jobs.slice());
  }

  getJob(index: number) {
    return this.jobs[index];
  }

  addJob(newJob: Job) {
    this.jobs.push(newJob);
    this.jobsChanged.next(this.jobs.slice());
  }

  updateJob(index: number, newJob: Job) {
    this.jobs[index] = newJob;
    this.jobsChanged.next(this.jobs.slice());
  }

  deleteJob(index: number) {
    this.jobs.splice(index, 1);
    this.jobsChanged.next(this.jobs.slice());
  }

  searchJob(keyword: string) {
    const searchedJobs: Job[] = [];
    for (const job of this.jobs) {
      if (job.title.search(keyword) >= 0) {
        // console.log(job.title.search(keyword));
        searchedJobs.push(job);
      }
    }
    return searchedJobs;
  }
}
