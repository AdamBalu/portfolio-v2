import './globals.css';
import 'material-symbols';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';
import Head from 'next/head';

import { Providers } from './providers';

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
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link rel="manifest" href="/site.webmanifest" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
			<meta
				name="description"
				content="Adam Balušeskul - My Portfolio"
				key="desc"
			/>
		</Head>

		<body
			id="bg-myown"
			className={`min-h-screen flex flex-col ${raleway.className} text-slate-700 dark:text-slate-200 transition-color duration-500 ease-in-out bg-[url(/static/cooked_bg_white.svg)]  dark:bg-[url(/static/cooked_bg_new.svg)] dark:from-secondary-lighter dark:to-custom-purple-dark`}
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
