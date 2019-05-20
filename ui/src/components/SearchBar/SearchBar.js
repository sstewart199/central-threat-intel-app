import React, { useState, useEffect, Fragment } from 'react';
import { TextInput } from 'carbon-components-react';
import isIp from 'is-ip';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    // first check that there is a value inserted
    if (debouncedSearchTerm) {
      const isIPAddress = isIp(debouncedSearchTerm);
      setInvalid(!isIPAddress);

      if (isIPAddress) {
        onChange(debouncedSearchTerm);
      }
    } else {
      setInvalid(false);
    }
  }, [debouncedSearchTerm, onChange]);

  return (
    <Fragment>
      <TextInput
        id="test2"
        placeholder="Investigate an IP Address"
        hideLabel
        labelText=""
        invalid={invalid}
        invalidText="A valid value is required"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </Fragment>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Return a cleanup function that will be called every time ...
      // ... useEffect is re-called. useEffect will only be re-called ...
      // ... if value changes (see the inputs array below).
      // This is how we prevent debouncedValue from changing if value is ...
      // ... changed within the delay period. Timeout gets cleared and restarted.
      // To put it in context, if the user is typing within our app's ...
      // ... search box, we don't want the debouncedValue to update until ...
      // ... they've stopped typing for more than 500ms.
      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value, delay]
  );

  return debouncedValue;
}
