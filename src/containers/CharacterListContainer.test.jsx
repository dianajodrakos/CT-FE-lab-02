import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterListContainer from './CharacterListContainer';
import { act } from 'react-dom/test-utils';
import listData from '../fixtures/listData.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('Animal Crossing Character List Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of villagers', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <CharacterListContainer />
        </MemoryRouter>
      );
    });
    
    screen.getByText('loading...');

    const ul = await screen.findByRole(
      'list', 
      { name: 'villagers' }, 
      { timeout: 5000 }
    );

    expect(ul).toMatchSnapshot();
  });
});
