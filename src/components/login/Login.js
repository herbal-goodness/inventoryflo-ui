import React from 'react';
import Logo from '../../assets/logo.png';

function Login() {
	return (
		<div className="jumbotron">
			<h1 className="d-flex justify-content-center">Welcome To</h1>
			<img src={Logo} alt="" className="img-fluid" />
		</div>
	);
}

export default Login;
