import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Test component App.js', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('Includes links with texts "Entrar" ', () => {
    const landPageComponent = screen.getByRole('link', { name: 'LandPage' });

    expect(landPageComponent).toBeInTheDocument();
  });

  it('On click goes to "Home" page', () => {
    const homeComponent = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeComponent);
    expect(screen.getByText('Originais da Netflix')).toBeInTheDocument();
  });
});
