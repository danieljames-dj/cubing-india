import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregionalOrganizationComponent } from './subregional-organization.component';

describe('SubregionalOrganizationComponent', () => {
  let component: SubregionalOrganizationComponent;
  let fixture: ComponentFixture<SubregionalOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubregionalOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregionalOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
