import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  results: any;
  mathdata:any;
  sorting:number;
  private isButtonVisible1 = false;
  buttonstate1:any=0;

  private isButtonVisible2 = false;
  buttonstate2:any=0;
  
  private isButtonVisible3 = false;
  buttonstate3:any=0;

  private isButtonVisible4 = false;
  buttonstate4:any=0;
  artdata: Object;
  robotdata: Object;
  arabicdata: Object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    this.http
    .get('https://code5up.000webhostapp.com/php/getmath.php')
    .subscribe(mathtable => {
      this.mathdata=mathtable;
      
    })



    this.http
    .get('https://code5up.000webhostapp.com/php/getart.php')
    .subscribe(arttable => {
      this.artdata=arttable;
    })


    this.http
    .get('https://code5up.000webhostapp.com/php/getrobot.php')
    .subscribe(robottable => {
      this.robotdata=robottable;
    })

    this.http
    .get('https://code5up.000webhostapp.com/php/getarabic.php')
    .subscribe(arabictable => {
      this.arabicdata=arabictable;
    })


  }

  show1(){
    if(this.buttonstate1==0){
      this.isButtonVisible1=true;
      this.buttonstate1=1;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;
    }else if(this.buttonstate1==1){
      this.isButtonVisible1=false;
      this.buttonstate1=0;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;
    }
  };

  show2(){
    if(this.buttonstate2==0){
      this.isButtonVisible2=true;
      this.buttonstate2=1;

      this.isButtonVisible1=false;
      this.buttonstate1=0;

      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;
    }else if(this.buttonstate2==1){
      this.isButtonVisible1=false;
      this.buttonstate1=0;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;
    }
  };

  show3(){
    if(this.buttonstate3==0){
      this.isButtonVisible3=true;
      this.buttonstate3=1;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible1=false;
      this.buttonstate1=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;
    }else if(this.buttonstate3==1){
      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;

      this.isButtonVisible4=false;
      this.buttonstate4=0;
    }
  };

  show4(){
    if(this.buttonstate4==0){
      this.isButtonVisible4=true;
      this.buttonstate4=1;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible1=false;
      this.buttonstate1=0;
    }else if(this.buttonstate4==1){
      this.isButtonVisible4=false;
      this.buttonstate4=0;

      this.isButtonVisible2=false;
      this.buttonstate2=0;

      this.isButtonVisible3=false;
      this.buttonstate3=0;

      this.isButtonVisible1=false;
      this.buttonstate1=0;
    }
  };
  
}
