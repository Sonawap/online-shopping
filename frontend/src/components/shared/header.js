import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { APP_NAME } from 'configs/AppConfig';

const Header = props => {

  const { items } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">{APP_NAME}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/cart"
              >
                <FontAwesomeIcon icon={faShoppingCart} /> <span className="badge text-bg-secondary">{items.length ?? 0}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

  };

const mapStateToProps = ({cart}) => {
  const { items } = cart;
  return { items };
}

export default connect(mapStateToProps)(Header);