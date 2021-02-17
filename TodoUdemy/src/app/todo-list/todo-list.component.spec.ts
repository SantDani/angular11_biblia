import { TODOS_TEST } from './../test-data/todo.db';
import { AppModule } from './../app.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('TodoListComponent', () => {

  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  let debugEl: DebugElement;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      // se impoortant componentes
      imports: [AppModule]
      // es necesario compilar los componentes
    }).compileComponents()
        // tras complilar
        // se indica que se ha de hacer
        .then(() => {
          fixture = TestBed.createComponent(TodoListComponent);
          component = fixture.componentInstance;
          debugEl = fixture.debugElement;
        });
  }));

  it('ha de existir el componente', () => {

    /* Es necesario waitForAsync, ya que, primero se ha de instanciar el componente
    en el .then (es una promesa) y luego realizar la comprobacion.

    waitForAsync, dice que antes de ejecutar it se ha de esperar a la promesa .then  */
    expect(component).toBeTruthy();

    console.log(component); // no se entiende
  });

  /**
   * 3 maneras de utilizar it
   *
   * it ejecucion normal
   * fit ejecuta solo esta prueba y muestra las tareas en HTML
   * xit no ejecuta esa funcion
   */
  // it('Ha de mostrar un listado de tareas', () => {
  // fit('Ha de mostrar un listado de tareas', () => {
  it('Ha de mostrar un listado de tareas', () => {
    component.todos = TODOS_TEST;

    // forzar los cambios que hago en las propiedades se vean en el HTML
    fixture.detectChanges();

     // queryAll recuperamos todos
     // import { By } from '@angular/platform-browser';
    const cards = debugEl.queryAll(By.css('.card'));

    expect(cards).toBeTruthy(' No se pueden recuperar las cards');

    expect(cards.length).toBe(3, 'Han de ser 3 cards');
  });

  it(' se ha de mostrar la primera tarea', () => {
    component.todos = TODOS_TEST;

    fixture.detectChanges();

    const tarea = TODOS_TEST[0];

    const card = debugEl.query(By.css('.card:first-child'));
    const titulo = card.query(By.css('.card-title'));
    const desc = card.query(By.css('.card-text'));

    expect(card).toBeTruthy('La card ha de existir');

    expect(titulo.nativeElement.textContent).toBe(tarea.titulo, 'Los titulos han de ser iguales');
    expect(desc.nativeElement.textContent).toBe(tarea.descripcion, 'Las descripciones han de ser iguales');

    console.log('end test');

  });
});
