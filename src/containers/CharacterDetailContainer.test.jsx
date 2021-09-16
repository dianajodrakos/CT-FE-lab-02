import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import CharacterDetailContainer from './CharacterDetailContainer.jsx';

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
  it('renders a single villager', async () => {
    renderWithRouter(CharacterDetailContainer, 
      {
        route: '/Agnes',
        path: '/:name'
      }
    );

    screen.getByText('loading...');

    const h2 = await screen.findByRole('heading');

    expect(h2).toMatchSnapshot();
  });
});
