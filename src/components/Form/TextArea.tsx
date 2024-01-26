import { ComponentProps } from "react";

export interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(props: TextAreaProps) {
	return (
		<textarea
			className='outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100min-h-36 resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm
			dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20
			dark:placeholder-zinc-400 dark:text-zinc-100 '
			{...props}
		/>
	);
}
