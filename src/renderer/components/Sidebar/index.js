import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.scss';

const Sidebar = ({
  accounts,
  onAddAccount,
  onSelectAccount,
}) =>
  <div className={styles.container}>
    <button
      className={styles.tab}
      onClick={onAddAccount}
    >
      <div>
        <span>+</span>
      </div>
    </button>

    {accounts
      .map((account, index) => (
        <button
          key={index}
          className={styles.tab}
          onClick={onSelectAccount.bind(this, account)}
        >
          {account.charAt(0)}
        </button>
      ))}

    <Link
      to="/settings"
      className={styles.tab}
    >
      Settings
    </Link>
  </div>;

Sidebar.propTypes = {
  accounts: PropTypes.array.isRequired,
  onAddAccount: PropTypes.func.isRequired,
  onSelectAccount: PropTypes.func.isRequired,
};

export default Sidebar;