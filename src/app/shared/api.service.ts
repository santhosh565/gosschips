import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private htpp: HttpClient) { }
  postEmploye (data : any){
    return this.htpp.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getEmployee(){
    return this.htpp.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res
    }))
  }
  updateEmployee(data : any, id: Number){
    return this.htpp.post<any>("http://localhost:3000/posts"+id,data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  deleteEmployee(id: Number){
    return this.htpp.delete<any>("http://localhost:3000/posts"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
