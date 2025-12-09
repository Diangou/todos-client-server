import { describe, it, expect, vi } from "vitest";

// Mock AVANT d’importer le module testé
vi.mock("../src/storage.js", () => {
  return {
    readTodos: vi.fn(),
    writeTodos: vi.fn()
  };
});

// On importe maintenant les mocks et les fonctions
import { readTodos, writeTodos } from "../src/storage.js";
import { getAllTodos, addTodo } from "../src/todos.js";

describe("getAllTodos", () => {
  it("should show list of todos", async () => {
    const fake = [{ id: "1", text: "A", completed: false, createdAt: "" }];

    // IMPORTANT : mockResolvedValue sur la FONCTION mockée
    readTodos.mockResolvedValue(fake);

    const result = await getAllTodos();

    expect(result).toEqual(fake);
    expect(readTodos).toHaveBeenCalledOnce();
  });
});

describe("addTodo", () => {
  it("should add todo", async () => {
    const newString = "New todo";
    readTodos.mockResolvedValue([]);
    writeTodos.mockResolvedValue();

    const result = await addTodo(newString);

    expect(result.text).toBe(newString);
    expect(result.completed).toBe(false);
    expect(result.id).toBeTypeOf("string");
    expect(result.createdAt).toBeTypeOf("string");

    expect(writeTodos).toHaveBeenCalledOnce();

    const [writtenTodos] = writeTodos.mock.calls[0];

    expect(writtenTodos.length).toBe(1);
    expect(writtenTodos[0].text).toBe(newString);
  });
});