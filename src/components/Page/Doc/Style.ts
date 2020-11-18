import { css } from "@emotion/core"
import { IBasePageDocStyle } from "@flexure/base-ui"

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`)

const _side = css`
	flex: 1;
	background-color: #f7f7f7;

	${mq[1]} {
		display: none;
	}
`

export const DocPageStyle: IBasePageDocStyle = {
	_container: css`
		display: flex;
	`,
	_menuContainer: css`
		${_side}
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		padding-right: 20px;
	`,
	_sectionContainer: css`
		max-width: 800px;
	`,
	_asideContainer: css`
		${_side}
	`,
}
