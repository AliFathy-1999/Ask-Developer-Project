import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private toastr: ToastrService) {

   }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
