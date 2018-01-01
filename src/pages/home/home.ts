import { Component } from '@angular/core';
import {ThisDayService} from "../../services/historyday.service"
import { NavController } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events:any
  thisDayService: ThisDayService;
  browserTab: BrowserTab;

  constructor(public navCtrl: NavController, thisDayService: ThisDayService,  browserTab: BrowserTab) {
    this.thisDayService = thisDayService;
    this.browserTab = browserTab
  }

  ionViewDidEnter(){
    this.getTodaysHistory()
  }


  getTodaysHistory(){
    this.thisDayService.getHistoryEvents()
      .subscribe(response => {
        this.events = response.data.Events;
        console.log(this.events)   
      })
  }

  getViewLink(link:string){

    this.browserTab.openUrl(link)
  }

}
