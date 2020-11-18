import { css } from "@emotion/core";
import { IStyleButton, BaseButton, BaseButtonProps, Theme } from "@flexure/base-ui";
import { ITheme } from "../../styled";
import _ from "lodash";

// const _Style = {
// 	primary: css`
// 		color: #fff;
// 		background: #1890ff;
// 		border-color: #1890ff;
// 		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
// 		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
// 	`,
// 	default: css`
// 		background-image: none;
// 		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
// 		color: rgba(0, 0, 0, 0.65);
// 		background: #fff;
// 		border-color: #d9d9d9;
// 	`,
// 	dashed: css`
// 		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
// 		color: rgba(0, 0, 0, 0.65);
// 		background: #fff;
// 		border-color: #d9d9d9;
// 		border-style: dashed;
// 	`,
// 	text: css`
// 		color: rgba(0, 0, 0, 0.65);
// 		background: 0 0;
// 		border-color: transparent;
// 		box-shadow: none;
// 	`,
// 	link: css`
// 		color: #1890ff;
// 		background: 0 0;
// 		border-color: transparent;
// 		box-shadow: none;
// 	`,
// };

const scales = {
	small: css`
		padding: 0.5em 0.75em;
		font-size: 14px;
	`,
	normal: css`
		padding: 0.85em 1em;
		font-size: 16px;
	`,
	big: css`
		padding: 1em 1.2em;
		font-size: 18px;
	`,
};

const shapes = {
	default: css`
		border-radius: 0;
	`,
	circle: css`
		border-radius: 50%;
	`,
	round: css`
		border-radius: 40px;
	`,
};

type Kind = typeof BaseButton.kind;
type Kinds = Record<Kind, string>;

const kind = (outline: boolean) => (bg: string, color: string) => {
	const boxShadowColor = outline ? bg : "transparent";
	const backgroundColor = outline ? "transparent" : bg;

	return `
	  background: ${backgroundColor};
	  box-shadow: inset 0 0 0 1px ${boxShadowColor};
	  color: ${outline ? bg : color};
	  transition: all .3s;
  
	  &:hover {
		box-shadow: inset 0 0 0 1000px ${boxShadowColor};
		color: ${color};
	  }
	`;
};

const kinds = (outline: boolean): Kinds => {
	const get = kind(outline);

	return {
		primary: get(Theme.palette.themePrimary, "#fefefe"),
		success: get("#3adb76", "#fefefe"),
		alert: get("#cc4b37", "#fefefe"),
		warning: get("#ffae00", "#fefefe"),
		secondary: get(Theme.palette.themeSecondary, "#fefefe"),
	};
};

const getScale = ({ scale = "normal" }: BaseButtonProps) => scales[scale];
const getKind = ({ kind = "primary", outline = false }: BaseButtonProps) => kinds(outline)[kind];
const getShape = ({ shape = "circle" }: BaseButtonProps) => shapes[shape];

export const ButtonStyle: IStyleButton = {
	_button: (
		theme: ITheme,
		args?: {
			kind: typeof BaseButton.kind;
			outline: boolean;
			shape: typeof BaseButton.shape;
			scale: typeof BaseButton.scale;
		}
	) => {
		console.log(shapes[args.shape]);
		return css`
			text-decoration: none;
			outline: 0;
			vertical-align: middle;
			text-align: center;
			display: inline-block;
			border: 1px solid transparent;
			transition: background-color 0.25s ease-out, color 0.25s ease-out;
			cursor: pointer;

			${getKind(_.merge(args))};
			${getScale(args)};
			${getShape(args)};

			-webkit-appearance: none;
			line-height: 1;

			/* margin: 0;
			margin-right: 1px;
			margin-bottom: 1px; 
			font-size: 0.9rem;*/
			/* -webkit-box-flex: 0;
			flex: 0 0 auto; */

			:hover {
				filter: brightness(85%);
			}

			:active {
				transform: scale(0.98);
			}
		`;
	},
};
