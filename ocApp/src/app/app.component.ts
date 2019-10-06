import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ocApp';

  posts = [
    {
      title: "Mon Premier post",
      content: "bla",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon Deuxieme post",
      content: "bla bla",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon Troisieme post",
      content: "bla bla bla",
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
