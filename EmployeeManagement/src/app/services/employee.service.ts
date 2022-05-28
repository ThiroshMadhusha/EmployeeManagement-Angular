import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  addEmpURL: string;
  getEmpURL: string;

  constructor(private http: HttpClient) {
    this.addEmpURL = 'http://llocalhost:4200/emp/addEmployee';
    this.getEmpURL = 'http://llocalhost:4200/emp/getAll';
  }
  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.addEmpURL, emp);
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getEmpURL);
  }
}
