import { ReactNode } from "react"

type ActiveLinkProps = {
	href: string;
	title: string;
	children: ReactNode;
}

export function ActiveLink({
	children, href, title
}:ActiveLinkProps) {
	return (
		<a
			className="text-white group"
			href={href}
			target="_blank"
		>
			<div
				className="bg-green-glass group-hover:bg-green-33 group-hover:text-darkblue-900 w-full p-4 rounded-md flex items-center justify-center gap-4 backdrop-opacity-10 backdrop-blur-sm"
			>
				{children}
				<span className="text-xl">
					{title}
				</span>
			</div>
		</a>
	)
}
