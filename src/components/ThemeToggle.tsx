"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div className='max-w-content flex items-center justify-center gap-3 '>
			<Sun className='h-4 w-4 text-violet-500 dark:text-violet-300' />
			<button
				className='max-w-content'
				onClick={() => {
					setTheme(theme === "light" ? "dark" : "light");
				}}>
				<div className='h-6 w-10 p-px rounded-xl  border ring-2 border-zinc-200/50 bg-zinc-200/50 ring-violet-500 dark:border-transparent dark:bg-transparent dark:ring-violet-300 transition-switch duration-switch'>
					<div className='rounded-full h-5 w-5  bg-violet-500 dark:translate-x-3/4 dark:bg-violet-300 transition-switch duration-switch' />
				</div>
			</button>
			<Moon className='h-4 w-4 text-violet-500 dark:text-violet-300' />
		</div>
	);
}

export default ThemeToggle;
