import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react"

type ContextData = {
  isDarkModeEnabled: boolean
  toggleDarkMode: () => void
}

type ProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext({} as ContextData)

const themeKey = "@rocket-link:theme"
export function ThemeProvider({ children }: ProviderProps) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true)

  function toggleDarkMode() {
    const theme = !isDarkModeEnabled
    setIsDarkModeEnabled(theme)
    if (theme) {
      localStorage.setItem(themeKey, "dark")
    } else {
      localStorage.setItem(themeKey, "light")
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem(themeKey)

    if (stored === "light") {
      setIsDarkModeEnabled(false)
    } else {
      setIsDarkModeEnabled(true)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        isDarkModeEnabled,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
