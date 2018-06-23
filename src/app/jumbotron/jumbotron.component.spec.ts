import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronComponent } from './jumbotron.component';
import { AppService } from '../app.service';
import { MockAppService } from '../mock-app.service';
import { HttpModule } from '@angular/http';

describe('JumbotronComponent', () => {
  let component: JumbotronComponent;
  let fixture: ComponentFixture<JumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronComponent ],
      providers: [
        {provide: AppService, useClass: MockAppService}
      ],
      imports: [
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
