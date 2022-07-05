import { useState, useEffect } from "react"
import classNames from "classnames"

import { useTheme } from "../hooks/useTheme"

type AvatarProps = {
  source: string
}

export function Avatar({ source }: AvatarProps) {
  const { isDarkModeEnabled } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timeout: Timeout

    if (loading) {
      timeout = setTimeout(() => setLoading(false), 3000)
    }

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={classNames("w-40 h-40 rounded-full overflow-hidden border-2", {
        "border-green-33 bg-green-33": isDarkModeEnabled,
        "border-darkblue-900 bg-darkblue-900": !isDarkModeEnabled,
      })}
    >
      {loading ? (
        <div
          className={classNames(
            "bg-grad h-[45%] w-[45%] animate-spin mx-auto mt-[25%] rounded-full relative after:content-[''] after:h-[90%] after:w-[90%] after:absolute after:top-[4px] after:left-[4px] after:rounded-full",
            {
              "after:bg-green-33": isDarkModeEnabled,
              "after:bg-darkblue-900": !isDarkModeEnabled,
            }
          )}
        />
      ) : (
        <img src={source} alt="" />
      )}
    </div>
  )
}
