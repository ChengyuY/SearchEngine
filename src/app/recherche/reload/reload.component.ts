import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {RechercheService} from "../recherche.service";

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {

  constructor(private nzmsg:NzMessageService, private reService: RechercheService) {
  }

  visible = false

  Confirm_reload(){
    //this.reload()
  }

  Confirm_reload_graph(){
    //this.reload_graph()
  }

  Confirm_reload_rank(){
    //this.reload_rank()
  }

  Cancel(){

  }

  reload(){
    this.reService.reload().subscribe(res=>{
      this.nzmsg.loading("It may take long time to reload")
    })
  }

  reload_graph(){
    this.reService.reload_graph().subscribe(res=>{
      this.nzmsg.loading("It may take long time to reload the graph")
    })
  }

  reload_rank(){
    this.reService.reload_rank().subscribe(res=>{
      this.nzmsg.loading("It may take long time to reload the rank")
    })
  }

  ngOnInit(): void {
  }

}
