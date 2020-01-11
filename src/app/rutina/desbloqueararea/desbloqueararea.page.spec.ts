import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesbloquearareaPage } from './desbloqueararea.page';

describe('DesbloquearareaPage', () => {
  let component: DesbloquearareaPage;
  let fixture: ComponentFixture<DesbloquearareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesbloquearareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesbloquearareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
