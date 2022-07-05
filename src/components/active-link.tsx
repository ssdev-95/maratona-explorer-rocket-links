import { ReactNode } from "react"
import classNames from "classnames"

import { useTheme } from "../hooks/useTheme"

type ActiveLinkProps = {
  href: string
  title: string
  children?: ReactNode
}

export function ActiveLink({ children, href, title }: ActiveLinkProps) {
	const { isDarkModeEnabled } = useTheme()

  return (
    <a className="text-white group" href={href} target="_blank">
      <div className={classNames(
				"group-hover:bg-green-33 w-full p-4 rounded-md flex items-center justify-center gap-4 backdrop-opacity-10 backdrop-blur-sm transition-all duration-500",
				{
					"bg-green-glass group-hover:bg-green-33 group-hover:text-darkblue-900": isDarkModeEnabled,
					"bg-darkblue-glass group-hover:bg-darkblue-900 text-darkblue-900 group-hover:text-white": !isDarkModeEnabled
				}
			)}>
        {children}
        <span className="text-xl">{title}</span>
      </div>
    </a>
  )
}
