
 
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class WindowService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  reload() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.reload();
    }
  }

}
