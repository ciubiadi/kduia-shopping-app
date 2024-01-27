import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
    const { remainingBudget, Location } = useContext(AppContext);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{remainingBudget}</span>
        </div>
    );
};

export default RemainingBudget;