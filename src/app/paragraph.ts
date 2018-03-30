export class Paragraph {
  constructor(private _title: string, private _body: string) {}

  get title() {
    return this._title;
  }

  get body() {
    return this._body.split('')
    .map(character => {
      if (character === '\n') {
        return '↵';
      } else if (character === ' ') {
        return '␣';
      } else {
        return character;
      }
    }).join('');
  }
}
