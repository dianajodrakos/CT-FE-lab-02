import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingContainer from './AnimalCrossingContainer';

describe('Animal Crossing Container', () => {
  it('renders a list of villagers', async () => {
    render(<AnimalCrossingContainer />);

    // screen.getByText('loading...');

    const ul = await screen.findByRole('list', { name: 'villagers' });

    expect(ul).toMatchSnapshot();
    
  });
});
