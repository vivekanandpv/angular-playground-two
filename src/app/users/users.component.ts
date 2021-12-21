import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<any>;

  constructor(private restService: RestService) {
    this.users$ = this.restService.getUsers();
  }

  ngOnInit(): void {
    this.restService.createUser().subscribe((r) => console.log('Component', r));
  }
}
