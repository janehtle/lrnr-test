import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from "../client/src/pages/Home";

test('homepage shows main heading', () => {
    render(
        <MemoryRouter>
        <Home />
        </MemoryRouter>
    );
    expect(screen.getByText(/Personalized Quizzes/i)).toBeInTheDocument();
});