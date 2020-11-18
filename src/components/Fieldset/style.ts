import { css } from "@emotion/core";
import { IStyleFieldset } from "@flexure/base-ui";

export const FieldsetStyle: IStyleFieldset = {
	_fieldset: css`
		font-weight: normal;
		line-height: 1.5;
		color: #0a0a0a;
		-webkit-font-smoothing: antialiased;
		box-sizing: inherit;
		margin: 1rem 0;
		padding: 1rem;
		border: 1px solid #cacaca;
	`,
	_text: css`
		font-weight: normal;
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		color: inherit;
		display: table;
		white-space: normal;
		max-width: 100%;
		margin: 0;
		margin-left: -0.1875rem;
		padding: 0 0.1875rem;
	`,
};
