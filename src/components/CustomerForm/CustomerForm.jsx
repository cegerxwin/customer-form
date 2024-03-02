import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CustomerForm.module.css";

function CustomerForm({ addNewCustomer }) {
  const [customerName, setCustomerName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };
  return (
    <form className={styles.customerForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={customerName}
        placeholder="Add a new custom name..."
        className={styles.customerInput}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <button>
        <i className="bi bi-plus-lg" />
      </button>
    </form>
  );
}

export default CustomerForm;

CustomerForm.propTypes = {
  addNewCustomer: PropTypes.func,
};
