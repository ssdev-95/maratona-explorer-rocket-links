import { useState } from "react"
import classNames from "classnames"

import { Switcher } from "./components/switcher"
import { Avatar } from "./components/avatar"
import { ActiveLink } from "./components/active-link"
import { useTheme } from "./hooks/useTheme"

import {
  GitFork,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react"

const avatar_url = "https://github.com/xSallus.png"
function App() {
	const { isDarkModeEnabled } = useTheme()

  return (
    <main className={classNames(
		  "min-h-screen pb-6 flex flex-col justify-between transition-all duration-500",
			{
				"bg-darkblue-900": isDarkModeEnabled,
				"bg-[#f0f2f5]": !isDarkModeEnabled
			}
		)}>
			<Switcher />
      <div className="w-[400px] max-w-[90vw] mx-auto py-20 flex flex-col gap-16 items-center">
        <Avatar source={avatar_url} />
        <div className="flex flex-col gap-2 items-center justify-center mt-[-2rem]">
          <p className={classNames(
						"text-3xl font-bold",
						{
							"text-white": isDarkModeEnabled,
							"text-gray-600 font-bold": !isDarkModeEnabled
						}
					)}>Salomao Vasconcelos</p>
          <p className={classNames(
						"font-bold",
						{
							"text-green-33": isDarkModeEnabled,
							"text-gray-400": !isDarkModeEnabled
						}
					)}>@xSallus</p>
        </div>
        <ul className="flex-none w-full flex flex-col gap-8">
          <li>
            <ActiveLink
              title="Instagram"
              href="https://instagram.com/xsallus.dev"
            >
              <InstagramLogo size={32} />
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              title="Linkedin"
              href="https://linkedin.com/in/salomao-vasconcelos"
            >
              <LinkedinLogo size={32} />
            </ActiveLink>
          </li>
          <li>
            <ActiveLink title="Github" href="https://github.com/xSallus">
              <GitFork size={32} />
            </ActiveLink>
          </li>
        </ul>
      </div>
      <footer className="flex justify-center">
        <span className={classNames({
					"text-white": isDarkModeEnabled,
					"text-darkblue-900": !isDarkModeEnabled
				})}>
          Made with 🧡 by&nbsp;
          <span className={classNames({
						"text-green-33": isDarkModeEnabled,
						"text-gray-600 font-bold": !isDarkModeEnabled
					})}>xSallus</span>
        </span>
      </footer>
    </main>
  )
}

export default App
