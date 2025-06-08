export default function formatNumber(num, options = {}) {
    if (num === null || num === undefined || isNaN(num)) return num;

    const {
        minFractionDigits = 0,
        maxFractionDigits = 1,
    } = options;

    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: minFractionDigits,
        maximumFractionDigits: maxFractionDigits,
    }).format(num);
}