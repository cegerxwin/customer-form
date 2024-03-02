import PropTypes from "prop-types";
import styles from "./CustomerItem.module.css";

function CustomerItem({ customer, handleDelete }) {
  return (
    <li className={styles.customerItem}>
      <div className={styles.customerInfo}>
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className={styles.customerAvatar}
        />
        {customer.customerName}
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(customer)}>
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
}

export default CustomerItem;

CustomerItem.propTypes = {
  customer: PropTypes.object,
  customerName: PropTypes.string,
  handleDelete: PropTypes.func,
};
