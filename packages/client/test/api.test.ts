import { describe, it, expect, vi } from 'vitest';
import { fetchTodos, createTodo, toggleTodoStatus, removeTodo } from '../src/api/todos';

vi.mock('../src/api/todos', () => ({
  fetchTodos: vi.fn(),
  createTodo: vi.fn(),
  toggleTodoStatus: vi.fn(),
  removeTodo: vi.fn(),
}));

//test la fonction fetchTodo
describe('fetchTodos', () => {
  it('should fetch all data from API', async () => {
    const mockData = [{ id: 1, title: "Mock todo 1" },{ id: 2, title: "Mock todo 2" }];
    (fetchTodos as ReturnType<typeof vi.fn>).mockResolvedValue(mockData);

    const result = await fetchTodos();

    expect(result).toEqual(mockData);
  });
});

//test la fonction createTodo
describe('createTodo', () => {
  it('should create data in API', async () => {
    const string = "New todo";
    const mockData = [{ id: 3, title: "New todo" }];
    (createTodo as ReturnType<typeof vi.fn>).mockResolvedValue(mockData);

    const result = await createTodo(string);

    expect(result).toEqual(mockData);
  });
});

//test toggleTodoStatus
describe('toggleTodoStatus', () => {
  it('should create data in API', async () => {
    const string = "3"
    const mockData = [{ id: 3, title: "New Todo" }];
    (toggleTodoStatus as ReturnType<typeof vi.fn>).mockResolvedValue(mockData);

    const result = await toggleTodoStatus(string);

    expect(result).toEqual(mockData);
  });
});

//test removeTodo
describe('removeTodo', () => {
  it('should delete data from API', async () => {
    const string = "3"
    const mockData = [{ id: 3, title: "Mock todo 3" }];
    (removeTodo as ReturnType<typeof vi.fn>).mockResolvedValue(mockData);

    const result = await removeTodo(string);

    expect(result).toEqual(mockData);
  });
});