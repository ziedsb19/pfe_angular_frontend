import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/chatdashboard', title: 'Chatbot Dashboard', icon: 'smart_toy', class: '' },
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/intents', title: 'Intents', icon: 'leaderboard', class: '' },
  { path: '/test', title: 'Test Chatbot', icon: 'bug_report', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
