import { css } from "@emotion/core"
import { IStyleBadge } from "@flexure/base-ui"

export const BadgeStyle: IStyleBadge = {
	_span: css`
		font-weight: normal;
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
		box-sizing: inherit;
		display: inline-block;
		min-width: 1.5em;
		padding: 0.3em;
		border-radius: 50%;
		font-size: 0.6rem;
		text-align: center;
		background: #1779ba;
		color: #fefefe;
	`,
}
