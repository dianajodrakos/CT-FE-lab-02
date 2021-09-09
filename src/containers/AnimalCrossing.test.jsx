import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingContainer from './AnimalCrossing';

describe('Animal Crossing Container', () => {
  it('renders a list of villagers', async () => {
    render(<AnimalCrossingContainer />);

    screen.getByAltText('results loading');

    const ul = await screen.findByRole('list', { name: villagers });

    expect(ul).toMatchSnapshot();
    
  });
});