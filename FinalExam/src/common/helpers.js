export function convertToDate(date) {
    const d = new Date(date);
    const dtfUS = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit'});
    
    // return dtfUS.format(d);
    return d;
}

console.log(convertToDate('7/1/2024') > convertToDate('6/26/2024'));

