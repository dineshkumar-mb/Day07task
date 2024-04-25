



      var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function() {
  var countryData = JSON.parse(this.response);
  var lowPopulationCountries = countryData.filter(item => item.population < 200000);
  console.log(lowPopulationCountries);

  
     for(let i=0;i<lowPopulationCountries.length;i++){
     console.log (lowPopulationCountries[i].name.common,lowPopulationCountries[i].population);
     }
};


                  // here in this code we are using rest api and filter()method to display countries with population lesser than 200000