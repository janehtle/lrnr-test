import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Account from "../client/src/pages/Account";

test('homepage shows main heading', () => {
    render(
        <MemoryRouter>
        <Account />
        </MemoryRouter>
    );
    expect(screen.getByText(/Account/i)).toBeInTheDocument();
});