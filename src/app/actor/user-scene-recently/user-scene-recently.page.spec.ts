import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserSceneRecentlyPage } from './user-scene-recently.page';

describe('UserSceneRecentlyPage', () => {
  let component: UserSceneRecentlyPage;
  let fixture: ComponentFixture<UserSceneRecentlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSceneRecentlyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSceneRecentlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
