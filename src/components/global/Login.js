import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

import { Label } from '../shared/StyledComponents';

const Container = styled.div`
	border-radius: 4px;
	box-shadow: 12px 12px 24px -8px rgba(0,0,0,0.75);
	height: 100%;
	margin: 24px auto;
	max-height: 800px;
	max-width: 360px;
	padding: 36px 24px;
	width: 100%;
`;

const StyledButton = styled(Button)`
	width: 100%;
`;

const StyledForm = styled(Form)`
	padding: 24px;
`;

const Login = ({ setLogin }) => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const validateLogin = (e) => {
		e.preventDefault();

		if (password !== 'test') {
			setError('You have entered an invalid username and/or password.');
		} else {
			setLogin(true);
		}
	};

	return (
		<Container>
			<Image src="/medium-logo.png" alt="Inventory Flo Logo" fluid />
			<StyledForm onSubmit={validateLogin}>
				{ error && (
					<Alert variant="danger">
						{error}
					</Alert>
				)}
				<Form.Group controlId="login-username">
					<Label>Username</Label>
					<Form.Control
						id="login-username"
						onChange={e => setUsername(e.target.value)}
						type="text"
						value={username}
					/>
				</Form.Group>
				<Form.Group controlId="login-password">
					<Label>Password</Label>
					<Form.Control
						id="login-password"
						onChange={e => setPassword(e.target.value)}
						type="password"
						value={password}
					/>
				</Form.Group>
				<StyledButton
					type="submit"
					onClick={validateLogin}
				>Login</StyledButton>
			</StyledForm>
		</Container>
	);
};

Login.propTypes = {
	setLogin: PropTypes.func.isRequired,
};

export default Login;
