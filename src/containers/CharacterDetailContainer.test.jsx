import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterDetailContainer from './CharacterDetailContainer.jsx';
import detailData from '../fixtures/detailData.json';
import listData from '../fixtures/listData.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    return res(ctx.json(listData));
  }),
  rest.get('https://ac-vill.herokuapp.com/villagers/:_id', (req, res, ctx) => {
    return res(ctx.json(detailData));
  })
);

describe('Animal Crossing Character Detail Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a single villager', async () => {
    render(
      <MemoryRouter initialEntries={['/Agnes']}>
        <CharacterDetailContainer />
      </MemoryRouter>
    );
    
    screen.getByText('loading...');

    const h2 = await screen.findByRole(
      'heading', 
      { name: 'heading' }, 
      { timeout: 10000 }
    );

    expect(h2).toMatchSnapshot();
  });
});
