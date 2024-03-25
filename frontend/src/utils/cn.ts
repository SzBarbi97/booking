export function cn(...classNames: string[]): string {
  return classNames.filter((className) => className).join(' ');
}