import { ParagraphComponent } from './../paragraph/paragraph.component';
import { Component, OnInit } from '@angular/core';
import { Paragraph } from '../paragraph';
import { ParagraphService } from '../paragraph.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-paragraph-list',
  templateUrl: './paragraph-list.component.html',
  styleUrls: ['./paragraph-list.component.css']
})
export class ParagraphListComponent implements OnInit {
  paragraphs: Paragraph[] = [];

  constructor(private paragraphService: ParagraphService, public dialog: MatDialog) { }

  ngOnInit() {
    this.paragraphs = this.paragraphService.get();
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(ParagraphComponent, {
      width: '700px',
      height: '600px',
      data: this.paragraphs[index]
    });
  }

}
