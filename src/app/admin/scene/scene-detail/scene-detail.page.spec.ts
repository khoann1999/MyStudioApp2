import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SceneDetailPage } from './scene-detail.page';

describe('SceneDetailPage', () => {
  let component: SceneDetailPage;
  let fixture: ComponentFixture<SceneDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SceneDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
