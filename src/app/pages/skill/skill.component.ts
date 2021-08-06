import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  public openList = 'frontend';
  constructor() {}

  ngOnInit(): void {}

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
