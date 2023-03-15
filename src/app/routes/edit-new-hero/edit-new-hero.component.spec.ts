import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewHeroComponent } from './edit-new-hero.component';

describe('EditNewHeroComponent', () => {
  let component: EditNewHeroComponent;
  let fixture: ComponentFixture<EditNewHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
