import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from 'src/app/services/rest/camunda-rest.service';

@Component({
  selector: 'app-dotask',
  templateUrl: './dotask.component.html',
  styleUrls: ['./dotask.component.css']
})
export class DotaskComponent implements OnInit {
  taskId: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private camundaRestService: CamundaRestService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        this.taskId = params['taskid'];

      });
    }
  }

}
