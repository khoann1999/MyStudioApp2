import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolListPage } from './tool-list.page';

describe('ToolListPage', () => {
  let component: ToolListPage;
  let fixture: ComponentFixture<ToolListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
