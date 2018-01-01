import { Component } from '@angular/core';
import {ThisDayService} from "../../services/historyday.service"
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage{
  eventsShow:boolean
  birthsShow:boolean
  deathsShow:boolean
  dayService:ThisDayService

  constructor(public navCtrl: NavController, thisDay:ThisDayService) {
    this.dayService = thisDay
  }

  ionViewDidLoad(){
    this.eventsShow = this.dayService.Events
    this.birthsShow = this.dayService.Births
    this.deathsShow = this.dayService.Deaths
  }

  //@Input() options: any;
  ionViewDidLeave	(){
    this.dayService.Events = this.eventsShow
    this.dayService.Births = this.birthsShow
    this.dayService.Deaths = this.deathsShow
    console.log(this.dayService.Events)
    console.log(this.dayService.Births)
    console.log(this.dayService.Deaths)
  }

  

}
