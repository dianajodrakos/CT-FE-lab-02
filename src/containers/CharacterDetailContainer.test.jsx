import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';
import CharacterDetailContainer from './CharacterDetailContainer.jsx';
import detailData from '../fixtures/detailData.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/:name', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(detailData)
    );
  })
);

function renderWithRouter(
  ui,
  {
    route = '/',
    path = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    )
  };
}

describe('Animal Crossing Character Detail Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a single villager', async () => {
    renderWithRouter(CharacterDetailContainer, 
      {
        route: '/Agnes',
        path: '/:name'
      }
    );

    screen.getByAltText('loading');

    const h2 = await screen.findByRole('heading');

    expect(h2).toMatchSnapshot();
  });
});
