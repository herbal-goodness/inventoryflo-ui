import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const FormRow = styled(Form.Row)`
	margin: 0 0 16px;

	.form-group {
		width: 100%;
	};

	@media (min-width: 620px) {
		display: flex;
		flex-wrap: nowrap;

		.form-group {
			flex: 1 1;

			&:not(:first-child) {
				margin-left: 24px;
			}
		}
	}
`;

export const Label = styled(Form.Label)`
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 4px;
	min-width: 160px;
`;

export const PageWrapper = styled.section`
	padding: 0 16px;

	@media (min-width: 700px) {
		padding: 0 24px;
	}
`;

export const PageHeader = styled.h1`
	margin-bottom: 36px;
`;

export const StyledButtonToolbar = styled(ButtonToolbar)`
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-end;
	margin-top: 24px;
	padding: 8px 0;
	width: 100%;

	button {
		margin: 0 16px;
	}
`;

export const StyledForm = styled(Form)`
	border-radius: 4px;
	box-shadow: 8px 8px 32px 0px rgba(0,0,0,0.75);
	height: 100%;
	margin: 24px auto;
	max-width: 720px;
	padding: 36px 24px;
	width: 100%;
`;
