import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { UserSceneComponent } from './user-scene.component';

describe('UserSceneComponent', () => {
  let component: UserSceneComponent;
  let fixture: ComponentFixture<UserSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSceneComponent ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
