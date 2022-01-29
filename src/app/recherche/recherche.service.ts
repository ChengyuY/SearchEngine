import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL} from "../config"
import {Book, EntireBook} from "./recherche.type";

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  constructor(private http: HttpClient) {
  }

  recherche(text:string,curPage:number,pageSize:number){
    const livrekURL = `${URL}/library/searchbywordkmp?word=${text}&_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Book[]>(livrekURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${livrekURL}`
        }
      })
  }

  recherche_avance(text:string,curPage:number,pageSize:number){
    const livrekURL = `${URL}/library/searchbywordregex?regex=${text}&_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Book[]>(livrekURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${livrekURL}`
        }
      })
  }

  recherche_kmp(text:string,curPage:number,pageSize:number){
    const livrekURL = `${URL}/library/searchbywordkmp_classment?word=${text}&_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Book[]>(livrekURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${livrekURL}`
        }
      })
  }

  recherche_regex(text:string,curPage:number,pageSize:number){
    const livrekURL = `${URL}/library/searchbywordregex_classment?regex=${text}&_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Book[]>(livrekURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${livrekURL}`
        }
      })
  }

  recherche_neighbors(bookid:number,curPage:number,pageSize:number){
    const livrekURL = `${URL}/library/neighbor?book=${bookid}&_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<number[]>(livrekURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${livrekURL}`
        }
      })
  }

  reload(){
    const loadURL = `${URL}/library/load`
    return this.http.post(loadURL,{
      observe: 'response'
    })
  }

  reload_graph(){
    const loadURL = `${URL}/library/loadgraph`
    return this.http.post(loadURL,{
      observe: 'response'
    })
  }

  reload_rank(){
    const loadURL = `${URL}/library/loadrank`
    return this.http.post(loadURL,{
      observe: 'response'
    })
  }

  searchBookById(bookid:number){
    const livreURL = `${URL}/library/searchbyid?id=${bookid}`
    return this.http.get<EntireBook[]>(livreURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${livreURL}`
      }
    })
  }

}
