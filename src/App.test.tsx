import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // import BrowserRouter for routing
import Instructions from './pages/Instructions';
import App from './App';
import Game from './pages/Game';

describe('Instructions', () => {
  it('renders all the details', () => {
    // Arrange
    render(
      <BrowserRouter>
        <Instructions />
      </BrowserRouter>
    );

    // Act
    const pointsItem = screen.getByText(/start off with 50 Points/i);
    const packsItem = screen.getByText(/there are 2 packs to choose from/i);
    const timerItem = screen.getByText(/you have 45 seconds to get as many points as possible/i);
    const valueItem = screen.getByText(/everytime you open a pack the value of each card will be added to your total points/i);
    const leftPackItem = screen.getByText(/the left pack will give you a higher chance of getting high value cards but more points will be needed to open it/i);
    const rightPackItem = screen.getByText(/the right pack will give you a lower chance of getting high value cards but less points will be needed to open it/i);
    const playButton = screen.getByRole('link', { name: /play game/i });

    // Assert
    expect(pointsItem).toBeInTheDocument();
    expect(packsItem).toBeInTheDocument();
    expect(timerItem).toBeInTheDocument();
    expect(valueItem).toBeInTheDocument();
    expect(leftPackItem).toBeInTheDocument();
    expect(rightPackItem).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
  });

  
});
