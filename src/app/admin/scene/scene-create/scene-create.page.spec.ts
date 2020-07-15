import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SceneCreatePage } from './scene-create.page';

describe('SceneCreatePage', () => {
  let component: SceneCreatePage;
  let fixture: ComponentFixture<SceneCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SceneCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
