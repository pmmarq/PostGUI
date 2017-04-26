import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/Navigation.css';

let lib = require('../utils/library.js');

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<div className="navigationElement titleElement">
					<div className="LogoAndTitle">
						<img src={logo} className="LeftPaneLogo" alt="logo" />
						<h3 className="LeftPaneTitle">{lib.getFromConfig('title')}</h3>
					</div>
				</div>
				<p className="navigationElement">Data Visualization</p>
				<p className="navigationElement">Custom Query</p>
			</div>
		);
	}
}

export default Navigation;
