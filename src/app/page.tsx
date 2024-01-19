import { SettingsTabs } from "@/components/Settings/Tabs";
import * as Input from "@/components/Input";
import { Mail, UploadCloud, User } from "lucide-react";

export default function Home() {
	return (
		<>
			<h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>
			<SettingsTabs />
			<div className='mt-8 flex flex-col'>
				<div className='flex items-center justify-between border-b border-zinc-200 pb-5'>
					<div className='space-y-1'>
						<h2 className='text-zinc-900 text-lg font-medium'>Personal info</h2>
						<span className='text-zinc-500 text-sm font-normal'>
							Update your photo an personal details here.
						</span>
					</div>
					<div className='flex items-center gap-3'>
						<button
							type='button'
							className='border border-zinc-300 px-4 py-2 rounded-lg font-semibold text-sm text-zinc-700 shadow-sm hover:bg-zinc-50'>
							Cancel
						</button>
						<button
							type='submit'
							form='settings'
							className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'>
							Save
						</button>
					</div>
				</div>
				<form
					id='settings'
					className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200'>
					<div className='grid grid-cols-form gap-3'>
						<label
							htmlFor='firstName'
							className='text-sm font-medium	text-zinc-700'>
							Name
						</label>
						<div className='grid gap-6 grid-cols-2'>
							<Input.InputRoot>
								<Input.InputControl id='firstName' defaultValue='Guilherme' />
							</Input.InputRoot>
							<Input.InputRoot>
								<Input.InputControl id='lastName' defaultValue='Ferreira' />
							</Input.InputRoot>
						</div>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label htmlFor='email' className='text-sm font-medium	text-zinc-700'>
							Email address
						</label>

						<Input.InputRoot>
							<Input.InputPrefix>
								<Mail className='h-5 w-5 text-zinc-500' />
							</Input.InputPrefix>

							<Input.InputControl
								id='email'
								type='email'
								defaultValue='guilhermerera@gmail.com'
							/>
						</Input.InputRoot>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label htmlFor='photo' className='text-sm font-medium	text-zinc-700'>
							Your photo
							<span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
								This will be displayed on your profile.
							</span>
						</label>

						<div className='flex items-start gap-5'>
							<div className='bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full'>
								<User className='h-8 w-8 text-violet-500' />
							</div>
							<label
								htmlFor='photo'
								className='group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500'>
								<div className='rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100'>
									<UploadCloud className='h-5 w-5 text-zinc-600 group-hover:text-violet-600' />
								</div>
								<div className='flex flex-col items-center gap-1'>
									<span className='text-sm'>
										<span className='font-semibold text-violet-700'>
											Click to upload
										</span>{" "}
										or drag and drop
									</span>
									<span className='text-xs'>
										SVG, PNG, JPG or GIG (max. 800x400px)
									</span>
								</div>
							</label>
							<input type='file' className='sr-only' id='photo' />
						</div>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label htmlFor='role' className='text-sm font-medium	text-zinc-700'>
							Role
						</label>

						<Input.InputRoot>
							<Input.InputControl
								id='role'
								type='text'
								defaultValue='Software Engineer'
							/>
						</Input.InputRoot>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label
							htmlFor='country'
							className='text-sm font-medium	text-zinc-700'>
							Country
						</label>

						<div></div>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label
							htmlFor='timezone'
							className='text-sm font-medium	text-zinc-700'>
							Timezone
						</label>

						<div></div>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label htmlFor='photo' className='text-sm font-medium	text-zinc-700'>
							Bio
							<span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
								Write a short introduction.
							</span>
						</label>

						<div></div>
					</div>

					<div className='grid grid-cols-form gap-3 pt-5'>
						<label htmlFor='photo' className='text-sm font-medium	text-zinc-700'>
							Portifolio projects
							<span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
								Share a few snippets of you work.
							</span>
						</label>

						<div></div>
					</div>

					<div className='flex items-center justify-end gap-3 pt-5'>
						<button
							type='button'
							className='border border-zinc-300 px-4 py-2 rounded-lg font-semibold text-sm text-zinc-700 shadow-sm hover:bg-zinc-50'>
							Cancel
						</button>
						<button
							type='submit'
							className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'>
							Save
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
