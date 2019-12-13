import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertItemComponent } from './alert-item.component';

describe('AlertItemComponent', () => {
  let component: AlertItemComponent;
  let fixture: ComponentFixture<AlertItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
