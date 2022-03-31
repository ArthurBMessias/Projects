import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Components/Login';

describe('Test component App.js', () => {
  it('Heading "Entrar" is on screen', () => {
    render(<Login />);
    const landPageComponent = screen.getByRole('heading', {
      level: 2,
      name: /Entrar/i,
    });

    expect(landPageComponent).toBeInTheDocument();
  });

  // it('On click goes to "Home" page', () => {
  //   const homeComponent = screen.getByRole('link', { name: 'Home' });
  //   userEvent.click(homeComponent);
  //   expect(screen.getByText('Originais da Netflix')).toBeInTheDocument();
  // });
});
