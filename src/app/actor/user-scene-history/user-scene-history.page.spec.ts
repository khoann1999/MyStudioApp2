import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserSceneHistoryPage } from './user-scene-history.page';

describe('UserSceneHistoryPage', () => {
  let component: UserSceneHistoryPage;
  let fixture: ComponentFixture<UserSceneHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSceneHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSceneHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
