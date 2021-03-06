import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  list: string[] = [];
  keyword: string = '';
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    this.list = await this.apiService.getCategories().toPromise();
  }

}
