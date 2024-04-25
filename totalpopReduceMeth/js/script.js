var request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
const population=countryData.reduce((acc,element)=>{
    return acc+element.population;
})
console.log(population);


for(let i=0;i<countryData.length;i++){
    console.log (countryData[i].name.common,countryData[i].population);
    };}



    