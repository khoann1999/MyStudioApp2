import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolCreatePage } from './tool-create.page';

describe('ToolCreatePage', () => {
  let component: ToolCreatePage;
  let fixture: ComponentFixture<ToolCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
