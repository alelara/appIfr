import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesbloquearuserPage } from './desbloquearuser.page';

describe('DesbloquearuserPage', () => {
  let component: DesbloquearuserPage;
  let fixture: ComponentFixture<DesbloquearuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesbloquearuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesbloquearuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
