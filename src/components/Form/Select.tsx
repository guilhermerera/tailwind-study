"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export interface SelectProps {}
export function Select(props: SelectProps) {
	return (
		<SelectPrimitive.Root>
			<SelectPrimitive.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500'>
				<SelectPrimitive.Value
					placeholder='Select a country...'
					className='text-black '
				/>
				<SelectPrimitive.Icon>
					<ChevronDown className='h-5 w-5 text-zinc-500' />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					sideOffset={8}
					side='bottom'
					position='popper'
					className='z-10 rounded-lg border border-zinc-300 bg-white w-[--radix-select-trigger-width] overflow-hidden'>
					<SelectPrimitive.Viewport className='outline-none'>
						<SelectPrimitive.Item
							className='cursor-pointer flex items-center gap-2 px-3 py-2.5 justify-between outline-none data-[highlighted]:bg-zinc-50'
							value='br'>
							<SelectPrimitive.ItemText className='text-black'>
								Brazil
							</SelectPrimitive.ItemText>
							<SelectPrimitive.ItemIndicator>
								<Check className='h-4 h-5 text-violet-500' />
							</SelectPrimitive.ItemIndicator>
						</SelectPrimitive.Item>
						<SelectPrimitive.Item
							className='cursor-pointer flex items-center gap-2 px-3 py-2.5 justify-between outline-none data-[highlighted]:bg-zinc-50'
							value='us'>
							<SelectPrimitive.ItemText className='text-black'>
								United States
							</SelectPrimitive.ItemText>
							<SelectPrimitive.ItemIndicator>
								<Check className='h-4 h-5 text-violet-500' />
							</SelectPrimitive.ItemIndicator>
						</SelectPrimitive.Item>
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
}
