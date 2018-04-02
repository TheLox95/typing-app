import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Paragraph } from '../paragraph';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Character } from '../character';
import { Timmer } from './timmer';
import { trigger, transition, style, animate } from '@angular/animations';
import { ParagraphModal } from '../paragraph-list/paragraph-modal';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':leave', [
        animate('300ms ease-out', style({transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden'}))
      ])
    ])
  ]
})
export class ParagraphComponent implements OnInit {
  timmer  = new Timmer();
  characters: Character[];
  wrongAmmo = 0;
  timeIsRunning = false;
  isFinished = false;
  private characterAmmoToBeTyped = 0;
  private _dialog: ParagraphModal;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Paragraph,
    public dialogRef: MatDialogRef<ParagraphComponent>,
    private _hotkeysService: HotkeysService,
  ) {}

  ngOnInit() {
    this.characters = this._textToCharacters(this.data.body);
    this._bindEvents();
    this._dialog = ParagraphModal.fromDialogref(this.dialogRef);
  }

  exit() {
    this._dialog.close();
  }

  private onKeyPress = (character: string): boolean => {
    const currentCharacter = this.characters[this.characterAmmoToBeTyped];
    if (this._isFirstCharacterTyped(this.characterAmmoToBeTyped, this.timeIsRunning)) {
      this._startTimmer();
    }
    if (currentCharacter.body === character) {
      console.log(`${character} typed`);
      currentCharacter.typed = 'CORRECT';
      if (this._isLastCharacter(this.characters.length, this.characterAmmoToBeTyped)) {
        this.timmer.stop();
        this.isFinished = true;
        console.log('completed');
        return;
      }
      this.characterAmmoToBeTyped++;
      console.log(`current ::${this.characters[this.characterAmmoToBeTyped].body}::`);
    } else {
      console.log(`wrong character`);
      currentCharacter.typed = 'WRONG';
      this.wrongAmmo++;
    }
    return false; // Prevent bubbling
  }

  private _startTimmer() {
    this.timeIsRunning = true;
    this.timmer.start();
  }

  private _bindEvents() {
    for (const character of this.data.body) {
      if (character === '␣') {
        this._hotkeysService.add(new Hotkey('space', () => this.onKeyPress(character)));
      } else if (character === '↵') {
        this._hotkeysService.add(new Hotkey('enter', () => this.onKeyPress(character)));
      } else {
        this._hotkeysService.add(new Hotkey(character, () => this.onKeyPress(character)));
      }
    }
  }

  private _textToCharacters(text: string) {
    return text.split('').map<Character>(character => {
      return {body: character, typed: 'NOT'};
    });
  }

  private _isFirstCharacterTyped(characterIndex: number, isTimeRunning: boolean) {
    return this.characterAmmoToBeTyped === 0 && this.timeIsRunning === false;
  }

  private _isLastCharacter(charactersLength, charactersAmmoTyped) {
    return charactersLength === charactersAmmoTyped + 1;
  }
}
