import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolDetailPage } from './tool-detail.page';

describe('ToolDetailPage', () => {
  let component: ToolDetailPage;
  let fixture: ComponentFixture<ToolDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
