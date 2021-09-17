import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import listData from '../../fixtures/listData.json';
import App from './App';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(listData)
    );
  })
);

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Animal Crossing App', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of villagers', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    screen.getByAltText('loading');

    const ul = await screen.findByRole(
      'list',
      { name: 'villagers' },
    );

    expect(ul).toMatchSnapshot();
  });
});
