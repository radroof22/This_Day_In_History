import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChooseDayPage } from '../choose_day/choose_day';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ChooseDayPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
