export default function Home() {

  const onClickHandle = () => { 
    alert("I'm sorry, this button does nothing :D")
  }

	return (
		<div className='p-8 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 h-screen flex flex-col items-center text-center'>
			<div className='max-w-2xl'>
				<h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>
					Rapidly build modern websites without ever leaving your HTML.
				</h1>
				<p className='mt-6 dark:text-slate-400'>
					A utility-first CSS framework packed with classes like flex, pt-4,
					text-center and rotate-90 that can be composed to build any design,
					directly in your markup.
				</p>
				<button onClick={onClickHandle}className='border-green-500 text-green-500 border px-5 py-2 rounded-md font-medium mt-4 hover:bg-green-500 hover:text-slate-50 dark:hover:text-slate-900 active:bg-green-400'>
					Click me
				</button>
			</div>
		</div>
	);
}
