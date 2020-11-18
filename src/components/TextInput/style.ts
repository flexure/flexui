import { css } from "@emotion/core";
import { IStyleTextInput } from "@flexure/base-ui";
import { ITheme } from "../../styled";

export const TextInputStyle: IStyleTextInput = {
	_input: (theme: ITheme, props: { disabled: boolean }) => css`
		-webkit-font-smoothing: antialiased;
		overflow: visible;
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 2.4375rem;
		margin: 0 0 1rem;
		padding: 0.5rem;
		border-radius: 0;
		font-size: 1rem;
		font-weight: normal;
		line-height: 1.5;
		color: #0a0a0a;
		-webkit-appearance: none;
		outline: none;
		border: 1px solid #8a8a8a;
		transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
		${props.disabled ? { backgroundColor: theme?.palette.neutralTertiary } : ``}
		:focus {
			border: 1px solid ${theme.palette.themePrimary};
		}
	`,
};
