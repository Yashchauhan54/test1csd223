import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TransactionList from './TransactionList';

function BankTransactions({ transactions, onTransaction }) {
  const [showForm, setShowForm] = useState(null);

  return (
    <div>
      <h1 className="text-center mb-4" style={{ color: 'darkred', fontSize: '50px' }}>Bank Transactions</h1>
      <div className="d-flex justify-content-around mb-4">
        <button className="btn5 btn-success " style={{ width: '400px', margin: '0 auto' }} onClick={() => setShowForm('Deposit')}>Deposit</button>
        <button className="btn4 btn-danger" style={{ width: '400px', margin: '0 auto' }}onClick={() => setShowForm('Withdraw')}>Withdraw</button>
      </div>
      {showForm === 'Deposit' && <Deposit onTransaction={onTransaction} />}
      {showForm === 'Withdraw' && <Withdraw onTransaction={onTransaction} />}
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default BankTransactions;
