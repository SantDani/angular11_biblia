import { AppModule } from './../app.module';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
describe ('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debEl: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents()
      .then( () =>{

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        debEl = fixture.debugElement;

      });
  }));


  fit('ha de existir el componente', () => {

    expect(component).toBeTruthy();
  });

  /**
   * La mayoria de acciones que se ejecutan en nuestra app,
   * se realizan de manera asincrona
   * @function fakeAsync algular se encarga de gestionar de la sincronizacion de las ejecuiones
   *
   *  */
  fit(' ejemplo tick y setTimeout', fakeAsync(() => {

    let activo = false;


    setTimeout(() => {
      activo = true;
      expect(activo).toBeTruthy();
    }, 1000);


    // forzar que pasen 1s para setTimeout
    tick(1000); // es necesario para que fucione el expect del setTimeout

  }));


  fit('ha de agregar una tarea', fakeAsync(() => {

    fixture.detectChanges();
    tick();


    setInputValue('.form-control.autor', 'autor test');
    setInputValue('.form-control.titulo', 'titulo test');
    setInputValue('.form-control.descripcion', 'desc. test');


    const boton = debEl.query(By.css('.btn.btn-success'));

    boton.nativeElement.click();
    tick();
    fixture.detectChanges();


    setInputValue('.form-control.autor', '');
    setInputValue('.form-control.titulo', '');
    setInputValue('.form-control.descripcion', '');

    const card = debEl.query(By.css('.card:first-child'));
    const titulo = card.query(By.css('.card-title'));
    const desc = card.query(By.css('.card-text'));

    expect(card).toBeTruthy();

    expect(titulo.nativeElement.textContent).toBe('titulo test', 'Los titulos han de ser iguales');
    expect(desc.nativeElement.textContent).toBe('desc. test', 'Las descripciones han de ser iguales');

  }));


  function setInputValue(selector: string, value: string){

    const inputAutor = debEl.query(By.css(selector));
    inputAutor.nativeElement.value = value;
    inputAutor.nativeElement.dispatchEvent( new Event('input'));
    tick();

  }
});
