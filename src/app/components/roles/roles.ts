import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrls: ['./roles.css']
})
export class Roles implements OnInit {

  roleList: IRole[] = [];
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    console.log('Calling API via local proxy...');

    this.http.get<APIResponseModel>('http://localhost:3000/roles')
      .subscribe({
        next: (res: APIResponseModel) => {
          console.log('API Response:', res);
          if (res.result) {
            this.roleList = res.data;
            console.log('Roles:', this.roleList);
          } else {
            console.warn('API returned result=false');
          }
        },
        error: (err) => {
          console.error('API Error:', err);
        }
      });
  }
}
// import { Component, inject, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { IRole } from '../../model/interface/role';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// @Component
// ({ selector: 'app-roles', 
//   standalone: true, 
//   imports: [FormsModule, CommonModule], 
//   templateUrl: './roles.html', 
//   styleUrls: ['./roles.css'] 
// }) 
//   export class Roles implements OnInit { 
//     roleList: IRole[] = []; 
//     private http = inject(HttpClient); 

//     ngOnInit(): void { 
//       this.getAllRoles(); 
//     } 
//     getAllRoles() { 
//       this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => { this.roleList = res.data; }) 
//     }}