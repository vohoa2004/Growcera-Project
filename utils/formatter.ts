export function formatDate(isoDate: string | number | Date) {
    const d = new Date(isoDate);
    return `${d.getUTCDate().toString().padStart(2, '0')}/${(d.getUTCMonth() + 1).toString().padStart(2, '0')}/${d.getUTCFullYear()}`; // dd/mm/yyyy
}
export function formatDateTime(isoDate: string | number | Date) {
    const d = new Date(isoDate);
    return `${d.getUTCDate().toString().padStart(2, '0')}/${(d.getUTCMonth() + 1).toString().padStart(2, '0')}/${d.getUTCFullYear()} - ${d.getUTCHours().toString().padStart(2, '0')}:${d.getUTCMinutes().toString().padStart(2, '0')}`;
}

export function formatMoney(amount: number | string) {
    const formatter = new Intl.NumberFormat('vi-VN');
    return formatter.format(Number(amount)) + ' VND';
}