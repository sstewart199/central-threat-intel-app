import React, { useState } from 'react';
import AbuseIPDB from './components/AbuseIPIntel';
import MapArea from './components/MapArea';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import XforceIntel from './components/XforceIntel';

function App() {
  const [ipAddress, setIpAddress] = useState('');

  return (
    <div className="App">
      <Title titleText="Central Threat Intelligence App" />
      <SearchBar onChange={setIpAddress} />
      {ipAddress && <XforceIntel ipAddress={ipAddress} />}
      {ipAddress && <AbuseIPDB ipAddress={ipAddress} />}
      {ipAddress && <MapArea ipAddress={ipAddress} />}
    </div>
  );
}

export default App;
