import { useState, useEffect } from 'react'

interface RequestState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useRequest<T>(
  fn: () => Promise<{ data: T }>,
  deps: unknown[] = [],
) {
  const [state, setState] = useState<RequestState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    setState((prev) => ({ ...prev, loading: true, error: null }))

    fn()
      .then((res) => {
        if (!cancelled)
          setState({ data: res.data, loading: false, error: null })
      })
      .catch((err) => {
        if (!cancelled)
          setState({ data: null, loading: false, error: err.message })
      })

    return () => {
      cancelled = true
    }
  }, deps)

  return state
}
