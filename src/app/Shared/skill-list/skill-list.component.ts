import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { Skill } from './../../models/Skill.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
    skillForm: FormGroup;
   submitted=false;
    skills: Skill [] ;
    skillsSubscription: Subscription;
colorE:string;
colorU:string;
colorS:string;
fontWeightU:string;
fontWeightS:string="bold";
fontWeightE:string;
clickerE:number=0;
clickerU:number=0;
clickerS:number=0;

  constructor(private homesService: HomeService,
               private formBuilder:FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.skillsSubscription = this.homesService.skillsSubject.subscribe(
      (skills: Skill[]) => {
          this.skills= skills;
      }
    );
    this.homesService.emitSkills();
  }
  get f() { return this.skillForm.controls; }
  onViewSkill(id: number) {
    this.router.navigate(['/home','view', id]);
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
