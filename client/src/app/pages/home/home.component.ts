import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imagesUrl;
  competitions = [];

  constructor(private httpClient: HttpClient) {
    this.getCompetitions();
  }

  ngOnInit() {
    this.imagesUrl = ['assets/collection-1.png', 'assets/collection-1.png', 'assets/collection-1.png'];
  }

  getCompetitions() {
    const params = new HttpParams();
    this.httpClient.get('http://localhost:3000/api/competitions/getCompetitions', {params: params})
    .subscribe((res: {competitions: [{name, city, start_date, end_date, website}]}) => {
      // check if the response is correct
      res.competitions.forEach(competition => {
        this.competitions.push({
          name: competition.name
        })
      });
    });
  }

}
