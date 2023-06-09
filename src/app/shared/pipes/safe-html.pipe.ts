import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {

  constructor (private _sanitizer: DomSanitizer) { }

  transform (value: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}
