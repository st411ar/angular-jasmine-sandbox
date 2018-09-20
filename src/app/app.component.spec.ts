import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-jasmine-sandbox'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-jasmine-sandbox');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-jasmine-sandbox!');
  }));
});


describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
})


describe('A suite is just a function', function() {
  var a;

  it('and so is a spec', function() {
    a = true;

    expect(a).toBe(true);
  });
});


describe('The "toBe" matcher compares with ===', function() {
  it('and has a positive case', function() {
    expect(true).toBe(true);
  });

  it('and has a negative case', function() {
    expect(false).not.toBe(true);
  });
})
