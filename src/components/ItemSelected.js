import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch, expenses, Budget, Location} = useContext(AppContext);
    const context = useContext(AppContext);

    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');
    const [action, setAction] = useState('Add');
    

    const submitEvent = () => {

        const item = {
            name: name,
            budget: parseInt(budget),
        };

        console.log('==========ITEM-SELECTED==========');  
        console.log('context', context);  
        console.log('item', item);  
        console.log('action', action);  
        console.log('==========END-ITEM-SELECTED==========');  

        if(item.name === ""){
            alert("You need to choose a Department!");
        } else {
            if(action === "Reduce") {
                dispatch({
                    type: 'RED_QUANTITY',
                    payload: item,
                });
            } else {
                dispatch({
                    type: 'ADD_QUANTITY',
                    payload: item,
                });
            }
        }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    {expenses.map(expense => 
                        <option key={expense.id} value={expense.name} name={expense.name}>
                            {expense.name}
                        </option>                        
                    )}
                </select>

                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>  
                <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px', padding: '0.3em'}}>{Location}</span>

                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget}
                    style={{size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>

                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }} disabled={Budget !== 0 ? false : true}>
                    Save
                </button>
                </div>
            </div>

        </div>
    );
};

export default ItemSelected;