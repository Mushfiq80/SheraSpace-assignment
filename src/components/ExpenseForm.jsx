import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ fetchExpenses }) => {
    const [userName, setUserName] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState('');

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    console.log("API_BASE_URL:", API_BASE_URL);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (amount <= 0) {
            alert('Amount must be greater than 0');
            return;
        }
        try {
            await axios.post(`${API_BASE_URL}/add_expense`, {
                user_name: userName,
                note,
                amount: parseFloat(amount),
            });
            alert('Expense added successfully!');
            setUserName('');
            setNote('');
            setAmount('');
            fetchExpenses();
        } catch (err) {
            alert('Failed to add expense. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Expense Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
            />
            <div>
                <span>BDT</span>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
