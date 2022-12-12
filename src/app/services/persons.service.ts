import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(environment.apiUrl + '/person');
  }
  
  getPerson(id: number): Observable<Person> {
    return this.httpClient.get<Person>(environment.apiUrl + '/person/' + id);
  }

  createPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(environment.apiUrl + '/person/', JSON.stringify(person), this.httpOptions);
  }

  updatePerson(id: number, person: Person): Observable<Person> {
    return this.httpClient.put<Person>(environment.apiUrl + '/person/' + id, JSON.stringify(person), this.httpOptions);
  }

  deletePerson(id: number) {
    return this.httpClient.delete<Person>(environment.apiUrl + '/person/' + id);
  }

}
