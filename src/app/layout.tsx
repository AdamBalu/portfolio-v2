import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';
import Head from 'next/head';

import { Providers } from './providers';
import 'material-icons/iconfont/material-icons.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Adam Balušeskul - Portfolio'
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			{/* eslint-disable-next-line @next/next/no-page-custom-font */}
			<link
				href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
				rel="stylesheet"
			/>
			{/* eslint-disable-next-line @next/next/google-font-display,@next/next/no-page-custom-font */}
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=open_with"
			/>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
			<meta
				name="description"
				content="Adam Balušeskul - My Portfolio"
				key="desc"
			/>
		</Head>
		<body
			className={`min-h-screen flex flex-col ${raleway.className}  text-slate-700 dark:text-slate-200 transition-color duration-500 ease-in-out bg-white dark:bg-secondary`}
		>
			<div className="transition-background duration-700 ease-in-out">
				<Providers>
					<div className="max-w-[1420px] mx-auto">{children}</div>
				</Providers>
				<Toaster position="bottom-right" richColors />
			</div>
		</body>
	</html>
);

export default RootLayout;
