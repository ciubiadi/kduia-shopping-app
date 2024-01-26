import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    // const handleDeleteItem = () => {
    //     const item = {
    //         name: props.name,
    //     };

    //     dispatch({
    //         type: 'DELETE_ITEM',
    //         payload: item,
    //     });
    // };
    const handleAddTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_10',
            payload: item,
        });
    };
    const handleDeleteTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_10',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        {/* <td>{Location}{parseInt(props.unitprice)}</td> */}
        {/* <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td> */}
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddTen}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="darkred" onClick={handleDeleteTen}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;