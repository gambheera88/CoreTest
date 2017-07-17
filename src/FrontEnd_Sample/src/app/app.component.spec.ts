import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


// describe('App Component:', () => {
//   it('should be truthy', () => {
//     let http: Http;
//     let service = new AppService(http);
//     let app = new AppComponent(service);
//     expect(app.getAllUser()).toBe([]);
//   });
// });

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [AppService],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // // tslint:disable-next-line:no-unused-expression
  // it('shouls be sum', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.sum(2, 7);
  //   expect(app.sumResult).toBe(9);
  // });

  //   it('should be all users', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.getAllUser();
  //   expect(app.userList.length).toBeGreaterThanOrEqual(0);
  // });

  //   // tslint:disable-next-line:no-unused-expression
  //   it('shouls be save users'), (() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.saveUser().toBe(8));
  // });

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
