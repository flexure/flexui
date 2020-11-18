import { RadioStyle } from "./style";
import { BaseRadio, BaseRadioGroup } from "@flexure/base-ui";
import { css } from "@emotion/core";

const activeItem = css`
	color: red;
`;

const StyleBaseRadioButton = {
	_container: (theme: any, args: any) => css`
		display: flex;
		flex-direction: row;
		${args[0]?.active === true ? activeItem : { color: "blue" }};
	`,
	_input: (theme: any, args: any) => {
		return css`
			-webkit-tap-highlight-color: transparent;
			--antd-wave-shadow-color: #1890ff;
			--scroll-bar: 0;
			-webkit-box-direction: normal;
			list-style: none;
			font-feature-settings: "tnum";
			color: inherit;
			font-size: inherit;
			font-family: inherit;
			line-height: inherit;
			overflow: visible;
			margin: 0;
			touch-action: manipulation;
			box-sizing: border-box;
			padding: 0;
			width: 0;
			height: 0;
			opacity: 0;
			cursor: pointer;
			${args[0]?.active === true ? activeItem : { color: "blue" }};
		`;
	},
	_label: (theme: any, args: any) => css`
		cursor: pointer;
	`,
};

const Radio = BaseRadio.decorate(RadioStyle);
Radio.Group = BaseRadioGroup;
Radio.Button = BaseRadio.decorate(StyleBaseRadioButton);
export default Radio;
