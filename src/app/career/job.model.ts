export class Job {
  public title: string;
  public description: string;
  public requirements: string[];
  public experience: number;
  public salary: number;

  constructor(title: string, description: string, requirements: string[], experience: number, salary: number) {
    this.title = title;
    this.description = description;
    this.requirements = requirements;
    this.experience = experience;
    this.salary = salary;
  }
}
