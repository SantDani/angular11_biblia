import {  TODOS_TEST } from './test-data/todo.db';
import { LoggerService } from './logger.service';
import { TodoService } from './todo.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('TodoService', () => {
  // variables globales
  let todoService: TodoService;
  let loggerSpy: any;

  let httpTestingController: HttpTestingController;
  // let httpTestingController: HttpTestingController;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    // todoService = new TodoService(loggerSpy);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodoService, {provide: LoggerService, userValue: loggerSpy}

      ]
    });
    // de esta manera se encarga angular de instanciar mediante injeciones
    todoService = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('debería agregar una nueva tarea', () => {
    // const logger = new LoggerService();
    // const logger = jasmine.createSpyObj('LoggerService', ['log']);
    // spy nos permite saber cuantas veces se ha llamado la funcion 'log'
    // spyOn(logger, 'log');


    // Queremos testear el metodo add
    todoService.add(
      { autor: ' Prueba Atuor', titulo: 'Prueba titulo', descripcion: 'Prueba descripcipn'});


    expect(todoService.todos.length).toBe(1, 'Debríamos tener una única tarea');

    expect(todoService.todos[0].id).toBe(1, 'El id auto incremental debería ser 1');

    expect(todoService.autoIncrementId).toBe(2, 'El auto incremental ha de ser 2');

    expect(todoService.todos[0].titulo).toEqual('Prueba titulo');

    // expect(logger.log).toHaveBeenCalledTimes(1); // no pasa el test
  });

  it('debería borrar una tarea', () => {

    const todoBorrar = [...TODOS_TEST]; // copia de TODOS_TEST
    todoService.todos = todoBorrar;

    todoService.delete(2);

    expect(todoService.todos.length).toBe(2, 'El número de taras debería ser 2');

    expect(todoService.todos[1].autor).toBe('Sara');
  });

  it('ha de recuperar todas las tareas', () => {
    todoService.getAll().subscribe( listaTodos => {
      console.log(listaTodos); // se muestra en la consola tras ejecutar $ng test

      expect(listaTodos).toBeTruthy('No existen las tareas');
      expect(listaTodos.length).toBe(3, 'La longituda ha de ser de 3 tareas');


      const tarea = listaTodos.find( item => item.id === 2);

      expect(tarea.titulo).toEqual('Compra de mueble', 'NO es el titulo esperado');
    });
    const req =  httpTestingController.expectOne('http://localhost:3000/api/todos/all');

    expect(req.request.method).toBe('GET');
    /* req.flush([
       { id: 1, autor: 'Mario', titulo: 'Tituo desde http', descripcion: 'Des. recuperada desde server '}
      //TODOS_TEST
    ]); */

    req.flush(TODOS_TEST); // respuesta simulada
  });

  it('ha de recuperar una unica tarea', () => {

    todoService.getById(2).subscribe(tarea => {

      expect(tarea).toBeTruthy('La tarea ha de existir');

      expect(tarea.id).toBe(2, 'El ID de la tarea ha de ser 2');
    });

    const req = httpTestingController.expectOne('http://localhost:3000/api/todos/2');
    expect(req.request.method).toBe('GET');

    req.flush(TODOS_TEST[1]);

  });

  afterEach(() => {
    // se verifica que no hay peticiones pendientes, en este caso peticiones GET
    httpTestingController.verify(); // khe pitos hace
  });
});
