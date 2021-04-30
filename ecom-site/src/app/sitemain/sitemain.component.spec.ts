import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemainComponent } from './sitemain.component';

describe('SitemainComponent', () => {
  let component: SitemainComponent;
  let fixture: ComponentFixture<SitemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
