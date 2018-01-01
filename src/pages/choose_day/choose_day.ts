import { Component } from '@angular/core';
import {ThisDayService} from "../../services/historyday.service"
import { NavController } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';

@Component({
  selector: 'page-choose_day',
  templateUrl: 'choose_day.html'
})
export class ChooseDayPage {
  events:string
  dayService:ThisDayService
  date_split:string[]
  day:string
  month:string
  browserTab: BrowserTab

  constructor(public navCtrl: NavController, dayService: ThisDayService, browserTab:BrowserTab) {
    this.dayService = dayService
    this.browserTab = browserTab
  }

  getDayInfo(date:string){
    this.date_split = date.split("-")
    this.month = this.date_split[0]
    this.day = this.date_split[1]

    this.dayService.pickDay(this.month, this.day)
      .subscribe(response => {
        this.events = response.data.Events;
        console.log(this.events)
      })
  }

  getViewLink(link:string){
    console.log(link)
    this.browserTab.openUrl(link)
  }

}
