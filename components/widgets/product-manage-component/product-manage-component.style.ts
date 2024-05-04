import styled from 'styled-components'
export const ProductManageComponentForm = styled.form`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	align-items: flex-start;

	input,
	textarea,
	select {
		height: 40px;
	}
`
