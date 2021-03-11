import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

let BASE_URL = environment.CAMUNDA_URL


@Injectable({
  providedIn: 'root'
})
export class CamundaRestService {

  constructor(private http:HttpClient) { 

  }







}
