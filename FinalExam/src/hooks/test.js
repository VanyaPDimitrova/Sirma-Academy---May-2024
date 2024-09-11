const d = new Date('7.2.2024');

const dtfUS = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit'}); 
    console.log(dtfUS.format(d)); 
