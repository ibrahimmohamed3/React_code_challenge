import React, { useState } from 'react';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const newTransaction = {
      id: Date.now(), 
      date: new Date().toISOString().split('T')[0],
      description,
      category,
      amount: parseFloat(amount),
    };

    
    setDescription('');
    setCategory('');
    setAmount('');

    
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
