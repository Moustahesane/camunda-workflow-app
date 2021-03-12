import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from 'src/app/services/rest/camunda-rest.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

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
