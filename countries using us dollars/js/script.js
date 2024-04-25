
const xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all', true);
xhr.send();

xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    const countriesWithUSD = data.filter((country) => country.currencies?.USD);
    
    if (countriesWithUSD.length > 0) {
        console.log('Countries using US Dollar as currency:');
        countriesWithUSD.forEach((country) => {
            console.log(country.name.common);
        });
    } else {
        console.log('No countries found using US Dollar as currency.');
    }
};
