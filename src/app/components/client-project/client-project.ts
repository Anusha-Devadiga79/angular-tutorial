import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clientt } from '../../services/clientt';
import { APIResponseModel, ClientProjectModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Alert } from '../../reusableComponent/alert/alert';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe,UpperCasePipe,Alert],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  clientSrv = inject(Clientt)
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  firstName = signal("Angular 20");

  projectList = signal<ClientProjectModel[]>([])



  ngOnInit(): void {
    const name = this.firstName();
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
  }

  changeFname(){
    this.firstName.set("ReactJs")
  }
  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClientProject() {
    this.clientSrv.getAllClientProject().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data)
    })
  }

  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Project Created Successfully')
      } else {
        alert(res.message)
      }
    })
  }
}
