import { useCallback, useEffect, useState } from "react"

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState(false)
  const [tick, setTick] = useState(0)
  const reload = useCallback(() => setTick((t) => t + 1), [])

  useEffect(() => {
    let aktiv = true
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((json) => aktiv && setData(json))
      .catch(() => aktiv && setError(true))
    return () => {
      aktiv = false
    }
  }, [url, tick])

  return { data, error, reload }
}
