const apiKey = '33c601ea5297261d5a593f21dca3f00f';
const domain = 'https://api.openweathermap.org/data/2.5/weather?';
async function buscarCEP(){
    let dados = document.getElementById('dado').value.replace("-", "");
    const cep = await fetch(`https://viacep.com.br/ws/${dados}/json/`).then((Response) => Response.json());
    buscarClima(cep);
}
async function buscarClima(cep) {
    let city = cep.localidade;
    let clima = await fetch(`${domain}q=${city}&appid=${apiKey}&units=metric&lang=pt_br`).then((Response) => Response.json());
    mostarResultado(city, clima);
}
function mostarResultado(city, clima) {
    let temperatura = clima.main.temp;
    let icon = clima.weather[0].icon;
    let descricao = clima.weather[0].description;
    let umidade = clima.main.humidity;
    document.getElementById('tempo').textContent = '☀️' + 'Tempo em ' + city + '☀️';
    document.getElementById('temperatura').textContent = temperatura + 'ºC';
    document.getElementById('descricao').textContent = descricao.charAt(0).toUpperCase() + descricao.slice(1);
    document.getElementById('umidade').textContent = 'Umidade: ' + umidade + '%';
}