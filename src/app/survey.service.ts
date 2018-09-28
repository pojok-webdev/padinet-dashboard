import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurveyService {
  survey: Observable<any>
  constructor(
    private appvar:AppvarService,
    private http:HttpClient
  ) {}
  surveydaily(callback){
    this.survey = this.http.get(this.appvar.dashboardServer+'surveydaily')
    this.survey.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  surveyweekly(callback){
    this.survey = this.http.get(this.appvar.dashboardServer+'surveyweekly')
    this.survey.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  surveymonthly(callback){
    this.survey = this.http.get(this.appvar.dashboardServer+'surveymonthly')
    this.survey.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  surveyquarterly(callback){
    this.survey = this.http.get(this.appvar.dashboardServer+'surveyquarterly')
    this.survey.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  surveyyearly(callback){
    this.survey = this.http.get(this.appvar.dashboardServer+'surveyyearly')
    this.survey.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
