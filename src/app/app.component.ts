import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proje';

  constructor(private service:SharedService){}
  contents:any=[];


  refreshContents(){
    this.service.getContents().subscribe((res)=>{
      this.contents=res;
    })
  }
    ngOnInit(){
    this.refreshContents();
    }
    addContents(newContents:string){
      this.service.addContent(newContents).then((res)=>{
        console.log(res);
        this.refreshContents();
      })
    }

    deleteContents(id:string){
      this.service.deleteContent(id).then((res)=>{
        console.log(res);
        this.refreshContents();
      })
    }

}


