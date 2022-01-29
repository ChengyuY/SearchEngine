import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {RechercheService} from "../recherche.service";
import {Book} from "../recherche.type";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  text !: string

  constructor(private nzmsg:NzMessageService, private reService: RechercheService) {
  }

  // @ts-ignore
  bookList : Book[]
  curPage = 1;
  pageSize = 10;
  isVisible = false;
  load = false;
  // @ts-ignore
  book : EntireBook[]

  trackByBookId(id: number, book: Book){
    return book.bookid
  }

  dic: { [key: string]: string; } = {
    "(": "%28",
    ")": "%29",
    "*": "%2A",
    "|": "%7C",
    ".": "%2E"
  };

  recherche(){
    console.log("Search classement regex:",this.text)
    const text = this.text
    var content = ""
    // @ts-ignore
    for (var i in text) {
      if (text[i] in this.dic){
        content += this.dic[text[i]]
      }else{
        content += text[i]
      }
    }
    console.log("After translation:", content)
    this.load = true
    if (this.text != null) {
      console.log("Book list now:", this.bookList)
      // @ts-ignore
      this.reService.recherche_regex(content,this.curPage,this.pageSize).subscribe((res: HttpResponse<Book[]>) => {
        localStorage.setItem("regex-c-token",this.text)
        // @ts-ignore
        this.bookList = res.body;
        console.log("Get books!",this.bookList)
      })
      this.nzmsg.loading("Waiting for searching")
    }
    this.load = false
  }

  showContent(bookid:number){
    this.isVisible = true
    if (bookid != null) {
      console.log("Check ", bookid)
      // @ts-ignore
      this.reService.searchBookById(bookid).subscribe((res: HttpResponse<EntireBook[]>) => {
        // @ts-ignore
        this.book = res.body;
        console.log("Get book!",this.book)
      })
      this.nzmsg.loading("Waiting for loading")
    }
  }

  handleExit(){
    this.isVisible = false
  }

  ngOnInit(): void {
    // @ts-ignore
    this.text = localStorage.getItem('regex-c-token')
    //this.recherche()
  }

}
