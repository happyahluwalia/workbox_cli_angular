import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 private apiKey = '22c53888f1e84cee94131f5837cbfeda';
  articles: any[] = [];

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
      console.log(this.route.snapshot.params['id']);
      this.changeSource('cnn');
      this.route.params.subscribe((params: Params) => {
        console.log(params['id']);
        this.changeSource(params['id']);
      });
  }

  changeSource(source: string) {
     this.articles = [];
     this.http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + this.apiKey)
         .forEach(value => this.articles.push(...value.json().articles));

 }

}
