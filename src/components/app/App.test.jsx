/* eslint-disable max-len */
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import listPageOne from '../../fixtures/listPage1.json';
import listPageTwo from '../../fixtures/listPage2.json';
import detailData from '../../fixtures/detailData.json';
import App from './App';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    let response;

    if(page === '1') response = listPageOne;
    else if(page === '2') response = listPageTwo;

    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e462', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(detailData)
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

  it('renders a list of villagers with pagination', async () => {
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

    const characterFromPageOne = await screen.findByText('Agnes');
    expect(characterFromPageOne).toBeInTheDocument();
    
    const nextPageButton = screen.getByRole(
      'button',
      { name: 'next-page' }
    );

    act(() => {
      fireEvent.click(nextPageButton);
    });

    const characterFromPageTwo = await screen.findByText('Bangle');
    expect(characterFromPageTwo).toBeInTheDocument();

  });

  it('renders a single villager', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/Agnes']}>
          <App />
        </MemoryRouter>
      );
    });

    screen.getByAltText('loading');

    const h2 = await screen.findByRole('heading');

    expect(h2).toMatchSnapshot();
  });
});
