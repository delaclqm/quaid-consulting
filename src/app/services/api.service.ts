import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public endpoint = 'https://quaid-consulting-api.herokuapp.com/';

  constructor(private http : HttpClient) { }

  getExperience(params? : any) : Observable<any> {
    let url = this.endpoint + 'positions';
    if (params) url += '?' + params;
    return this.http.get(url);
  }

  getEducation() : Observable<any> {
    return this.http.get(this.endpoint + 'schools');
  }

  getProjects() : Observable<any> {
    return this.http.get(this.endpoint + 'projects');
  }

  contactMeFormSubmit(formData) : Observable<any> {
    let body = JSON.stringify(formData);
    return this.http
      .post(this.endpoint + 'form-submissions', body);
  }
}
