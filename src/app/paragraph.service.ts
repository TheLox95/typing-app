import { Paragraph } from './paragraph';
import { Injectable } from '@angular/core';

@Injectable()
export class ParagraphService {
  constructor() {}

  get(): Paragraph[] {
    return [
      new Paragraph('Text 1', `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Proin eget congue nibh. Duis ipsum lectus, efficitur vel risus elementum, venenatis cursus est.
  Proin tempor aliquet dolor a ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nullam non tempor diam. Duis auctor, tortor a rutrum volutpat, augue ante tristique odio, vitae malesuada eros ante et enim.
  Suspendisse eu venenatis ex. Morbi tristique sit amet urna in porta. Cras dapibus et purus sit amet consectetur.
  In consectetur, diam sit amet posuere ullamcorper, mauris neque sollicitudin eros, sit amet mattis odio mauris ut odio.
  Phasellus ultrices tincidunt ex, a iaculis nulla condimentum nec.
  Pellentesque risus sapien, consectetur a tortor vel, scelerisque dictum enim.`),
      new Paragraph('Text 2', `Cras ultricies turpis et porta porttitor.
Praesent commodo venenatis scelerisque.
Aliquam eros arcu, viverra vel neque sed, euismod accumsan velit.
Suspendisse laoreet maximus leo, sit amet placerat risus ullamcorper non.
Nam lobortis, est quis bibendum pulvinar, nulla arcu rhoncus ipsum, ac finibus dolor diam eu diam.
Maecenas et molestie urna.
Praesent non urna id lectus gravida finibus bibendum vitae risus. Maecenas sagittis elit a velit laoreet congue.
Sed tellus sem, eleifend in rhoncus at, commodo ut lacus.
Integer scelerisque dolor a velit sagittis, et gravida mauris rutrum.
Aliquam tincidunt, urna molestie blandit condimentum, risus urna ultricies risus, in mollis turpis diam non ligula.
Praesent auctor ultrices nunc eget interdum. Aenean scelerisque quis massa eu pharetra.
Morbi tempor quam sit amet elit elementum, vitae posuere ipsum vulputate.`),
new Paragraph('Text 3', `Donec lacinia imperdiet sapien.
Quisque molestie orci sit amet tellus fermentum, ut convallis turpis vestibulum.
Morbi a ante iaculis, fringilla enim sit amet, maximus justo.
Maecenas vulputate ex auctor, iaculis nunc porttitor, luctus ipsum. Integer bibendum tincidunt fringilla.
Duis quis ante et tortor bibendum vestibulum eu sed metus. Donec eget tellus tortor.`),
new Paragraph('Text 4', `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin eget congue nibh. Duis ipsum lectus, efficitur vel risus elementum, venenatis cursus est.
Proin tempor aliquet dolor a ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nullam non tempor diam. Duis auctor, tortor a rutrum volutpat, augue ante tristique odio, vitae malesuada eros ante et enim.
Suspendisse eu venenatis ex. Morbi tristique sit amet urna in porta. Cras dapibus et purus sit amet consectetur.
In consectetur, diam sit amet posuere ullamcorper, mauris neque sollicitudin eros, sit amet mattis odio mauris ut odio.
Phasellus ultrices tincidunt ex, a iaculis nulla condimentum nec.
Pellentesque risus sapien, consectetur a tortor vel, scelerisque dictum enim.

Integer eget mattis ante. Vivamus luctus nisi at nisi commodo, id molestie mi molestie.
Sed eu dolor mauris. Praesent egestas nunc sit amet metus vestibulum, et consequat tortor lacinia.
Aliquam enim eros, imperdiet sed auctor eu, accumsan eu risus.
Etiam lacus magna, elementum sit amet dui non, porta hendrerit nibh.
Morbi sit amet felis quis risus congue bibendum at ut metus. Suspendisse potenti.
Quisque vel interdum est. Etiam id tristique diam, id ultrices enim.

Vestibulum lectus nisl, vestibulum non sollicitudin id, ullamcorper a ipsum.
Nulla at mauris sapien. Aliquam sed mauris sagittis, vestibulum eros vel, bibendum elit.
Morbi id augue euismod, ullamcorper ligula quis, mollis elit. Nulla sit amet pretium massa, a cursus felis.
Mauris fermentum mollis felis. Nullam eleifend tincidunt eros. Morbi pretium auctor sem.
Aenean orci erat, bibendum ut tellus id, pulvinar efficitur lectus.

Vivamus pulvinar commodo nulla, et sodales metus fringilla nec. Curabitur non hendrerit risus.
In et tempor neque. Vivamus id magna vitae massa porttitor sodales. Quisque hendrerit ex eget facilisis consequat.
Maecenas nec eros turpis.
Nunc pellentesque lorem nec tortor ultrices tincidunt.
In scelerisque, tortor ac condimentum efficitur, tortor neque vulputate sem, nec pharetra mi turpis nec est.
Ut rhoncus ut nibh in commodo. Proin dolor nisi, mollis a ultricies nec, scelerisque elementum nunc.

Curabitur eu aliquam magna. Ut ac velit vel enim vehicula faucibus.
Donec tristique eu neque sit amet congue. Aenean eu dictum libero.
Sed imperdiet mi sed ipsum commodo, ac lacinia augue lacinia. Integer blandit suscipit ultricies.
Maecenas hendrerit enim sed odio tempor, et ultrices eros semper. Duis vehicula leo ac sollicitudin posuere.
Ut nec purus at augue suscipit laoreet sed et sem. Maecenas id ornare nulla. Mauris dignissim viverra porttitor.`)
    ];
  }
}
