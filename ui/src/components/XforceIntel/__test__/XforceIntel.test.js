import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import { MOCKS } from './mocks/XforceIntel.mocks';
import XforceIntel from '../XforceIntel';

/* eslint-disable  * */
describe('XforceIntel', () => {
  let container;
  let screenLoad;
  beforeAll(() => {
    ({ container } = render(
      <MockedProvider addTypename={false} mocks={MOCKS}>
        <XforceIntel ipAddress="1.2.2.2" />
      </MockedProvider>
    ));

    screenLoad = async () => waitForElement(() => container.querySelector('.threat-feed-title'));
  });

  it('should render a loading skeleton on init', () => {
    expect(container.querySelector('.bx--skeleton')).toBeTruthy();
  });

  it('should check that title exists with the correct text', async () => {
    await screenLoad();
    expect(container.querySelector('.threat-feed-title')).toBeTruthy();
    expect(container.querySelector('.threat-feed-title').innerHTML).toContain(
      'X-Force Exhange Feed'
    );
  });

  it('should check that one row is rendered', async () => {
    await screenLoad();
    expect(
      container.querySelectorAll('.bx--structured-list-tbody .bx--structured-list-row').length
    ).toEqual(1);
  });

  it('should check that all the correct headers exist in the correct order', async () => {
    await screenLoad();
    expect(container.querySelectorAll('.bx--structured-list-th')[0].innerHTML).toEqual(
      'IP Address'
    );
    expect(container.querySelectorAll('.bx--structured-list-th')[1].innerHTML).toEqual(
      'Risk Score'
    );
    expect(container.querySelectorAll('.bx--structured-list-th')[2].innerHTML).toEqual('Reason');
    expect(container.querySelectorAll('.bx--structured-list-th')[3].innerHTML).toEqual(
      'Reason Description'
    );
    expect(container.querySelectorAll('.bx--structured-list-th')[4].innerHTML).toEqual('Country');
  });
});
