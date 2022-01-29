import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {RechercheService} from "../recherche.service";
import {HttpResponse} from "@angular/common/http";
import {Book} from "../recherche.type";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
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

  recherche(){
    console.log("Search normal kmp:",this.text)
    this.load = true
    if (this.text != null) {
      console.log("Book list now:", this.bookList)
      // @ts-ignore
      this.reService.recherche(this.text,this.curPage,this.pageSize).subscribe((res: HttpResponse<Book[]>) => {
        localStorage.setItem("text-token",this.text)
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
    this.text = localStorage.getItem('text-token')
    //this.recherche()
  }

}
