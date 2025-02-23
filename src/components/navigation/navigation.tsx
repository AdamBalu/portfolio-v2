'use client';
import React, { useEffect } from 'react';

import { NavigationItems } from '@/data/navigation-list';
import { scrollToSection } from '@/common/functions/scroll-to-section';

import { ChangeThemeButton } from './change-theme-button';

export const Navigation = () => {
	useEffect(() => {
		const navbarCheckbox = document.getElementById(
			'navbar-checkbox'
		) as HTMLInputElement;
		const navbar = document.querySelector('.menuToggle');
		const navbarItems = document.querySelectorAll('.menuItem button');

		const closeNavbar = () => {
			if (navbarCheckbox.checked) {
				navbarCheckbox.checked = false;
			}
		};

		// Close navbar when clicking on a navbar item
		navbarItems.forEach(item => {
			item.addEventListener('click', () => {
				closeNavbar();
			});
		});

		// Close navbar when clicking outside the navbar
		document.addEventListener('click', event => {
			if (
				navbar &&
				navbarCheckbox.checked &&
				!navbar.contains(event.target as Node) &&
				event.target !== navbarCheckbox
			) {
				closeNavbar();
			}
		});

		// Cleanup event listeners on component unmount
		return () => {
			navbarItems.forEach(item => {
				item.removeEventListener('click', closeNavbar);
			});
			document.removeEventListener('click', closeNavbar);
		};
	}, []);

	return (
		<nav className="sticky top-10 w-full" role="navigation">
			<div className="menuToggle flex flex-col items-end relative">
				<input type="checkbox" id="navbar-checkbox" className="absolute" />
				<label htmlFor="navbar-checkbox" className="hidden">
					no label for you
				</label>
				<div className="bg-white dark:bg-secondary absolute top-[40px]">
					<span className="w-[17px] sm:w-[33px] menuLine" />
					<span className="w-[17px] sm:w-[33px] mt-1 menuLine" />
					<span className="w-[17px] sm:w-[33px] mt-1 menuLine" />
				</div>
				<ul className="menuItem">
					{NavigationItems.map((item, _) => (
						<li key={item.imgSrc} className="mb-2">
							<button
								onClick={() => scrollToSection(item.href)}
								className="uppercase rounded-md border border-primary dark:bg-dark dark:border-none flex justify-center items-center w-14 h-14 text-slate-700 dark:text-slate-300 hover:text-primary hover:dark:text-primary-dark"
							>
								<span className="material-icons-round">{item.imgSrc}</span>
							</button>
						</li>
					))}
					<li>
						<ChangeThemeButton />
					</li>
				</ul>
			</div>
		</nav>
	);
};
