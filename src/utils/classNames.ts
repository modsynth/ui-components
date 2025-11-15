/**
 * Utility function to merge class names
 *
 * @example
 * ```ts
 * cn('px-4', 'py-2', isActive && 'bg-blue-500')
 * // => 'px-4 py-2 bg-blue-500'
 * ```
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Type-safe variant selector
 */
export function variant<T extends Record<string, string>>(
  variants: T,
  selected: keyof T
): string {
  return variants[selected];
}
