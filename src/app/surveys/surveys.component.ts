import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  surveydaily = [{name:'',val:''},{name:'',val:''},{name:'',val:''},{name:'',val:''},{name:'',val:''}]
  surveyquarterly = this.surveydaily
  surveyyearly = this.surveydaily
  surveymonthly = this.surveydaily
  surveyweekly = this.surveydaily

  constructor(
    private surveyservice: SurveyService
  ) {

    this.surveyservice.surveydaily(result => {
      this.surveydaily = result
    })
    this.surveyservice.surveyweekly(result => {
      this.surveyweekly = result
    })
    this.surveyservice.surveymonthly(result => {
      this.surveymonthly = result
    })
    this.surveyservice.surveyquarterly(result => {
      this.surveyquarterly = result
    })
    this.surveyservice.surveyyearly(result => {
      this.surveyyearly = result
    })

  }

  ngOnInit() {
  }

}
