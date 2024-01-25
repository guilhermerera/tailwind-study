import { LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

export function Profile() {
	return (
		<div className='grid grid-cols-profile items-center gap-3'>
			<Image
				src='https://github.com/guilhermerera.png'
				className='w-10 h-10 rounded-full'
				alt=''
				width={40}
				height={40}
			/>
			<div className='flex truncate flex-col'>
				<span className='font-semibold text-sm text-zinc-700'>
					Guilherme Ferreira
				</span>
				<span className='text-sm text-zinc-500 truncate'>
					guilhermerera@gmail.com
				</span>
			</div>
			<Button type='button' variant='ghost'>
				<LogOut className='h-5 w-5 text-zinc-500' />
			</Button>
		</div>
	);
}
