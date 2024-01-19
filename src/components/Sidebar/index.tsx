import { Logo } from "./Logo";
import { Cog, LifeBuoy, Search, SearchCheck } from "lucide-react";

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
import { Input } from "postcss";

export function Sidebar() {
	return (
		<aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
            <Logo />
            
			<InputRoot>
				<InputPrefix>
					<Search className='h-5 w-5 text-zinc-500' />
				</InputPrefix>
				<InputControl placeholder='Search' />
            </InputRoot>
            
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
				<div className='h-px w-full bg-zinc-200' />
				<Profile />
			</div>
		</aside>
	);
}
