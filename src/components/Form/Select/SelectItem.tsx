"use client";

import * as Select from "@radix-ui/react-select";
import { Check } from "lucide-react";

export type SelectItemProps = Select.SelectItemProps & {
	text: string;
};

export function SelectItem({ text, ...props }: SelectItemProps) {
	return (
		<Select.Item
			className='cursor-pointer flex items-center gap-2 px-3 py-2.5 justify-between outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700'
			{...props}>
			<Select.ItemText asChild>
				<span className='text-black dark:text-zinc-100'>{text}</span>
			</Select.ItemText>
			<Select.ItemIndicator>
				<Check className='h-4 h-5 text-violet-500 dark:text-violet-300' />
			</Select.ItemIndicator>
		</Select.Item>
	);
}
