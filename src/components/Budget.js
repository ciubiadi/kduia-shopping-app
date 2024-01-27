import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {dispatch, Budget, Location, totalExpenses} = useContext(AppContext);
   
  const changeBudget = (e)=>{
    // const re = /^[0-9\b]+$/;
    
    if(e.target.value > 20000){
        alert('The value cannot exceed 20,000');        
    } else {
        if(e.target.value < totalExpenses){
            alert('You cannot reduce the budget value lower than the spending');
            e.target.value = Budget;
        } else {
            dispatch({
                type: 'CHG_BUDGET',
                payload: e.target.value,
            })
        }
    }


    // if (e.target.value === '' || re.test(e.target.value)) {
        // dispatch({
        //     type: 'CHG_BUDGET',
        //     payload: e.target.value,
        // })
    // } else {
        // alert("You can enter only numbers!");
        // e.target.value = Budget;
    // }
  }

  return (
    <div className='alert alert-secondary'> 
        Budget:{Location}{
         <input type="number" name="budget" id="budget" step="10" min="0" max="20000" value={Budget} onChange={event=>changeBudget(event)}/>
        }
    </div>
    );
};

export default Budget;