import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { addCustomerAction } from "./store/customerReducer";
import { removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = () => {
    dispatch(removeCustomerAction(customers.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add client</button>
        <button onClick={() => removeCustomer()}>Delete clients</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Add clients from database
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "3rem" }}>No Clients</div>
      )}
    </div>
  );
}

export default App;
