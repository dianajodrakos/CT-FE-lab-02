import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import CharacterListContainer from './CharacterListContainer.jsx';


describe('Animal Crossing Character List Container', () => {
  it('renders a list of villagers', async () => {
    render(
      <MemoryRouter>
        <CharacterListContainer />
      </MemoryRouter>
    );
    
    screen.getByText('loading...');

    const ul = await screen.findByRole(
      'list', 
      { name: 'villagers' }, 
      { timeout: 10000 }
    );

    expect(ul).toMatchSnapshot();
    
  });
});
