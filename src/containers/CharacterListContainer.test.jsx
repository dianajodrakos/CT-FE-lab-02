import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterListContainer from './CharacterListContainer';

describe('Animal Crossing Character List Container', () => {
  it('renders a list of villagers', async () => {
    render(<CharacterListContainer />);

    screen.getByText('loading...');

    const ul = await screen.findByRole('list', { name: 'villagers' });

    expect(ul).toMatchSnapshot();
    
  });
});
