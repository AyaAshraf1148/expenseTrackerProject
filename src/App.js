import { Component } from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransctionList from './components/TransctionList';
import AddTransction from './components/AddTransction';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransctionList/>
        <AddTransction/>
      </div>
    </div>
  );
}

export default App;
