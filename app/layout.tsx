import RootProvider from '@/providers/RootProvider'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ZeroDEV | Control your income and expense',
	description: 'Control your income and expense',
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
