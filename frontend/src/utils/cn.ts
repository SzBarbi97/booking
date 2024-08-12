export function cn(...classNames: (string | undefined | null)[]): string {
  return classNames.filter((className) => className).join(' ');
}
