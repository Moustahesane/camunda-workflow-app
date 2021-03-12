import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from 'src/app/services/rest/camunda-rest.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

   processDefinitions;

  constructor(private camundaRestService: CamundaRestService) { }

  ngOnInit() {
    this.getProcessDefinitions();
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions => this.processDefinitions = processDefinitions);
  }
}
