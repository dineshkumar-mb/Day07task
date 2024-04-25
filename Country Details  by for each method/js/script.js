

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function() {
    var countryData = JSON.parse(this.response);

    // Log the entire countryData object for debugging
    console.log(countryData);

    countryData.forEach(country => {
        
     for(let i=0;i<countryData.length;i++){
        console.log (countryData[i].name.common,countryData[i].flag, countryData[i].capital);
        }
        // console.log(`Name: ${country.name}`);
        // console.log(`Capital: ${country.capital}`);
        // console.log(`Flag: ${country.flag}`);
        // console.log('---'); // Separator for readability
    });
};
