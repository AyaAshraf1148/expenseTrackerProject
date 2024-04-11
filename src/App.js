import { Component } from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransctionList from './components/TransctionList';
import AddTransction from './components/AddTransction';

import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransctionList/>
        <AddTransction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
