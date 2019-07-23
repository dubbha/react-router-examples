import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';

export const AddressBar = () => (<a-bar>{`${window.location.href}`}</a-bar>);

export default withRouter(AddressBar);