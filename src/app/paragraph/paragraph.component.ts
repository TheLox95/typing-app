import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Paragraph } from '../paragraph';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Paragraph, public dialogRef: MatDialogRef<ParagraphComponent>) { }

  ngOnInit() {
    console.log(this.data);
  }

}
