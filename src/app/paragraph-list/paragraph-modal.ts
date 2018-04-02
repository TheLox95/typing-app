import { Paragraph } from './../paragraph';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { ParagraphComponent } from '../paragraph/paragraph.component';

export class ParagraphModal {
  private _dialogInstance: MatDialogRef<ParagraphComponent, any>;
  private readonly EXIT_KEY_CODE = 27;
  private _dialog: MatDialog;
  private _paragraph: Paragraph;

  public static fromMatDialog(dialog: MatDialog, paragraph: Paragraph) {
    const modal = new ParagraphModal();
    modal.dialog = dialog;
    modal.paragraph = paragraph;
    return modal;
  }

  static fromDialogref(dialogRef: MatDialogRef<ParagraphComponent, any>) {
    const modal = new ParagraphModal();
    modal.dialogRef = dialogRef;
    return modal;
  }

  set dialog(dialog: MatDialog) {
    this._dialog = dialog;
  }

  set paragraph(paragraph: Paragraph) {
    this._paragraph = paragraph;
  }

  set dialogRef(dialog: MatDialogRef<ParagraphComponent, any>) {
    this._dialogInstance = dialog;
  }

  open() {
    this._dialogInstance = this._dialog.open(ParagraphComponent, {
      width: '700px',
      height: '600px',
      data: this._paragraph
    });
    this._dialogInstance.disableClose = true;

    this._dialogInstance.keydownEvents().subscribe((e: KeyboardEvent) => {
      if (e.keyCode === this.EXIT_KEY_CODE) {
        const sure = confirm('Do you want to exit?');
        if (sure === true) {
          this._dialogInstance.close();
        }
      }
    });
  }

  close() {
    this._dialogInstance.close();
  }
}
