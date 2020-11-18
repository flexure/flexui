import { css } from "@emotion/core";
import { IStyleBaseTabs } from "@flexure/base-ui";
import { ITheme } from "../../../styled";

const IndicatorPosition = {
	top: css`
		left: 8px;
		top: 0px;
		height: 2px;
		right: 8px;
	`,
	right: css`
		right: 0px;
		width: 2px;
		top: 0px;
		bottom: 0px;
	`,
	bottom: css`
		left: 6px;
		bottom: 0px;
		height: 2px;
		right: 6px;
	`,
	left: css`
		left: 0px;
		width: 2px;
		top: 0px;
		bottom: 0px;
	`,
};

const activeItem = (theme: ITheme) => css`
	color: white;
	&::after {
		background-color: rgb(0, 120, 212);
		content: "";
		position: absolute;
		transition: left 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s,
			right 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s;
		${IndicatorPosition["left"]}
	}
`;

export const StyleSidebar: IStyleBaseTabs = {
	_container: css`
		background-color: #282c35;
		color: white;
		display: flex;
	`,
	_itemContainer: css`
		display: flex;
		flex-direction: column;
	`,

	_item: (theme: ITheme, args?: any) => {
		return css`
			color: gray;
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
		min-width: 300px;
		background-color: white;
	`,
};
