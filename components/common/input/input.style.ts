import styled from 'styled-components'

export const Input = styled.input`
	padding: 7px 12px;
	border-radius: 4px;
	background-color: ${props => props.theme.cardBgColor};
	border: ${props => props.theme.border};
	font-size: 18px;
	color: ${props => props.theme.textColor};
`

export const Textarea = styled.textarea`
	padding: 7px 12px;
	border-radius: 4px;
	background-color: ${props => props.theme.cardBgColor};
	border: ${props => props.theme.border};
	font-size: 18px;
	color: ${props => props.theme.textColor};
	resize: none;
`
export const Select = styled.select`
	padding: 7px 12px;
	border-radius: 4px;
	background-color: ${props => props.theme.cardBgColor};
	border: ${props => props.theme.border};
	font-size: 18px;
	color: ${props => props.theme.textColor};
`
