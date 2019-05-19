import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import SearchBar from '../SearchBar';

afterEach(cleanup);

describe('SearchBar', () => {
  it('should call the onChange function if the value is valid after 1 second', () => {
    const spy = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onChange={spy} />);
    const input = getByPlaceholderText('Investigate an IP Address');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '1.2.3.4' } });
    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    }, 1001);
  });

  it('should not call the onChange function if the value is valid before 1 second', () => {
    const spy = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onChange={spy} />);
    const input = getByPlaceholderText('Investigate an IP Address');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '1.2.3.4' } });
    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(0);
    }, 500);
  });

  it('should not call the onChange function if the value is invalid after 1 second', () => {
    const spy = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onChange={spy} />);
    const input = getByPlaceholderText('Investigate an IP Address');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'invlaid value' } });
    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(0);
    }, 1001);
  });
});
