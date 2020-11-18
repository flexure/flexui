import { css } from "@emotion/core";
import { IStyleBaseIcon, IconPosition } from "@flexure/base-ui";
import { ITheme } from "../../styled";

const Position = {
	left: css`
		flex-direction: row;
	`,
	right: css`
		flex-direction: row-reverse;
	`,
	top: css`
		flex-direction: column;
	`,
	bottom: css`
		flex-direction: column-reverse;
	`,
};

export const StyleTextIcon: IStyleBaseIcon = {
	_container: (theme: ITheme, props: { position: IconPosition }) => {
		return css`
			display: flex;
			${Position[props.position]};
		`;
	},
};
