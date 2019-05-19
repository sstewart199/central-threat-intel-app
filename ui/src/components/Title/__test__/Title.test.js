import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import Title from '../Title';

/* eslint-disable  * */
describe('Title', () => {
  let container;
  let screenLoad;
  beforeAll(() => {
    ({ container } = render(<Title titleText="Test Render Component" />));

    screenLoad = async () => waitForElement(() => container.querySelector('.header-text'));
  });

  // check that correct title appears when data loads
  it('should check that title exists with the correct text', async () => {
    await screenLoad();
    expect(container.querySelector('.header-text')).toBeTruthy();
    expect(container.querySelector('.header-text').innerHTML).toContain('Test Render Component');
  });
});
