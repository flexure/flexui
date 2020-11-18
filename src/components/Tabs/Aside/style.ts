import { IStyleBaseTabs } from "@flexure/base-ui";
import { css } from "@emotion/core";
import { ITheme } from "../../../styled";

const activeItem = (theme: ITheme) => css`
	color: ${theme.palette.themeTertiary};
`;

export const AsideStyle: IStyleBaseTabs = {
	_container: css`
		display: flex;
		flex-direction: row-reverse;
	`,
	_itemContainer: css`
		display: flex;
		flex-direction: column;
		border-left: 1px solid rgba(183, 187, 194, 0.2);
	`,

	_item: (theme: ITheme, args?: any) => {
		return css`
			color: ${theme.palette.themeTertiary};
			white-space: nowrap;
			background: 0 0;
			font: inherit;
			margin: 0;
			overflow: visible;
			text-transform: none;
			position: relative;
			box-sizing: border-box;
			display: inline-block;
			text-align: center;
			cursor: pointer;
			background-color: transparent;
			user-select: none;
			outline: transparent;
			border-width: 0px;
			text-decoration: none;
			border-radius: 0;
			padding: 8px 4px;
			font-size: xx-small;
			${args[0]?.active === true ? activeItem(theme) : {}};
		`;
	},
	_itemPanel: css`
		background-color: white;
		z-index: 101;
	`,
};
