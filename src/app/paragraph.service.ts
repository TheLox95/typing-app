import { Paragraph } from './paragraph';
import { Injectable } from '@angular/core';

@Injectable()
export class ParagraphService {
  constructor() {}

  get(): Paragraph[] {
    return [
      {
        title: 'text 1',
        body:
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam malesuada metus pellentesque pulvinar vestibulum.
           Pellentesque semper elit ut ante porttitor, sed volutpat nisi convallis.
            Integer eget felis sed neque posuere dictum. Etiam convallis tortor quam, cursus ullamcorper dolor suscipit vitae.
             Phasellus condimentum est eget nibh aliquam porta. Donec sagittis magna sed egestas convallis.
              In rutrum dapibus consectetur. Donec aliquet volutpat consectetur.
               Donec eget arcu maximus, condimentum arcu id, tristique velit.
               Cras ut finibus orci, vel gravida ex. Cras et ante pharetra, ornare risus nec, semper risus.`
      },
      {
        title: 'text 2',
        body: `Cras ultricies turpis et porta porttitor.
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
                   Morbi tempor quam sit amet elit elementum, vitae posuere ipsum vulputate.`
      },
      {
        title: 'text 3',
      body: `Donec lacinia imperdiet sapien.
       Quisque molestie orci sit amet tellus fermentum, ut convallis turpis vestibulum.
        Morbi a ante iaculis, fringilla enim sit amet, maximus justo.
         Maecenas vulputate ex auctor, iaculis nunc porttitor, luctus ipsum. Integer bibendum tincidunt fringilla.
       Duis quis ante et tortor bibendum vestibulum eu sed metus. Donec eget tellus tortor.`}
    ];
  }
}