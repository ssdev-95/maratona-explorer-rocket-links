import classNames from "classnames"
import { useTheme } from "../hooks/useTheme"

export function Switcher() {
	const {
		isDarkModeEnabled,
		toggleDarkMode
	} = useTheme()

	return (
		<div className="absolute top-6 left-6">
			<label className={classNames(
				"relative block h-[21px] w-[45px] rounded-full transition-all duration-500",
				{
					"bg-green-33": isDarkModeEnabled,
					"bg-darkblue-900": !isDarkModeEnabled
				}
			)}>
				<div
					className={classNames(
						"h-4 w-4 rounded-full bg-white absolute top-[2px] transition-all duration-500",
						{
							"left-[3px]": isDarkModeEnabled,
							"left-[26px]": !isDarkModeEnabled
						}
					)}
				/>
				<input
					type="checkbox"
					className="absolute -left-[100vw] opacity-0"
					aria-label="hidden checkbox"
					checked={isDarkModeEnabled}
					onChange={toggleDarkMode}
				/>
				
			</label>
		</div>
	)
}
