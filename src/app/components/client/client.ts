import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/interface/role';
import { Clientt } from '../../services/clientt';
import { Client } from '../../model/class/Client';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Alert } from '../../reusableComponent/alert/alert';
import { MyButton } from '../../reusableComponent/my-button/my-button';

@Component({
  selector: 'app-client',
  imports: [FormsModule,UpperCasePipe,DatePipe,JsonPipe,AsyncPipe,Alert,MyButton],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class ClientComponent implements OnInit {

  currentDate:Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientt = inject(Clientt)

  userList$ :Observable<any> = new Observable<any>

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientt.getAllUser();  }

  loadClient(){
    this.clientt.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient(data:string){
    debugger;
    this.clientt.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client Created Success")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
      
    })
  }

  onEdit(data:Client){
    this.clientObj = data;
  }

  onDelete(id:number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      this.clientt.deleteClientById(id).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client Deleted Success")
        this.loadClient();
      } else {
        alert(res.message)
      }
    })
    }
  }
}
