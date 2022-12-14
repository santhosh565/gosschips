import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Output() private numberGenerateds = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit() {
  }
  public  generateNumber (){
  
    const randomNumber = Math.random();
    this.numberGenerateds.emit(randomNumber);
  }

}
