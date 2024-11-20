import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';
import './Home.css'

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/get_expenses`);
      setExpenses(Array.isArray(response.data) ? response.data : []); // Ensure the response is an array
    } catch (err) {
      console.error('Failed to fetch expenses:', err);
      setExpenses([]); // Set expenses to an empty array in case of error
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <ExpenseForm fetchExpenses={fetchExpenses} />
      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default Home;
