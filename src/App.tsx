import { Avatar } from "./components/avatar"
import { ActiveLink } from "./components/active-link"

import {
  GitFork,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react"

function App() {
  const avatar_url = "https://github.com/xSallus.png"
  return (
    <main className="bg-darkblue-900 min-h-screen pb-6 flex flex-col justify-between">
      <div className="w-[400px] max-w-[90vw] mx-auto py-20 flex flex-col gap-16 items-center">
        <Avatar source={avatar_url} />
        <div className="flex flex-col gap-4 items-center justify-center mt-[-2rem]">
          <p className="text-white text-3xl font-bold">Salomao Vasconcelos</p>
          <p className="text-green-33">@xSallus</p>
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
        <span className="text-white">
          Made with 🧡 by&nbsp;
          <span className="text-green-33">xSallus</span>
        </span>
      </footer>
    </main>
  )
}

export default App
