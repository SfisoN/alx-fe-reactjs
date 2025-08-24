import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { within } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe('TodoList Component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText(/Learn Native React/)).toBeInTheDocument();
        expect(screen.getByText(/Build a Todo App/)).toBeInTheDocument();
        expect(screen.getByText(/Master Java/)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText(/Learn Native React/);
        
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem);
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText(/Build a Todo App/).closest('li');
        const deleteButton = within(todoItem).getByTestId('delete-btn'); 

        fireEvent.click(deleteButton);
        expect(todoItem).not.toBeInTheDocument();

    });
    
});
