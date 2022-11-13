import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-stusdent',
  templateUrl: './list-stusdent.component.html',
  styleUrls: ['./list-stusdent.component.css']
})
export class ListStusdentComponent implements OnInit {
   Student!: Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe(res=>{
      this.Student=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Student
      })
    });
  }
removeStudent(Student:Student){
  if(confirm("Are you sure to delete"+Student.name)){
    this.studentService.deleteStudent(Student);
  }

}
}
