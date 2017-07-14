import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title = 'app works!';
  firstName = "";
  lastName = "";
  gender = "";

  sumResult: number = 0;

  userList: any[] = [];



  constructor(private _appService: AppService) {
    // this.getAllUser();
  }

  getAllUser() {
    console.log('res.data');
    let url = 'http://localhost:50532/api/vaues';
    this._appService.get(url).subscribe(res => {
      console.log(res.json());
      this.userList = res.json();
      return 1;
    });
  };

  saveUser() {
    let theUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender
    };

    let url = 'http://localhost:50532/api/values';

    this._appService.post(url, theUser).subscribe(res => {
      alert("Got it. SAVED");
    });
  };

  putUser() {
    let theUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender
    };

    let url = 'http://localhost:50532/api/values/5';

    this._appService.put(url, theUser).subscribe(res => {
      alert("Got it. EDITED");
    });
  };

  deleteUser() {

    let url = 'http://localhost:50532/api/values/5';

    this._appService.delete(url).subscribe(res => {
      alert("Got it. DELETED");
    });
  };

  sum(a: number, b: number) {
    this.sumResult = a + b;
  }
}
