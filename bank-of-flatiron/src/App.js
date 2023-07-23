import React from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <TransactionForm />
      <TransactionTable />
    </div>
  );
};

export default App;
