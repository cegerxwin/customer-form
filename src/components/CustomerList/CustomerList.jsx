import PropTypes from "prop-types";

import CustomerItem from "../CustomerItem/CustomerItem.jsx";
import styles from "../CustomerItem/CustomerItem.module.css";

function CustomerList({ customers, setCustomers }) {
  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };
  return (
    <ul className={styles.customerList}>
      {customers.map((customer) => (
        <CustomerItem
          key={customer.id}
          customer={customer}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default CustomerList;

CustomerList.propTypes = {
  customers: PropTypes.array,
  setCustomers: PropTypes.func,
};
