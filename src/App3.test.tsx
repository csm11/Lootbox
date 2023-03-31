import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // import BrowserRouter for routing
import Instructions from './pages/Instructions';
import App from './App';
import Game from './pages/Game';
import Survey from './pages/Survey';

describe('Survey', () => {
  it('renders the survey page', () => {
    // Arrange
    render(
      <BrowserRouter>
        <Survey />
      </BrowserRouter>
    );

   // Act
const surveyForm = screen.getByTitle("Google Forms");

// Assert
expect(surveyForm).toBeInTheDocument();
expect(surveyForm).toHaveAttribute("src", "https://docs.google.com/forms/d/e/1FAIpQLSfXoVaMTA5OtYNFFDTN11B8H6txccViBCFz04SBu5IefrwMZw/viewform?usp=sf_link");

  });
});