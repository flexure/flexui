import { css } from "@emotion/core";
import { IStyleBaseRadio } from "@flexure/base-ui";

export const RadioStyle: IStyleBaseRadio = {
	_container: (theme: any, args?: any) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
	`,
	_input: (theme: any, args?: any) => {
		return css`
			-webkit-font-smoothing: antialiased;
			-webkit-box-direction: normal;
			font-size: 100%;
			font-family: inherit;
			box-sizing: border-box;
			padding: 0;
			margin: 0.4rem;
		`;
	},
};
