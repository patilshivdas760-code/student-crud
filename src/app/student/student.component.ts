import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './models/std';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  constructor(
    private _matdialog: MatDialog,
      private _snackbar : MatSnackBar
  ) {}

  ngOnInit(): void {}

  trackById(index: number, s: Istd) {
    return s.id;
  }

  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  };

  stdarr: Array<Istd> = [
    {
      fname: 'Shivdas',
      lname: 'Patil',
      email: 'shivdas.patil@gmail.com',
      contact: '9876543210',
      id: 'U101',
    },
    {
      fname: 'Rahul',
      lname: 'Sharma',
      email: 'rahul.sharma@gmail.com',
      contact: '9123456780',
      id: 'U102',
    },
    {
      fname: 'Neha',
      lname: 'Singh',
      email: 'neha.singh@gmail.com',
      contact: '9988776655',
      id: 'U103',
    },
    {
      fname: 'Amit',
      lname: 'Verma',
      email: 'amit.verma@gmail.com',
      contact: '9012345678',
      id: 'U104',
    },
    {
      fname: 'Priya',
      lname: 'Kulkarni',
      email: 'priya.kulkarni@gmail.com',
      contact: '9090909090',
      id: 'U105',
    },
  ];
  isineditmode: boolean = false;
  isineditid !: string 


  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('stdid') stdid!: ElementRef;

  onstdadd() {
    if(
       this.fname.nativeElement.value &&
    this.lname.nativeElement.value &&
    this.email.nativeElement.value &&
    this.contact.nativeElement.value 
    ){
    let STD_Obj: Istd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: this.uuid(),
    };
  

    this.stdarr.push(STD_Obj);
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';
  }
}

  onremove(id: string) {
    let matConfig = new MatDialogConfig();
    matConfig.disableClose = true;
    matConfig.width = '500px';

    let MatDialogRef = this._matdialog.open(GetconfirmComponent);
    MatDialogRef.afterClosed()
    .subscribe((res) => {
      if (res) {
        let getindex = this.stdarr.findIndex((std) => std.id === id);
        this.stdarr.splice(getindex, 1);
        this._snackbar.open( `the student with  ${id} remove successfully`,'close',{
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000
        } )
      }
    });
  }
 onedit(std:Istd){
     this.isineditid = std.id;
     this.fname.nativeElement.value = std.fname
     this.lname.nativeElement.value = std.lname
     this.email.nativeElement.value = std.email
     this.contact.nativeElement.value  = std.contact
     this.isineditmode = true;
 }
  
 onstdupdate(){
     let update_obj :  Istd ={
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
        id : this.isineditid 
     }
     let getindex = this.stdarr.findIndex(s=>s.id === this.isineditid)
     this.stdarr[getindex] = update_obj
     this.isineditmode = true

       this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';
 }

 
  
}
