import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  
  @ViewChild('dimensionsForm') dimensionsForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

}
