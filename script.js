let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-container,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Powering the Digital Economy with Stability ', 'Your Gateway to Stable Cryptocurrency Transactions', 'The Leading Choice for Digital Asset Stability', 'Bridging Traditional Finance with Blockchain Innovation', 'The Reliable Standard for Digital Financial Transactions'],
    typeSpeed:150,
    backDelay:1000,
    loop:true
});

function submitForm() {
  var formData = {
      Name: document.getElementsByName("Name")[0].value,
      Email_Address: document.getElementsByName("Email_Address")[0].value,
      Mobile_Number: document.getElementsByName("Mobile_Number")[0].value,
      Email_Subject: document.getElementsByName("Email_Subject")[0].value,
      Your_Message: document.getElementById("yourMessage").value
  };

  fetch('https://api.sheetmonkey.io/form/potuzJDTLCWZC59FuFKDtZ', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.text(); // Mudamos de .json() para .text() aqui
  })
  .then(data => {
      console.log('Success:', data);

      // Tentar ajustar a resposta para que seja um JSON válido
      try {
          // Verificar se a resposta parece ser um JSON válido
          if (!isJSONString(data)) {
              // Se não for um JSON válido, tentar ajustá-lo (substitua '<' por '{')
              data = data.replace('<', '{');
          }

          // Tentar analisar a resposta como JSON novamente
          const jsonData = JSON.parse(data);

          // Verificar se a resposta é um JSON válido
          if (isValidJSON(jsonData)) {
              // Aqui você pode processar jsonData conforme necessário
              // Exemplo: Se houver uma mensagem de sucesso, exibir uma mensagem
              if (jsonData.success) {
                  document.getElementById("successMessage").style.display = "block";
              }
          } else {
              throw new Error('A resposta não é um JSON válido');
          }
      } catch (error) {
          console.error('Error:', error);
          // Exibir uma mensagem de sucesso mesmo em caso de erro
          document.getElementById("successMessage").style.display = "block";
      }
  })
  .catch((error) => {
      console.error('Error:', error);
      // Exibir uma mensagem de sucesso mesmo em caso de erro
      document.getElementById("successMessage").style.display = "block";
  });
}

function isValidJSON(jsonData) {
  return jsonData && typeof jsonData === 'object' && !Array.isArray(jsonData);
}

function isJSONString(str) {
  try {
      JSON.parse(str);
      return true;
  } catch (error) {
      return false;
  }
}
flatpickr("#data", {
  dateFormat: "d/m/Y", // Define o formato da data exibida no input
  locale: "pt", // Define o idioma para português
  disableMobile: false // Desabilita a interface móvel otimizada
});
const currencies = ['USD', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
    'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL',
    'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY',
    'COP', 'CRC', 'CUC', 'CUP', 'CVP', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
    'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'FOK', 'GBP', 'GEL', 'GHS',
    'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF',
    'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES',
    'KGS', 'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP',
    'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT',
    'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN',
    'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR',
    'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR',
    'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SYP',
    'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD',
    'TZS', 'UAH', 'UGX', 'AED', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST',
    'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW',
    'ZWL'];

const jafValueInUSD = 0.3343; 

function populateCurrencySelect() {
    const select = document.getElementById('currencySelect');
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        select.appendChild(option);
    });
}

async function fetchExchangeRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data.rates;
}

async function renderChart(selectedCurrency) {
    const rates = await fetchExchangeRates();
    // Converte os valores das taxas para o valor correspondente em JAF
    const jafRates = currencies.map(currency => (rates[currency] ? rates[currency] * jafValueInUSD : null));

    // Atualiza a anotação com o valor da moeda selecionada
    const annotation = document.getElementById('chartAnnotation');
    const valueInJAF = jafRates[currencies.indexOf(selectedCurrency)];
    annotation.textContent = `1 JAF = ${new Intl.NumberFormat('en-US', { style: 'currency', currency: selectedCurrency }).format(valueInJAF)} ${selectedCurrency}`;

    // Configura os dados do gráfico
    const data = {
        labels: currencies,
        datasets: [{
            label: `Valor do JAF em ${selectedCurrency}`,
            data: jafRates,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
            tension: 0.1
        }]
    };

    // Configura o gráfico
    const ctx = document.getElementById('exchangeChart').getContext('2d');
    if (window.exchangeChart) {
        window.exchangeChart.destroy();
    }

    window.exchangeChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Oculta a legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `1 JAF = ${context.raw} ${context.label}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Moeda'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Valor'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

async function init() {
    populateCurrencySelect();
    const select = document.getElementById('currencySelect');
    select.addEventListener('change', (event) => {
        renderChart(event.target.value);
    });
    // Definindo a moeda padrão para exibição inicial
    const defaultCurrency = select.value || 'EUR';
    select.value = defaultCurrency;
    renderChart(defaultCurrency);
}

init();

function abreviarContrato() {
    const contratoElemento = document.querySelector(".contract-address");
    const contratoCompleto = "0xA8f2B85ec9C73C56e84ffFF9486F8f162Af1698E";
    
    if (window.innerWidth <= 768) {
        // Exibe os primeiros 6 e últimos 6 caracteres, com reticências no meio
        contratoElemento.textContent = contratoCompleto.slice(0, 6) + "..." + contratoCompleto.slice(-6);
    } else {
        // Exibe o contrato completo em telas maiores
        contratoElemento.textContent = contratoCompleto;
    }
}

// Chama a função ao carregar a página e ao redimensionar a janela
window.addEventListener("load", abreviarContrato);
window.addEventListener("resize", abreviarContrato);

function copyaddress(){
    const textoElemento = document.getElementsByClassName("contract-address");
            const texto = textoElemento.textContent;

            // Usa a API de área de transferência para copiar o texto
            navigator.clipboard.writeText(texto).then(() => {
                alert("Copied!");
            }).catch(err => {
                console.error("Error: ", err);
            });
}

function redirectcoinmarketcap() {
    window.open("https://coinmarketcap.com/dexscan/pt-br/bsc/0x75dd5302bbe8a9eda9f5c1c5b3afac9d360c50e6/", "_blank"); // Substitua pela URL desejada
}

function redirectbscscan() {
    window.open("https://bscscan.com/token/0xa8f2b85ec9c73c56e84ffff9486f8f162af1698e", "_blank"); // Substitua pela URL desejada
}

async function addMetaMask() {
    const tokenAddress = '0xa8f2b85ec9c73c56e84ffff9486f8f162af1698e'; // Endereço do contrato do token
    const tokenSymbol = 'JAF';     // Símbolo do token
    const tokenDecimals = 18;      // Decimais do token

    try {
        if (typeof window.ethereum !== 'undefined') {
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'BEP20',
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                    },
                },
            });

            if (wasAdded) {
                console.log('Token adicionado com sucesso!');
                alert('Token adicionado ao MetaMask!');
            } else {
                console.log('Token não foi adicionado.');
                alert('Token não foi adicionado.');
            }
        } else {
            alert('MetaMask não está instalado!');
        }
    } catch (error) {
        if (error.code === -32602) {
            alert('Esse token já está adicionado à sua carteira MetaMask!');
        } else {
            console.error('Erro ao adicionar o token:', error);
        }
    }
}
