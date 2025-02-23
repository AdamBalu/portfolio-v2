'use client';
import Image from 'next/image';
import { Button } from '@mui/material';

import { Chip } from '@/components/projects/chip';

type SmallProjectCardProps = {
	title: string;
	imgSrc: string;
	imgWidth: number;
	url: string;
	borderColor?: 'white' | 'blue';
	chipLabel: string;
};

export const SmallProjectCard = ({
	title,
	imgSrc,
	imgWidth,
	url,
	borderColor = 'white',
	chipLabel
}: SmallProjectCardProps) => (
	<article className="bg-white dark:bg-dark p-3 rounded-xl border border-primary dark:border-none hover:shadow-md transition-shadow duration-300 flex flex-col group relative h-full justify-between items-center">
		<h2 className="text-md font-bold text-slate-800 dark:text-slate-200 opacity-0 group-hover:opacity-100 duration-300">
			{title}
		</h2>
		<Image
			src={imgSrc}
			alt={title}
			width={imgWidth}
			height={30}
			sizes="100vw"
			className="pt-6"
		/>
		<div className="self-start">
			<div className="flex gap-2 mt-2 flex-wrap justify-start opacity-0 group-hover:opacity-100 duration-300">
				<Chip color={borderColor}>{chipLabel}</Chip>
			</div>
		</div>

		<Button
			className="absolute bottom-4 right-4 bg-card dark:bg-secondary z-1 opacity-0 group-hover:opacity-100 p-1 rounded-md duration-100"
			onClick={() => open(url)}
		>
			<Image
				src="/static/globe.svg"
				alt="visit"
				className="h-auto"
				width={32}
				height={32}
			/>
		</Button>
	</article>
);
