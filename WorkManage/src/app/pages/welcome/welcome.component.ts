import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `<nz-layout class="layout">
  <nz-header>
    <div class="logo"></div>
    <ul nz-menu nzTheme="dark" nzMode="horizontal">
      <li nz-menu-item>nav 1</li>
      <li nz-menu-item>nav 2</li>
      <li nz-menu-item>nav 3</li>
    </ul>
  </nz-header>
  <nz-content>
    <nz-breadcrumb>
      <nz-breadcrumb-item>Home</nz-breadcrumb-item>
      <nz-breadcrumb-item>List</nz-breadcrumb-item>
      <nz-breadcrumb-item>App</nz-breadcrumb-item>
    </nz-breadcrumb>
    <div class="inner-content">Content</div>
  </nz-content>
  <nz-footer>Ant Design ©2020 Implement By Angular</nz-footer>
</nz-layout>`,
  styles: ['']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
