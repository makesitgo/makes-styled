export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

export function createMediaQuery(minWidth: string | number) {
  return `@media screen and (min-width: ${minWidth}${typeof minWidth === 'string' ? '' : 'px'})`;
}
