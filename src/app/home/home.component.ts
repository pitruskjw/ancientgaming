import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user/user.service';

@Component({
  selector: 'ag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
