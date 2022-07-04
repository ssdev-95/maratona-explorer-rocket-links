import { useState, useEffect } from "react"

type AvatarProps = {
	source: string;
}

export function Avatar({ source }:AvatarProps) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let timeout: Timeout;

		if(loading) {
			timeout = setTimeout(
				() => setLoading(false),
				3000
			)
		}

		return () => clearTimeout(timeout);
	}, [])

	return (
		<div
			className="w-40 h-40 rounded-full overflow-hidden border-2 border-green-33 bg-green-33"
		>{ loading ? (
			<div
				className="bg-grad h-[45%] w-[45%] animate-spin mx-auto mt-[25%] rounded-full relative after:content-[''] after:h-[90%] after:w-[90%] after:bg-green-33 after:absolute after:top-[4px] after:left-[4px] after:rounded-full"
			/>
		) : (
			<img
				src={source}
				alt=""
			/>
		)}</div>
	)
}
