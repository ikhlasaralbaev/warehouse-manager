import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface DrawerProps {
	title: string
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const DrawerContainer = styled.div<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	transition: right 0.3s ease-in-out;
	z-index: 999;
`

const DrawerContent = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 40%;
	background-color: ${theme => theme.theme.bgColor};
	padding: 20px;
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
`

const DrawerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	border-bottom: ${theme => theme.theme.border};

	h2 {
		color: ${theme => theme.theme.textColor};
		font-size: 24px;
	}
`

const CloseButton = styled.button`
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: ${theme => theme.theme.textColor};
	font-size: 34px;
`

const Drawer: React.FC<DrawerProps> = ({
	title,
	isOpen,
	onClose,
	children,
}) => {
	const drawerRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (
			drawerRef.current &&
			!drawerRef.current.contains(event.target as Node)
		) {
			onClose()
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	return (
		<DrawerContainer isOpen={isOpen}>
			<DrawerContent ref={drawerRef}>
				<DrawerHeader>
					<h2>{title}</h2>
					<CloseButton onClick={onClose}>×</CloseButton>
				</DrawerHeader>
				{children}
			</DrawerContent>
		</DrawerContainer>
	)
}

export default Drawer
