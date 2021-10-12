import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEmpregadoComponent } from './adicionar-empregado.component';

describe('AdicionarEmpregadoComponent', () => {
  let component: AdicionarEmpregadoComponent;
  let fixture: ComponentFixture<AdicionarEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarEmpregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
