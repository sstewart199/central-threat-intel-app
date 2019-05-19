import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import { MOCKS } from './mocks/AbuseIPDB.mocks';
import AbuseIPDB from '../AbuseIPDB';

/* eslint-disable  * */
describe('AbuseIPDB', () => {
  let container;
  let screenLoad;
  beforeAll(() => {
    ({ container } = render(
      <MockedProvider addTypename={false} mocks={MOCKS}>
        <AbuseIPDB ipAddress="1.2.2.2" />
      </MockedProvider>
    ));

    screenLoad = async () => waitForElement(() => container.querySelector('.threat-feed-title'));
  });

  it('should render a loading skeleton on init', () => {
    expect(container.querySelector('.bx--skeleton')).toBeTruthy();
  });

  // check that correct title appears when data loads
  it('should check that title exists with the correct text', async () => {
    await screenLoad();
    expect(container.querySelector('.threat-feed-title')).toBeTruthy();
    expect(container.querySelector('.threat-feed-title').innerHTML).toContain('AbuseIP Feed');
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
    expect(container.querySelectorAll('.bx--structured-list-th')[1].innerHTML).toEqual('Public?');
    expect(container.querySelectorAll('.bx--structured-list-th')[2].innerHTML).toEqual('Version');
    expect(container.querySelectorAll('.bx--structured-list-th')[3].innerHTML).toEqual(
      'Whitelisted?'
    );
    expect(container.querySelectorAll('.bx--structured-list-th')[4].innerHTML).toEqual(
      'Abuse Confidence Score'
    );
    expect(container.querySelectorAll('.bx--structured-list-th')[5].innerHTML).toEqual('usageType');
    expect(container.querySelectorAll('.bx--structured-list-th')[6].innerHTML).toEqual('domain');
  });
});
