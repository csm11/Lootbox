import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // import BrowserRouter for routing
import Instructions from './pages/Instructions';
import App from './App';
import Game from './pages/Game';


describe('Game', () => {
  it('renders the game page', async() => {
    // Arrange
    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );

    // Act
    const timerItem = screen.getByText(/Time Left:/i);
    const pointsItem = screen.getByText(/Points:/i);
    const baseSetImage = screen.getByAltText('base set pack');
    const silverTempestImage = screen.getByAltText('silver tempest pack');

    // Assert
    expect(timerItem).toBeInTheDocument();
    expect(pointsItem).toBeInTheDocument();
    expect(pointsItem).toHaveTextContent('Points: 50');
    expect(baseSetImage).toBeInTheDocument();
    expect(silverTempestImage).toBeInTheDocument();

     // Wait for the timer to start
     await waitFor(() => {
      expect(timerItem).toHaveTextContent('Time left: 44 seconds');
    });

  });
});
