import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CamundaRestService } from 'src/app/services/rest/camunda-rest.service';
import { ViewbpmnComponent } from '../viewbpmn/viewbpmn.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  processDefinitions;

  constructor(private camundaRestService: CamundaRestService,private modal : NgbModal) { }

  ngOnInit() {
    this.getProcessDefinitions();
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions => this.processDefinitions = processDefinitions);
  }


  view(key)
  {
    console.log("clicked");
    
    const viewbpmn = this.modal.open(ViewbpmnComponent)
    viewbpmn.componentInstance.key = key;



  }
}
