import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    if (action.payload.budget <= state.remainingBudget) {
                        expense.budget = expense.budget + action.payload.budget;
                        state.totalExpenses += action.payload.budget;
                        state.remainingBudget = state.Budget - state.totalExpenses;
                    } else {
                        alert(`The value cannot exceed remaining funds ${state.Location}${state.remainingBudget}`);
                    }
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.budget = expense.budget - action.payload.budget;
                        state.totalExpenses -= action.payload.budget;
                        state.remainingBudget = state.Budget - state.totalExpenses;
                    }
                    expense.budget = expense.budget < 0 ? 0: expense.budget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
    case 'DELETE_ITEM':
        state.expenses.map((expense)=>{
            if(expense.name === action.payload.name) {
                state.totalExpenses -= expense.budget;
                state.remainingBudget += expense.budget;
                expense.budget = 0;
            }
            new_expenses.push(expense);
            return true;
        })
        state.expenses = new_expenses;
        action.type = "DONE";
        return {
            ...state,
        };
    case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            };
    case 'CHG_BUDGET':
            action.type = "DONE";
            if(action.payload === ''){
                state.Budget = 0;
            } else {
                state.Budget = action.payload;
            }
            state.remainingBudget = action.payload - state.totalExpenses;
            return {
                ...state
            };
        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    // expenses: [
    //     { id: "Marketing", name: 'Marketing', quantity: 0, unitprice: 500 },
    //     { id: "Finance", name: 'Finance', quantity: 0, unitprice: 300 },
    //     { id: "Sales", name: 'Sales', quantity: 0, unitprice: 400 },
    //     { id: "Human Resource", name: 'Human Resource', quantity: 0, unitprice: 600 },
    //     { id: "IT", name: 'IT', quantity: 0, unitprice: 200 },
    // ],
    expenses: [
        { id: "Marketing", name: 'Marketing', budget: 0 },
        { id: "Finance", name: 'Finance', budget: 0 },
        { id: "Sales", name: 'Sales', budget: 0 },
        { id: "Human Resource", name: 'Human Resource', budget: 0 },
        { id: "IT", name: 'IT', budget: 0 },
    ],
    Location: '£',
    Budget: 0,
    totalExpenses: 0,
    remainingBudget: 0
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + item.budget);
    }, 0);
state.CartValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location,
                Budget: state.Budget,
                totalExpenses: state.totalExpenses,
                remainingBudget: state.remainingBudget
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};