



      var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function() {
  var countryData = JSON.parse(this.response);
  const asiaCountries = countryData.filter((country) => country.region === 'Asia');
  console.log(asiaCountries.length);



  
     for(let i=0;i<asiaCountries.length;i++){
     console.log (asiaCountries[i].name.common,asiaCountries[i].region);
     }
};
