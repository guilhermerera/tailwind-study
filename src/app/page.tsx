import { SettingsTabs } from "@/components/Settings/Tabs";
import * as Input from "@/components/Form/Input";
import {
	Bold,
	ChevronDown,
	Italic,
	Link,
	List,
	ListOrdered,
	Mail
} from "lucide-react";
import * as FileInput from "@/components/Form/FileInputComponent";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { TextArea } from "@/components/Form/TextArea";
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<>
			<h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>
			<SettingsTabs />
			<div className='mt-8 flex flex-col'>
				<div className='flex flex-col items-start lg:flex-row lg:items-center justify-between border-b border-zinc-200 pb-5'>
					<div className='space-y-1 mb-4 lg:mb-0'>
						<h2 className='text-zinc-900 text-lg font-medium'>Personal info</h2>
						<span className='text-zinc-500 text-sm font-normal'>
							Update your photo an personal details here.
						</span>
					</div>
					<div className='flex items-center gap-3'>
						<Button type='button' variant='outline'>
							Cancel
						</Button>
						<Button type='submit' form='settings'>
							Save
						</Button>
					</div>
				</div>
				<form
					id='settings'
					className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200'>
					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3'>
						<label
							htmlFor='firstName'
							className='hidden lg:block text-sm font-medium text-zinc-700'>
							Name
						</label>
						<div className='flex flex-col lg:grid gap-6 lg:grid-cols-2'>
							<label
								htmlFor='firstName'
								className='lg:hidden text-sm font-medium text-zinc-700'>
								First Name
							</label>
							<Input.InputRoot>
								<Input.InputControl id='firstName' defaultValue='Guilherme' />
							</Input.InputRoot>
							<label
								htmlFor='lastName'
								className=' lg:hidden text-sm font-medium text-zinc-700'>
								Last Name
							</label>
							<Input.InputRoot>
								<Input.InputControl id='lastName' defaultValue='Ferreira' />
							</Input.InputRoot>
						</div>
					</div>

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
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

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
						<label htmlFor='photo' className='text-sm font-medium	text-zinc-700'>
							Your photo
							<span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
								This will be displayed on your profile.
							</span>
						</label>

						<FileInput.Root className='flex flex-col lg:flex-row lg:items-start gap-5'>
							<FileInput.ImagePreview />
							<FileInput.Trigger
								acceptedFormats='SVG, PNG, JPG or GIF'
								maxSize
							/>
							<FileInput.Control accept='image/*' />
						</FileInput.Root>
					</div>

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
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

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
						<label
							htmlFor='country'
							className='text-sm font-medium	text-zinc-700'>
							Country
						</label>

						<Select placeholder='Select a country...'>
							<SelectItem value='br' text='Brazil' />
							<SelectItem value='us' text='United States' />
						</Select>
					</div>

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
						<label
							htmlFor='timezone'
							className='text-sm font-medium	text-zinc-700'>
							Timezone
						</label>

						<Select placeholder='Select a timezone...'>
							<SelectItem value='utc-3' text='Brazillian Time (UTC-03:00)' />
							<SelectItem value='utc-8' text='Pacific Time (UTC-08:00)' />
						</Select>
					</div>

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
						<label htmlFor='photo' className='text-sm font-medium	text-zinc-700'>
							Bio
							<span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
								Write a short introduction.
							</span>
						</label>

						<div className='space-y-3'>
							<div className='flex flex-col lg:grid gap-3 lg:grid-cols-2'>
								<Select placeholder='' defaultValue='normal'>
									<SelectItem
										defaultChecked
										value='normal'
										text='Normal Text'
									/>
									<SelectItem value='md' text='Markdown' />
								</Select>
								<div className='flex items-center gap-1'>
									<Button variant='ghost' type='button'>
										<Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
									</Button>
									<Button variant='ghost' type='button'>
										<Italic className='h-4 w-4 text-zinc-500' strokeWidth={3} />
									</Button>
									<Button variant='ghost' type='button'>
										<Link className='h-4 w-4 text-zinc-500' strokeWidth={3} />
									</Button>
									<Button variant='ghost' type='button'>
										<List className='h-4 w-4 text-zinc-500' strokeWidth={3} />
									</Button>
									<Button variant='ghost' type='button'>
										<ListOrdered
											className='h-4 w-4 text-zinc-500'
											strokeWidth={3}
										/>
									</Button>
								</div>
							</div>
							<TextArea
								id='bio'
								placeholder='Write a short introduction...'
								defaultValue="I'm a Software Engineer based in São Paulo, Brazil. I'm specialized in front-end for web and mobile apps using React and React Native, but I also have a keen interest in back-end development and I can work my way around with Node and I have working experience with GraphQL and SQL databases."
							/>
						</div>
					</div>

					<div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
						<label htmlFor='photo' className='text-sm font-medium	text-zinc-700'>
							Portifolio projects
							<span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
								Share a few snippets of you work.
							</span>
						</label>

						<FileInput.Root>
							<FileInput.Trigger acceptedFormats='PDF, DOC or DOCX' />
							<FileInput.FileList />
							<FileInput.Control multiple accept='.pdf,.docx' />
						</FileInput.Root>
					</div>

					<div className='flex items-center justify-end gap-3 pt-5'>
						<Button type='button' variant='outline'>
							Cancel
						</Button>
						<Button type='submit' form='settings'>
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
