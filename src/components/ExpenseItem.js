import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleAddTen = () => {
        const item = {
            name: props.name,
            budget: 10,
        };

        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };
    const handleDeleteTen = () => {
        const item = {
            name: props.name,
            budget: 10
        };

        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>{Location}{props.budget}</td>
            <td><FaPlusCircle size='2.2em' color="4FAC5C" onClick={handleAddTen}></FaPlusCircle></td>
            <td><FaMinusCircle size='2.2em' color="darkred" onClick={handleDeleteTen}></FaMinusCircle></td>
            <td style={{verticalAlign: "middle"}}><FaTimesCircle size='1.3em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;