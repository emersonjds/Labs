import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormularioComponent } from './aluno-formulario.component';

describe('AlunoFormularioComponent', () => {
  let component: AlunoFormularioComponent;
  let fixture: ComponentFixture<AlunoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
