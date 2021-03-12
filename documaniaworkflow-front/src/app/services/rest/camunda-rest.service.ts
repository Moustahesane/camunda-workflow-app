import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let BASE_URL = environment.CAMUNDA_URL


@Injectable({
  providedIn: 'root'
})
export class CamundaRestService {

private engineRestUrl;
  constructor(private http:HttpClient) { 
    this.engineRestUrl = BASE_URL
  }


  getProcessDefinitionTaskKey(processDefinitionKey): Observable<any> {
    const url = `${this.engineRestUrl}process-definition/key/${processDefinitionKey}/startForm`;
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`fetched formkey`)),
      catchError(this.handleError('getProcessDeifnitionFormKey', []))
    );
  }




  getProcessDefinitions(): Observable<any> {
    return this.http.get<any>(this.engineRestUrl + 'process-definition?latestVersion=true').pipe(
      tap(processDefinitions => this.log(`fetched processDefinitions`)),
      catchError(this.handleError('getProcessDefinitions', []))
    );
  }

  
  deployProcess(fileToUpload: File): Observable<any> {
    const endpoint = `${this.engineRestUrl}deployment/create`;
    const formData = new FormData();


    formData.append("deployment-name",fileToUpload.name)
    formData.append("enable-duplicate-filtering","0")
    formData.append('*', fileToUpload);

    return this.http.post(endpoint, formData);
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
