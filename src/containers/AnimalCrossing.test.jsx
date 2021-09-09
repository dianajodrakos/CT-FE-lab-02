import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingContainer from './AnimalCrossing';

describe('Animal Crossing Container', () => {
  it('renders a list of characters', async () => {
    render(<AnimalCrossingContainer />);

    screen.getByText('Hello Friend');
    
  });
});