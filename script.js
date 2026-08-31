async function getWeather() {
   //Criar uma variavel para pegar o nome da cidade

    let cidade = document.getElementById('cidade').value



    //Contectar com a API de CLIMA
    let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    let tempCelsius = resposta.data.main.temp

    console.log(tempCelsius)
    
    //FRONT-END
    //JQUERY`
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(0)} °C`  


}

//Chamar a função
getWeather()