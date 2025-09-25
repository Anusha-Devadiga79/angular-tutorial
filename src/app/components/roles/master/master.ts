import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Roles } from '../roles';
import { Designation } from '../../designation/designation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [Designation,Roles,CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

  currentComponent: string = "Roles";

  changeTab(tabName : string ){
    this.currentComponent = tabName;

  }
}
