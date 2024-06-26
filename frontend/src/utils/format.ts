export function formatNumberByThousand(num: number): string {
  return num.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
