import { ParagraphComponent } from './../paragraph/paragraph.component';
import { Component, OnInit } from '@angular/core';
import { Paragraph } from '../paragraph';
import { ParagraphService } from '../paragraph.service';
import { MatDialog } from '@angular/material/dialog';
import { ParagraphModal } from './paragraph-modal';

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
    const modal = ParagraphModal.fromMatDialog(this.dialog, this.paragraphs[index]);
    modal.open();
  }

}
