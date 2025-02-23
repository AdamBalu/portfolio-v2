'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export const ChangeThemeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI (prevents hydration warnings)
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			name="change theme"
			className="px-4 py-2 font-semibold rounded-md"
			onClick={() => {
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}
		>
			{theme === 'light' ? (
				<Moon
					color="orange"
					className="hover:fill-primary transition-transform hover:-rotate-[360deg] ease-in-out duration-1000"
				/>
			) : (
				<Sun className="hover:fill-primary-dark transition-transform hover:-rotate-[180deg] ease-in-out duration-1000" />
			)}
		</button>
	);
};
