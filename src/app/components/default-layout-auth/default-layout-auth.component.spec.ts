import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutAuthComponent } from './default-layout-auth.component';

describe('DefaultLayoutAuthComponent', () => {
  let component: DefaultLayoutAuthComponent;
  let fixture: ComponentFixture<DefaultLayoutAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
