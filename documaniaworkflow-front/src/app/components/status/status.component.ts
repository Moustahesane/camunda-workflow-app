import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CamundaRestService } from 'src/app/services/rest/camunda-rest.service';
import { ViewbpmnComponent } from '../viewbpmn/viewbpmn.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
 
  processDefinitions;
  keyOfInstance;
  countRuningInstance;
  countActiveInstance;
  countCompletedInstance;
  countUnassigned;
  countTotal;
  countAssignedToGroup;
  countAssignedToUser;
  allInformation;
  strTaskGroupIds;
  listOfUsers;
  theIdOfUser;
  checkVar=false;
  getGroupOfUser=new Array();
  stringGetGroupOfUser="";
  constructor(
    private camundaRestService: CamundaRestService,private modal : NgbModal,
    
    ) {}

  ngOnInit() {
    this.getProcessDefinitions();
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions => {
        this.processDefinitions = processDefinitions
      });
      }

      changeProcess(e){
        this.keyOfInstance = e.target.value;
        this.camundaRestService.getInformationInstance(e.target.value).subscribe(Count =>
          this.countRuningInstance =Count.count
        );
        this.camundaRestService.getInCountInstanceActive(e.target.value).subscribe(Count =>
          this.countActiveInstance=Count.count
        );
        this.camundaRestService. getInCountInstanceCompleted(e.target.value).subscribe(Count =>
          this.countCompletedInstance =Count.count
        );
        this.camundaRestService.getCountUnassigned().subscribe(Count =>
          this.countUnassigned =Count.count
        );
        this.camundaRestService.getTotalInstances().subscribe(Count =>
          this.countTotal =Count.count
        );
        this.camundaRestService.getCountAssignedGroup().subscribe(Count =>
          this.countAssignedToGroup =Count.count
        );
        this.camundaRestService.getCountAssignedUser().subscribe(Count =>
          this.countAssignedToUser=Count.count
        );


        this.camundaRestService.getTheInformationAboutInstance(e.target.value).subscribe(items =>{
          this.allInformation=items;

          // this.allInformation.forEach(element => {
          //  this.getId(element.id)
          // });


        
          // this.taskGroup.forEach(ite=>{
          //      ite.forEach(element2 => {
          //        console.log(element2)
          //      });
          // })
     
        }); 
        
       this.camundaRestService.getListOfUsers().subscribe(ite=>{
        this.listOfUsers =ite;
        this.listOfUsers.forEach(element => {
         
        this.camundaRestService.getGroupOfUser(element.id).subscribe(items=>{
          this.stringGetGroupOfUser="";
           items.forEach(element2 => {
            this.stringGetGroupOfUser +=element2.id +" "+element.firstName;
            console.log(element.firstName)
           });
              
            this.getGroupOfUser.push(this.stringGetGroupOfUser)
           

          })
          // console.log(this.getGroupOfUser)
        }); 
       
       });

       
     
      }
     
  
         getTaskForAssignee(e,idOfTask){
            this.camundaRestService.setAssignee(idOfTask,e.target.value).subscribe(item=>{
            }) 
          }
             
        
      // getId(id:any){
      //    this.camundaRestService.getGroupId(id).subscribe(items=>{
      //       items.forEach(element => {
      //          this.taskGroup.unshift(element)
      //       });
      //    });
      // }
       
     
      
      
  

  defineColor(dueDate:any):string{
    var firstDate = new Date();
    var seconDate = new Date(dueDate);
    var thirdDate = new Date('Thu Jan 01 1970 01:00:00 GMT+0100');
    if(firstDate < seconDate || ( (!(seconDate > thirdDate)) && (!(seconDate < thirdDate)) ))
         return "green"
    else if(firstDate > seconDate )
      return "red"
  } 
  view(key)
  {
    console.log("clicked");
    
    const viewbpmn = this.modal.open(ViewbpmnComponent)
    viewbpmn.componentInstance.key = key;}

}


  



 

 

