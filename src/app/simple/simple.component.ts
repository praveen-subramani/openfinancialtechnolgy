import { Component, OnInit,HostListener  } from '@angular/core';
@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
jack:any;
backgrndfor =false;
gridsize:number=30;
gridsize1:number=30;
element:any;
onWindowScroll(event:any) {
  this.element = document.querySelector('.stick');
  if (window.pageYOffset >  this.element.clientHeight) {
    this.element.classList.add('navbar-inverse');
  } else {
    this.element.classList.remove('navbar-inverse');
  }
}
  pdd(event:any){
this.gridsize=event.value;
  }
  
  pdd1(event:any){
    this.gridsize1=event.value;
      }
  // lert styles = {
  //   'background-color': this.user.isExpired ? 'red' : 'transparent',
  //   'font-weight': this.isImportant ? 'bold' : 'normal'
  // };
 
  scrol(){
    this.backgrndfor =true;
    // let styles = {
    //   'background-color': this.backgrndfor? 'red' : 'transparent',
    // };
    // return styles;

  }
  constructor() { }

  ngOnInit(): void {this.gridsize=0;

  }

}
 