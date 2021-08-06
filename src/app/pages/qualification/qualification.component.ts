import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  public openList = 'educacion';

  constructor() {}

  ngOnInit(): void {}
  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
