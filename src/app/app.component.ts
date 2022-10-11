import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clase2-b';
  bActivo: boolean = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.hideComponent();
    
  }

  hideComponent(){
    let btn = document.getElementById('btn');

    btn?.addEventListener('click', () => {
      this.bActivo = !this.bActivo;
    })
  }

  
}
