import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStusdentComponent } from './list-stusdent/list-stusdent.component';

const routes: Routes = [
  {path:'',redirectTo:'create',pathMatch:'full'},
  {path:'create',component:CreateStudentComponent},
  {path:'list-student',component:ListStusdentComponent},
  {path:'update-student/:id',component:EditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
