import styled from 'styled-components'

export const Flex = styled.div<{
	gap?: string
	alignItems?: string
	direction?: string
	justifyContent?: string
}>`
	display: flex;
	gap: ${({ gap }) => gap};
	flex-direction: ${({ direction }) => direction};
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};
`
