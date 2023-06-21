import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';
import { UpdateStudentRequest } from '../models/api-models/update-student-request';
import { AddStudentRequest } from '../models/api-models/add-student-request';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44388';

  constructor(private httpClient:HttpClient) { }

  getStudents(): Observable<Student[]>{

    return this.httpClient.get<Student[]>(this.baseApiUrl + '/Students');

  }
  getStudent(studentId:string):Observable<Student>
  {
    return this.httpClient.get<Student>(this.baseApiUrl + '/Students/' + studentId);
  }

  UpdateStudent(studentId:string,studentRequest:Student){
    const updateStudentRequest:UpdateStudentRequest = {
        firstName:studentRequest.firstName,
        lastName:studentRequest.lastName,
        dateOfBirth:studentRequest.dateOfBirth,
        email:studentRequest.email,
        mobile:studentRequest.mobile,
        genderId:studentRequest.genderId,
        physicalAddress:studentRequest.address.physicalAddress,
        postalAddress:studentRequest.address.postalAddress
    }
    return this.httpClient.put<Student>(this.baseApiUrl +'/Students/' + studentId,updateStudentRequest);
  }

  deleteStudent(studentId:string):Observable<Student>
  {
    return this.httpClient.delete<Student>(this.baseApiUrl + '/Students/' + studentId);
  }
  addStudent(studentRequest:Student):Observable<Student>{
    const addStudentRequest:AddStudentRequest = {
      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    };
    return this.httpClient.post<Student>(this.baseApiUrl + '/Students/Add/' , addStudentRequest);
  }
  uploadImage(studdentId:string,file:File):Observable<any>
  {
    const formData = new FormData();
    formData.append("profileImage",file);

    return this.httpClient.post(this.baseApiUrl +'/Students/'+ studdentId + '/upload-image',formData,{
      responseType : 'text'
    });
  }

  getImage(relativePath:string)
  {
      return `${this.baseApiUrl}/${relativePath}`;
  }
}