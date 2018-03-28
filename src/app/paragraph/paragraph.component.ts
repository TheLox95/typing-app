import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Paragraph } from '../paragraph';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Character } from '../character';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  text: Character[];
  wrongAmmo = 0;
  timeTyping = new Date(null);
  timeIsRunning = false;
  private characterToBeTyped: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Paragraph,
    public dialogRef: MatDialogRef<ParagraphComponent>,
    private _hotkeysService: HotkeysService
  ) {}

  ngOnInit() {
    this.text = this.data.body.split('').map<Character>(character => {
      return {body: character, typed: 'NOT'};
    });
    this._bindEvents();
    this.characterToBeTyped = 0;
    this.timeTyping.setSeconds(0);
  }

  private onKeyPress = (character: string): boolean => {
    const currentCharacter = this.text[this.characterToBeTyped];
    if (this.characterToBeTyped === 0 && this.timeIsRunning === false) {
      this._startTimmer();
    }
    if (currentCharacter.body === character) {
      console.log(`${character} typed`);
      currentCharacter.typed = 'CORRECT';
      this.characterToBeTyped++;
      console.log(`current ::${this.text[this.characterToBeTyped].body}::`);
    } else {
      console.log(`wrong character`);
      currentCharacter.typed = 'WRONG';
      this.wrongAmmo++;
    }
    return false; // Prevent bubbling
  }

  private _startTimmer() {
    this.timeIsRunning = true;
    let minutes = 0;
    setInterval(() => {
      console.log(this.timeTyping);
      let seconds = Number(this.timeTyping.toISOString().substr(17, 2));
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      this.timeTyping = new Date(null);
      this.timeTyping.setMinutes(minutes, seconds);
    }, 1000);
  }

  private _bindEvents() {
    for (const character of this.data.body) {
      if (character === ' ') {
        this._hotkeysService.add(new Hotkey('space', () => this.onKeyPress(character)));
      } else if (character === '\n') {
        this._hotkeysService.add(new Hotkey('enter', () => this.onKeyPress(character)));
      } else {
        this._hotkeysService.add(new Hotkey(character, () => this.onKeyPress(character)));
      }
    }
  }
}
