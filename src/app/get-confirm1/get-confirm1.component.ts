import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm1',
  templateUrl: './get-confirm1.component.html',
  styleUrls: ['./get-confirm1.component.scss']
})
export class GetConfirm1Component implements OnInit {

  constructor(
    private _matdilogRef : MatDialogRef<GetConfirm1Component>
  ) { }

  ngOnInit(): void {
  }
 
  onclose(flag : boolean){
    this._matdilogRef .close(flag)
    
  }

}
