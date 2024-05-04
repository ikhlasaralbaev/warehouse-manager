import RootProvider from '@/providers/RootProvider'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Warehouse | Control your warehouse.',
	description: 'Control your warehouse',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
