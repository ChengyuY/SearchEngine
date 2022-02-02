import { Component, OnInit } from '@angular/core';
import { RechercheService } from "../recherche.service";
import {Book} from "../recherche.type";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private reService: RechercheService) { }

  test_list =
    ["above","accept", "according", "account",
      "believe","benefit", "best",
      "challenge", "chance", "change", "character", "charge",
      "democratic", "describe", "design", "despite",
      "executive", "exist", "expect", "experience",
      "field", "fight", "figure",
      "guess", "gun", "guy",
      "hang", "happen", "happy",
      "impact", "important", "improve",
      "knowledge", "language", "maintain", "newspaper",
      "opportunity", "performance", "quality",
      "recognize", "season", "technology",
      "understand", "voice", "wish"
    ]

  test_regex = [
    "d%28a%7Co%29",
    "t%28e%7Ca%29sty",
    "%28a%7Cb%29dv",
    "an%28i%7Cs%29w",
    "c%28u%7Ci%29t",
    "c%28a%7Co%7Ce%29n%28d%7Ct%7Cs%29%28ion%7Con%29",
    "re%28si%2Ae%29%28d%7Ct%7Cp%29%28t%7Cs%29on",
    "pr%28e%7Ca%29ss%2A%28ion%7Cess%29",
    "k%28ru%7Ci%29s%28kal%7Cion%29",
    "m%28i%29ss%28i%2A%28on%7Cn%29%29"
  ]

  // @ts-ignore
  booklist: Book[]

  run_test_KMP(){
    let time_start: Date = new Date()
    console.log("Start time: ",time_start)
    var cpt = 0
    for (var word in this.test_list){
      this.reService.recherche(this.test_list[word],1,10).subscribe(res=>{
        // @ts-ignore
        this.bookList = res.body;
        let time_end: Date = new Date()
        cpt += 1
        console.log("Word id: ",cpt)
        console.log("End time: ",time_end)
      })
    }
  }

  run_test_KMPC(){
    let time_start: Date = new Date()
    console.log("Start time: ",time_start)
    var cpt = 0
    for (var word in this.test_list){
      this.reService.recherche_kmp(this.test_list[word],1,10).subscribe(res=>{
        // @ts-ignore
        this.bookList = res.body;
        let time_end: Date = new Date()
        cpt += 1
        console.log("Word id: ",cpt)
        console.log("End time: ",time_end)
      })
    }
  }

  run_test_regex(){
    let time_start: Date = new Date()
    console.log("Start time: ",time_start)
    var cpt = 0
    for (var word in this.test_regex){
      this.reService.recherche_avance(this.test_regex[word],1,10).subscribe(res=>{
        // @ts-ignore
        this.bookList = res.body;
        let time_end: Date = new Date()
        cpt += 1
        console.log("Word id: ",cpt)
        console.log("End time: ",time_end)
      })
    }
  }

  run_test_regexC(){
    let time_start: Date = new Date()
    console.log("Start time: ",time_start)
    var cpt = 0
    for (var word in this.test_regex){
      this.reService.recherche_regex(this.test_regex[word],1,10).subscribe(res=>{
        // @ts-ignore
        this.bookList = res.body;
        let time_end: Date = new Date()
        cpt += 1
        console.log("Word id: ",cpt)
        console.log("End time: ",time_end)
      })
    }
  }

  run_test_neighbor(){
    let time_start: Date = new Date()
    console.log("Start time: ",time_start)
    var test_num = [
      116, 220, 137, 265, 208, 147, 213, 267, 210, 296,
      311, 215, 307, 167, 291, 219, 211, 149, 171, 270,
      163, 310, 209, 295, 159, 306, 244, 134, 241, 132,
      236, 102, 179, 293, 166, 243, 269, 299, 289, 103,
      131, 271, 280, 160, 308, 120, 223, 178, 290, 113,
      174, 121, 204, 111, 242, 287, 294, 292, 282, 225,
      283, 142, 285, 260, 165, 305, 108, 221, 205, 143,
      298, 125, 133, 161, 228, 176, 177, 224, 202, 247,
      107, 144, 122, 245, 153, 248, 233, 140, 119, 110]
    for (var id in test_num){
      console.log("Book id now: ",test_num[id])
      this.reService.recherche_neighbors(test_num[id],1,10).subscribe(res=>{
        console.log(res)
        let time_end: Date = new Date()
        console.log("End time: ",time_end)
      })
    }
  }

  run_test_id(){
    let time_start: Date = new Date()
    console.log("Start time: ",time_start)
    var test_num = [
      116, 220, 137, 265, 208, 147, 213, 267, 210, 296,
      311, 215, 307, 167, 291, 219, 211, 149, 171, 270,
      163, 310, 209, 295, 159, 306, 244, 134, 241, 132,
      236, 102, 179, 293, 166, 243, 269, 299, 289, 103,
      131, 271, 280, 160, 308, 120, 223, 178, 290, 113,
      174, 121, 204, 111, 242, 287, 294, 292, 282, 225,
      283, 142, 285, 260, 165, 305, 108, 221, 205, 143,
      298, 125, 133, 161, 228, 176, 177, 224, 202, 247,
      107, 144, 122, 245, 153, 248, 233, 140, 119, 110]
    for (var id in test_num){
      console.log("Book id now: ",test_num[id])
      this.reService.searchBookById(test_num[id]).subscribe(res=>{
        let time_end: Date = new Date()
        console.log("End time: ",time_end)
      })
    }
  }

  Cancel(){

  }

  ngOnInit(): void {
  }

}
