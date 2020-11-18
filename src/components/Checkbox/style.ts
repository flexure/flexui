import { css } from "@emotion/core";
import { IStyleCheckbox } from "@flexure/base-ui";
import { ITheme } from "../../styled";

export const CheckboxStyle: IStyleCheckbox = {
	_container: css`
		display: flex;
		align-items: center;
		color: green;
	`,
	_input: (theme: ITheme, props: { disabled: boolean }) => css`
		-webkit-font-smoothing: antialiased;
		-webkit-box-direction: normal;
		font-size: 100%;
		font-family: inherit;
		box-sizing: border-box;
		padding: 0;
		margin: 0.4rem;
	`,
	_label: css`
		-webkit-font-smoothing: antialiased;
		-webkit-box-direction: normal;
		box-sizing: inherit;
		margin: 0;
		font-weight: normal;
		color: #0a0a0a;
		display: inline-block;
		vertical-align: baseline;
		margin-left: 0.5rem;
		margin-right: 1rem;
		margin-bottom: 0;
		cursor: pointer;
	`,
};
