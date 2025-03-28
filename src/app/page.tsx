import Image from 'next/image';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { ProjectGrid } from '@/components/projects/project-grid';
import { SkillsHeading } from '@/components/my-skills/skills-heading';
import { SkillGrid } from '@/components/my-skills/skill-grid';
import { UnderlinedText } from '@/components/common/underlined-text';
import { Navigation } from '@/components/navigation/navigation';
import { ProjectGridSmall } from '@/components/projects/project-grid-small';
import { SocialIcon } from '@/components/header/social-icon';
import {
	GithubFilled,
	LinkedinFilled,
	MailFilled
} from '@/components/socials/linkedin';
import { MyTimeline } from '@/components/timeline/my-timeline';

const Page = async () => (
	<>
		<Header />
		<div className="h-2 sm:h-10" />
		<Navigation />
		<main
			className="flex flex-col flex-grow mt-10 xl:mt-0 scroll-m-32"
			id="home"
		>
			<div
				id="hero"
				className="max-w-[1100px] w-full sm:w-[75%] xl:w-full mx-auto flex flex-col items-end relative mt-6 sm:mt-0 px-2 sm:px-0"
			>
				<div className="flex flex-row items-center gap-4 mt-6 sm:mt-2">
					<div className="flex flex-col items-end gap-2">
						<UnderlinedText
							text="Hi, I'm Adam"
							subText="and I like designing and coding stuff"
							end
						/>
						<div className="flex flex-row gap-2 items-center justify-end mr-[-10px]">
							<SocialIcon
								icon={<GithubFilled />}
								link="https://github.com/adambalu"
							/>
							<SocialIcon
								icon={<LinkedinFilled />}
								link="https://linkedin.com/in/adambalu/"
							/>
							<SocialIcon
								icon={<MailFilled />}
								link="mailto:blaubalu.dev@gmail.com"
							/>
						</div>
					</div>
					<div className="flex flex-row items-center gap-2 w-24 h-24 rounded-full border border-primary-shadow">
						<Image
							src="/static/profilepic.png"
							alt=""
							width={78}
							height={20}
							className="rounded-full ml-1 mt-[-12px]"
						/>
					</div>
				</div>
			</div>
			<div className="justify-center items-center h-[calc(100vh-152px)] min-h-[1000px] mb-[calc(40vh)] hidden min-[1280px]:flex">
				<ProjectGrid />
			</div>

			<div className="flex justify-center items-center min-h-[calc(100vh-152px)] h-max mb-10 min-[1280px]:hidden">
				<ProjectGridSmall />
			</div>

			<div
				id="timeline"
				className="scroll-m-16 md:scroll-m-32 2xl:mx-0 mb-12 min-h-dvh mx-4 mt-[150px] mb-[200px] sm:mb-[600px]"
			>
				<MyTimeline />
			</div>

			<div
				id="skills"
				className="scroll-m-16 md:scroll-m-32 2xl:mx-0 mb-12 sm:mb-64"
			>
				<SkillsHeading />
				<div className="mx-8 sm:mx-10 md:mx-8 xl:mx-20 2xl:mx-0 mt-2 sm:mt-6">
					<SkillGrid />
				</div>
			</div>
		</main>
		<Footer />
	</>
);

export default Page;
