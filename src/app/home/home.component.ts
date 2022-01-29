import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private nzmsg:NzMessageService) {
    this.router.navigate(['/home/recherche']);
  }

  isCollapsed = false

  showFlag = false


  ngOnInit(): void {
  }

}
