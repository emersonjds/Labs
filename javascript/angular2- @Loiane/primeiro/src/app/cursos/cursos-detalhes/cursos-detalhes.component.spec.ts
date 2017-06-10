import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetalhesComponent } from './cursos-detalhes.component';

describe('CursosDetalhesComponent', () => {
  let component: CursosDetalhesComponent;
  let fixture: ComponentFixture<CursosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
