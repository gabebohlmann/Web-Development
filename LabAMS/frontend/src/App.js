import React from 'react';
import UserList from './components/UserList';
import AssetList from './components/AssetList';
import AddUserForm from './components/AddUserForm';
import AddAssetForm from './components/AddAssetForm';

const App = () => {
  return (
    <div className="App">
      <UserList />
      <AssetList />
    </div>
  );
}

export default App;

