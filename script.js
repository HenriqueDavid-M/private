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
        const currencies = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
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
    'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST',
    'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW',
    'ZWL'];

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
            const values = currencies.map(currency => rates[currency]);

            // Atualiza a anotação com o valor da moeda selecionada
            const annotation = document.getElementById('chartAnnotation');
            const value = rates[selectedCurrency];
            annotation.textContent = `1 USD = ${new Intl.NumberFormat('en-US', { style: 'currency', currency: selectedCurrency }).format(value)} ${selectedCurrency}`;

            // Configura os dados do gráfico
            const data = {
                labels: currencies,
                datasets: [{
                    label: `Valor do Dólar em ${selectedCurrency}`,
                    data: currencies.map(currency => (currency === selectedCurrency ? rates[currency] : null)),
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
                                    return `1 USD = ${context.raw} ${context.label}`;
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