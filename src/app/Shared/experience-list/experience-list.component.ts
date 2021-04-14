import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
colorE:string;
colorU:string;
colorS:string;
fontWeightU:string;
fontWeightS:string;
fontWeightE:string="bold";
clickerE:number=0;
clickerU:number=0;
clickerS:number=0;
  constructor() { }

  ngOnInit() {
  }

  updateUserColor(){
      this.colorU="#65B79F";
      this.fontWeightU="bold";
      this.clickerU+=1;
      this.clickerE=0;
      this.clickerS=0;
      if((this.clickerU>0)&&(this.clickerE==0)&&(this.clickerS==0)){
        this.colorE="#6B7588";
        this.fontWeightE="normal";
        this.colorS="#6B7588";
        this.fontWeightS="normal";
      }
    }
     updateSkillColor(){
      this.colorS="#65B79F";
      this.fontWeightS="bold";
      this.clickerS+=1;
      this.clickerE=0;
      this.clickerU=0;
      if((this.clickerS>0)&&(this.clickerE==0)&&(this.clickerU==0)){
        this.colorE="#6B7588";
        this.fontWeightE="normal";
        this.colorU="#6B7588";
        this.fontWeightU="normal";
      }
    }

    updateExperienceColor(){
      this.colorE="#65B79F";
      this.fontWeightE="bold";
      this.clickerE+=1;
      this.clickerS=0;
      this.clickerU=0;
      if((this.clickerE>0)&&(this.clickerS==0)&&(this.clickerU==0)){
        this.colorS="#6B7588";
        this.fontWeightS="normal";
        this.colorU="#6B7588";
        this.fontWeightU="normal";
      }
    }


}
