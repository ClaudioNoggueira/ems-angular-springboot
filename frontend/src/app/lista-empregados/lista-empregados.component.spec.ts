import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpregadosComponent } from './lista-empregados.component';

describe('ListaEmpregadosComponent', () => {
  let component: ListaEmpregadosComponent;
  let fixture: ComponentFixture<ListaEmpregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmpregadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
