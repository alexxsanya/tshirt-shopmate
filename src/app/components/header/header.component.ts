import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/util/localStorageService';
import { access } from 'fs';
import { WindowService } from 'src/app/shared/util/windowService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  isLoggedIn = false;

  constructor(public fb: FormBuilder, private localStorage: LocalStorageService, private window: WindowService) {
    this.searchForm = this.fb.group({
      search: [''],
    });
  }
  ngOnInit() {
    const accessToken = this.localStorage.get('accessToken', undefined);

    if ( accessToken !== undefined) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    console.log(`2. access: ${accessToken} - loggedin: ${this.isLoggedIn}`);
  }

  logout() {
    this.localStorage.clear();
    this.window.reload();
  }

}
