import { Component, OnInit,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver,
  OnChanges, SimpleChange, Input, SimpleChanges } from '@angular/core';
import { ApproveDataTaskComponent, MyAddonModule, StartNewProcessComponent } from 'src/app/myprocess/my-addon/my-addon.module';
@Component({
  selector: 'app-genericform',
  templateUrl: './genericform.component.html',
  styleUrls: ['./genericform.component.css']
})
export class GenericformComponent implements OnChanges {

  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef
   @Input() formKey = null;
   @Input() taskId = null;
   private rootViewContainer : ViewContainerRef = null;
   private myAddonModule = null;
   private currentChange = 'task'
 
   
  constructor(private factoryResolver: ComponentFactoryResolver) { }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {

    for (let propName in changes) {
      if (propName === 'formKey' && changes[propName].currentValue != null) {
        this.loadForm(changes[propName].currentValue);
        this.currentChange = 'frm'
      }else if (propName === 'taskId' && changes[propName].currentValue != null) {
        this.loadForm(changes[propName].currentValue);
        this.currentChange = 'task'


      }

    }
  }

  loadForm(formKey: String): void {
    this.setRootViewContainerRef(this.viewContainerRef);
    this.addDynamicComponent(formKey);
  }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  public addDynamicComponent(formKey: String) {
    console.log(MyAddonModule)
    console.log(formKey)
    let factory
    if (this.currentChange=="frm") {
      factory = this.factoryResolver.resolveComponentFactory(StartNewProcessComponent)
    }
    else{

      factory = this.factoryResolver.resolveComponentFactory(ApproveDataTaskComponent)

    }
    const component = factory.create(this.rootViewContainer.parentInjector)
     this.rootViewContainer.clear()
    this.rootViewContainer.insert(component.hostView)
  }

 

}
