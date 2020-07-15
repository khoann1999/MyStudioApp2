import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SceneListPage } from './scene-list.page';

describe('SceneListPage', () => {
  let component: SceneListPage;
  let fixture: ComponentFixture<SceneListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SceneListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
