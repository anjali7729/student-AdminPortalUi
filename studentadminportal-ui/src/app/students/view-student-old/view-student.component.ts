//ts
//import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/api-models/student.model';
import { Gender } from 'src/app/models/api-models/gender.model';
import { GenderService } from '../../services/gender.service';
import { subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})

export class ViewStudentComponent implements OnInit{
  
isNewStudent = true;
header = '';
displayProfileImage = '';

genderList : Gender[] = [];
studentId: string | null | undefined;
student: Student = {
  id:'',
  firstName:'',
  lastName:'',
  dateOfBirth:'',
  email:'',
  mobile:0,
  genderId:'',
  profileImageUrl:'',
  gender:{
    id:'',
    description:''
  },
  address:{
    id:'',
    physicalAddress:'',
    postalAddress:''
  }
}

@ViewChild('studentDetailsForm') studentDetailsForm?:NgForm;

  constructor(private readonly studentService : StudentService, private readonly route:ActivatedRoute,private readonly genderService:GenderService,private snakBar : MatSnackBar,private router:Router )
  {
    this.genderService.getGenderList().subscribe(
      (successResponse) => {
        //console.log(successResponse);
        this.genderList = successResponse;
      }
    );
   // this.setImage();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.studentId = params.get('id');
        // if(this.studentId == undefined)
        // {
        //   this.header = 'Add New Student';
        // }
        if(this.studentId)
        {
          
          if(this.studentId.toLowerCase() === 'Add'.toLowerCase())
          {
            //if route add->new student functionality
            this.isNewStudent = true;
          }else{
            //otherwise->exist student functionality  
            this.isNewStudent = false;
            this.header = 'Upadate Student';
            this.studentService.getStudent(this.studentId).subscribe(
              (successResponse) =>{
                this.student = successResponse;
                this.setImage();
                //console.log(successResponse);
              }
            );
          }

          this.genderService.getGenderList().subscribe(
            (successResponse) => {
              //console.log(successResponse);
              this.genderList = successResponse;
            }
          );
        }
        else{
          this.header = 'Add New Student';
          this.setImage();
        }
      }
    );
   }

   onUpdate():void{
    if(this.studentDetailsForm?.form.valid)
    {
      this.studentService.UpdateStudent(this.student.id,this.student).subscribe(
        (successResponse) => {
          //console.log(successResponse);
          //show notification
          this.snakBar.open("Student Update Successfully",undefined,{
            duration:2000
          });
          this.router.navigate(['/Students']);
        },
        (error) => {
          //log it
          console.log(error);
        }
      )
    }
   }

   onDelete():void{
    this.studentService.deleteStudent(this.student.id).subscribe(
      (succcessResponse) => 
      {
        this.snakBar.open("Student Deleted successfully",undefined,{
          duration:2000
        });
        this.router.navigate(['/Students']);
        //console.log(succcessResponse);
      },(error) => {
        //log
      }
    );
   }

   onAdd():void{

    if(this.studentDetailsForm?.form.valid)
    {
      this.studentService.addStudent(this.student).subscribe(
        (successResponse) => {
          this.snakBar.open("Student Add successfully",undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl(`Students/${successResponse.id}`);
          },2000);
          //console.log(successResponse);
        },
        (error) => {
          //log
        }
      );
    }

   }

   private setImage():void
   {
      if(this.student.profileImageUrl)
      {
        //fetch image by url
        this.displayProfileImage =this.studentService.getImage(this.student.profileImageUrl); 
      }
      else{
        //display default image
        this.displayProfileImage = './assets/user.png';
      }
   }

   uploadImage(event:any):void
   {
      if(this.studentId)
      {
        const file: File = event.target.files[0];
        this.studentService.uploadImage(this.student.id,file).subscribe(
          (successResponse) => {
            this.student.profileImageUrl = successResponse;
            this.setImage();

            //show notification
            this.snakBar.open("Profile Image Update",undefined,{
              duration:2000
            });
          },
          (errorResponse) => {

          }
        )
      }
   }
}
