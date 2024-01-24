"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface TabItemProps {
	value: string;
	title: string;
	isSelected?: boolean;
}
export function TabItem({ value, title, isSelected = false }: TabItemProps) {
	return (
		<Tabs.Trigger
			value={value}
			className='group outline-none relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700'>
			<span className='group-focus-visible:ring-2 group-focus-visible:ring-violet-100 rounded group-focus-visible:ring-offset-4'>
				{title}
			</span>

			{isSelected && (
				<motion.div
					layoutId='selectedTab'
					className='absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 '
				/>
			)}
		</Tabs.Trigger>
	);
}
