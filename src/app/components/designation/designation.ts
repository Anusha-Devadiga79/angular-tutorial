import { Component, inject, OnInit } from '@angular/core';
import { Masterr } from '../../services/masterr';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css'
})
export class Designation implements OnInit {
  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterService = inject(Masterr);
  ngOnInit(): void {
  this.masterService.getDesignations().subscribe({
    next: (res: APIResponseModel) => {
      console.log('API Response:', res);
      if (res.result) {
        this.designationList = res.data;
        this.isLoader = false;
        console.log('Designations:', this.designationList);
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
