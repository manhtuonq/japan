export const formatPrice = (price: number, currency: 'VND' | 'YEN'): string => {
    const formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency === 'VND' ? 'VND' : 'JPY'
    });

    return formatter.format(price);
};
