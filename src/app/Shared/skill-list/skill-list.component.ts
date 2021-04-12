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

}
