import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from 'src/app/services/rest/camunda-rest.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = null;
  taskId: String;
  formKey: String;
  idTasks:String;
  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute,
    private router:Router) {

  }

  ngOnInit() {
    this.postTasks();
    this.getTasks();
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params['id'] != null) {
          this.taskId = params['id'];
          this.getFormKey();
        } else {
          this.getTasks();
        }
      });
    }
  }

  

  taskClick(id)
{
  
  this.taskId = id;
  this.router.navigateByUrl(`home/tasks/do/${id}`)

  //routerLink="do/{{task.id}}"²  
  
}
  getFormKey(): void {
    this.camundaRestService
      .getTaskFormKey(this.taskId)
      .subscribe(formKey => this.formKey = formKey.key);
  }
  
  getTasks(): void {
    this.camundaRestService
      .getTasks()
      .subscribe((tasks)=>{
       
      });
  }

  postTasks():void{
    this.camundaRestService.postTask().subscribe((suc)=>
      this.tasks= suc
      );
  }
}
