import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { totalExpenses, Location } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.budget));
    // }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;