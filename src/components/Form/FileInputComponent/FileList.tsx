"use client";

import { useFileInput } from "./Root";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileItem } from "./FileItem";

export function FileList() {
	const { files } = useFileInput();
	const [parent] = useAutoAnimate();

	return (
		<div ref={parent} className='mt-4 space-y-3'>
			{files.map((file, index) => {
				const state =
					index === 0 ? "progress" : index === 1 ? "complete" : "error";
				return (
					<FileItem
						key={file.name}
						name={file.name}
						size={file.size}
						state={state}
					/>
				);
			})}
		</div>
	);
}
