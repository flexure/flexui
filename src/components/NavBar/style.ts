import { css } from "@emotion/core"
import { NavBarAlignment, IStyleNavBar } from "@flexure/base-ui"
import { ITheme } from "../../styled"

const _alignVertical = css`
	width: 64px;
	flex-direction: column;
	padding-bottom: calc(20px);
	padding-top: 24px;
	height: calc(100vh - 0px);
`
const _alignHorizontal = css`
	width: 100%;
	height: 64px;
	padding-right: calc(20px);
	padding-left: 24px;
`

export const NavBarStyle: IStyleNavBar = {
	_container: (theme: ITheme, args: { alignment: NavBarAlignment }) =>
		css`
			display: flex;
			${args.alignment === "vertical" ? _alignVertical : _alignHorizontal};
			-webkit-box-align: center;
			align-items: center;
			box-sizing: border-box;
			-webkit-box-pack: justify;

			background-color: rgb(7, 71, 166);
			color: white;
			fill: rgb(7, 71, 166);
			transition: background-color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s, color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
		`,
	_nearItemsContainer: css`
		flex: 1;
	`,
	_farItemsContainer: css``,
}
