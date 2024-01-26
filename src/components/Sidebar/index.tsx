"use client";
import { Logo } from "./Logo";
import { Cog, LifeBuoy, Menu, Search } from "lucide-react";

import {
	BarChart,
	CheckSquare,
	Flag,
	Home,
	SquareStack,
	Users
} from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Form/Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ThemeToggle from "../ThemeToggle";

export function Sidebar() {
	const [parent] = useAutoAnimate();
	return (
		<Collapsible.Root
			className='
				lg:h-screen
				flex flex-col gap-6  border-zinc-200
				p-4 fixed lg:sticky border-bottom left-0 top-0 right-0 data-[state=open]:bottom-0
				data-[state=open]:w-full data-[state=open]:z-50
				bg-white lg:right-auto lg:w-80 lg:border-r
				lg:px-5 lg:py8
				dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100
				'>
			<div className='flex items-center justify-between'>
				<Logo />
				<Collapsible.Trigger className='lg:hidden' asChild>
					<Button variant='ghost'>
						<Menu className='h-6 w-6' />
					</Button>
				</Collapsible.Trigger>
			</div>
			<Collapsible.Content
				ref={parent}
				forceMount
				className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex data-[state=open]:animate-slideDownAndFade'>
				<InputRoot>
					<InputPrefix>
						<Search className='h-5 w-5 text-zinc-500' />
					</InputPrefix>
					<InputControl placeholder='Search' />
				</InputRoot>

				<ThemeToggle />

				<nav className='space-y-0.5'>
					<NavItem title='Home' icon={Home} />
					<NavItem title='Dashboard' icon={BarChart} />
					<NavItem title='Projects' icon={SquareStack} />
					<NavItem title='Tasks' icon={CheckSquare} />
					<NavItem title='Reporting' icon={Flag} />
					<NavItem title='Users' icon={Users} />
				</nav>

				<div className='mt-auto flex flex-col gap-6 '>
					<nav className='space-y-0.5'>
						<NavItem title='Support' icon={LifeBuoy} />
						<NavItem title='Settings' icon={Cog} />
					</nav>

					<UsedSpaceWidget />
					<div className='h-px w-full bg-zinc-200 dark:bg-zinc-700' />
					<Profile />
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
