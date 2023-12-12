import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';
const Budget = ( ) => {
    const { budget, expenses} = useContext(AppContext);
    const { currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if(event.target.value>20000)
        {
            alert("The value cannot exceed 20000");
        }
        else
        {
        setNewBudget(event.target.value);
        }
        console.log(budget);
        console.log(totalExpenses);
        if(event.target.value < totalExpenses)
        {
            alert("You cannot reduce the budget value lower than spending");
        }
    }
    return (
<div className='alert alert-secondary'>

<label htmlFor="currency" class="currency">Budget {currency}</label>

<input type="number" max="20000" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;
