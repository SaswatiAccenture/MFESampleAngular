import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  dataFetched:any;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('addToCart',(response:any) => {
      this.dataFetched = response?.detail;
      console.log('data',response)
    })
  }

}
