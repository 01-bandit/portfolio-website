import { useState, useEffect, useRef, RefObject } from 'react'

/**
 * useMediaQuery - Detect screen size changes in real-time
 * @param query - Media query string (e.g., '(min-width: 768px)')
 * @returns Whether the media query matches
 * 
 * Example:
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is available (SSR compatibility)
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    
    // Set initial value
    setMatches(media.matches)

    // Create event listener
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    
    // Modern API
    if (media.addEventListener) {
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    } else {
      // Fallback for older browsers
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}

/**
 * useDebounce - Delay updating a value until after a specified delay
 * Useful for optimizing search inputs and API calls
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 500ms)
 * @returns Debounced value
 * 
 * Example:
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearch = useDebounce(searchTerm, 500)
 * 
 * useEffect(() => {
 *   // This will only run 500ms after user stops typing
 *   fetchSearchResults(debouncedSearch)
 * }, [debouncedSearch])
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Set up timeout to update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear timeout if value changes before delay completes
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * Async function type
 */
type AsyncFunction<T> = (...args: any[]) => Promise<T>

/**
 * Return type for useAsync hook
 */
interface UseAsyncReturn<T> {
  execute: (...params: any[]) => Promise<T>
  loading: boolean
  value: T | null
  error: string | null
}

/**
 * useAsync - Handle async operations with loading/error states
 * @param asyncFunction - Async function to execute
 * @param immediate - Whether to execute immediately (default: true)
 * @returns { execute, loading, value, error }
 * 
 * Example:
 * const { execute, loading, value, error } = useAsync(fetchProjects)
 * 
 * // In component
 * if (loading) return <Loading />
 * if (error) return <Error message={error} />
 * if (value) return <Projects data={value} />
 */
export function useAsync<T>(
  asyncFunction: AsyncFunction<T>,
  immediate = true
): UseAsyncReturn<T> {
  const [loading, setLoading] = useState(immediate)
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Function to execute async operation
  const execute = async (...params: any[]): Promise<T> => {
    setLoading(true)
    setError(null)
    setValue(null)

    try {
      const response = await asyncFunction(...params)
      setValue(response)
      return response
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Execute immediately if requested
  useEffect(() => {
    if (immediate) {
      execute()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { execute, loading, value, error }
}

/**
 * useOnClickOutside - Detect clicks outside a component
 * Useful for closing modals, dropdowns, tooltips, etc.
 * @param ref - Ref to the element
 * @param handler - Function to call when clicking outside
 * 
 * Example:
 * const dropdownRef = useRef()
 * useOnClickOutside(dropdownRef, () => setIsOpen(false))
 * 
 * <div ref={dropdownRef}>
 *   {isOpen && <DropdownMenu />}
 * </div>
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    // Attach listeners
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

/**
 * useKeyPress - Detect when a specific key is pressed
 * @param targetKey - Key to detect (e.g., 'Escape', 'Enter')
 * @param handler - Function to call when key is pressed
 * 
 * Example:
 * useKeyPress('Escape', () => setModalOpen(false))
 * useKeyPress('/', () => focusSearchInput())
 */
export function useKeyPress(
  targetKey: string,
  handler: (event: KeyboardEvent) => void
): void {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        handler(event)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [targetKey, handler])
}

/**
 * useToggle - Boolean state with toggle function
 * @param initialValue - Initial state (default: false)
 * @returns [value, toggle]
 * 
 * Example:
 * const [isOpen, toggleOpen] = useToggle(false)
 * <button onClick={toggleOpen}>Toggle Menu</button>
 */
export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)
  
  const toggle = () => setValue(v => !v)
  
  return [value, toggle]
}

/**
 * usePrevious - Get previous value of a state/prop
 * @param value - Current value
 * @returns Previous value
 * 
 * Example:
 * const [count, setCount] = useState(0)
 * const prevCount = usePrevious(count)
 * // prevCount will be the previous value of count
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<{ value: T; prev?: T }>({ value, prev: undefined })
  
  useEffect(() => {
    ref.current = { value, prev: ref.current.value }
  }, [value])
  
  return ref.current.prev
}

/**
 * useTimeout - Execute function after a delay
 * @param callback - Function to execute
 * @param delay - Delay in milliseconds (null to cancel)
 * 
 * Example:
 * useTimeout(() => {
 *   console.log('Executed after 2 seconds')
 * }, 2000)
 */
export function useTimeout(callback: () => void, delay: number | null): void {
  useEffect(() => {
    if (delay === null) return

    const timeout = setTimeout(callback, delay)
    return () => clearTimeout(timeout)
  }, [callback, delay])
}

/**
 * useInterval - Execute function repeatedly at intervals
 * @param callback - Function to execute
 * @param delay - Interval in milliseconds (null to pause)
 * 
 * Example:
 * const [count, setCount] = useState(0)
 * useInterval(() => {
 *   setCount(c => c + 1)
 * }, 1000)
 */
export function useInterval(callback: () => void, delay: number | null): void {
  useEffect(() => {
    if (delay === null) return

    const interval = setInterval(callback, delay)
    return () => clearInterval(interval)
  }, [callback, delay])
}
