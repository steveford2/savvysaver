/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Data Structure

  // Categories
  var expenseCategories = [
    "Entertainment",
    "Groceries",
    "Transport",
    "Fitness/ Sport",
    "Dining Out",
    "Travel",
    "Shopping",
    "Subscriptions",
    "Bills",
    "Rent/ Mortgage",
    "General",
    "Not Coded",
    "Savings"
  ];

  var incomeCategories = [
    "Salary/ Wage",
    "Other Income"
  ];

  var spendTypes = [
    "Living Costs",
    "Luxury Spend",
    "Annual Provisions",
    "Savings"
  ]

  var categoryMatcher = {
    "Home": "Living Costs",
    "Entertainment": "Luxury Spend",
    "Groceries": "Living Costs",
    "Transport": "Living Costs",
    "Fitness/ Sport": "Luxury Spend",
    "Dining Out": "Luxury Spend",
    "Travel": "Luxury Spend",
    "Shopping": "Luxury Spend",
    "Subscriptions": "Luxury Spend",
    "Bills": "Living Costs",
    "Rent/ Mortgage": "Living Costs",
    "General": "Living Costs",
    "Not Coded": "Not Coded",
    "Salary/ Wage": "Income",
    "Other Income": "Income",
    "Savings": "Savings"
  }

  // Goals
  var categoryGoals = {
    "Entertainment": 750,
    "Groceries": 650,
    "Transport": 400,
    "Fitness/ Sport": 120,
    "Dining Out": 350,
    "Travel": 200,
    "Shopping": 400,
    "Subscriptions": 100,
    "Bills": 600,
    "Rent/ Mortgage": 1050,
    "General": 2500,
    "Savings": 500
  }

  // Charts
  var chartTypeSpendElement = document.getElementById('chartTypeSpend')
  // eslint-disable-next-line no-unused-vars
  var chartTypeSpend = new Chart(chartTypeSpendElement, {
    type: 'doughnut',
    data: {
      labels: [
        'Living Costs',
        'Luxury Spend',
        'Annual Provisions',
        'Savings',
        'Difference'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          0,
        ],
        backgroundColor: ['#ff567a','#ff9345','#ffc559','#30b9b7','#ffffff'],
        },
        {
        data: [
          16834,
          7869,
          23653,
          12645,
          18169
        ],
        backgroundColor: ['#ff567a','#ff9345','#ffc559','#30b9b7','#ffffff'],
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
  });


  var chartCategorySpendElement = document.getElementById('chartTypeCategories')

  // eslint-disable-next-line no-unused-vars
  var chartCategorySpend = new Chart(chartCategorySpendElement, {
    type: 'doughnut',
    data: {
      labels: [
        'Living Costs',
        'Luxury Spend',
        'Annual Provisions',
        'Savings',
        'Difference'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          0,
        ],
        backgroundColor: ['#ff567a','#ff9345','#ffc559','#30b9b7','#ffffff'],
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
  });

  var mySpendChartCategorySpendElement = document.getElementById('mySpendChartTypeCategories')

  // eslint-disable-next-line no-unused-vars
  var mySpendChartCategorySpend = new Chart(mySpendChartCategorySpendElement, {
    type: 'doughnut',
    data: {
      labels: [
        'Living Costs',
        'Luxury Spend',
        'Annual Provisions',
        'Savings',
        'Difference'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          0,
        ],
        backgroundColor: ['#ff567a','#ff9345','#ffc559','#30b9b7','#ffffff'],
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  });

  var rawTransactions = [
    {"Date": "44165","Account":"Credit Card","Details":"Revive Wyndham Street  Auckland      Nz ","Amount":"-9","Category":"Dining Out"},
    {"Date": "44164","Account":"Credit Card","Details":"Countdown              Auckland      Nzl ","Amount":"-17.55","Category":"Groceries"},
    {"Date": "44164","Account":"Credit Card","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-85.52","Category":"Groceries"},
    {"Date": "44164","Account":"Credit Card","Details":"Movember Foundation Ne Auckland      Nz ","Amount":"-20.26","Category":"General"},
    {"Date": "44163","Account":"Credit Card","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-32.15","Category":"General"},
    {"Date": "44163","Account":"Credit Card","Details":"Harvey Norman          Auckland      Nzl ","Amount":"-149","Category":"General"},
    {"Date": "44163","Account":"Credit Card","Details":"Hollywood Bakery       Auckland      Nz ","Amount":"-10.9","Category":"Dining Out"},
    {"Date": "44163","Account":"Credit Card","Details":"Burger Fuel Parnell    Auckland      Nz ","Amount":"-34.4","Category":"Dining Out"},
    {"Date": "44162","Account":"Credit Card","Details":"Rebel Panmure          Panmure       Nz ","Amount":"-75.58","Category":"General"},
    {"Date": "44162","Account":"Credit Card","Details":"Bp Connect Waterview   Auckland      Nzl ","Amount":"-77.72","Category":"Transport"},
    {"Date": "44162","Account":"Credit Card","Details":"Green & Grocery Worl   Auckland      Nzl ","Amount":"-5.3","Category":"Groceries"},
    {"Date": "44162","Account":"Credit Card","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44161","Account":"Credit Card","Details":"Uber Trip Help.Uber.Co Vorden        Nz ","Amount":"-7.15","Category":"Entertainment"},
    {"Date": "44161","Account":"Credit Card","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-4.01","Category":"Entertainment"},
    {"Date": "44161","Account":"Credit Card","Details":"Netflix New Zealand    -             Nz ","Amount":"-16.99","Category":"Subscriptions"},
    {"Date": "44161","Account":"Credit Card","Details":"Bp Connect Greenlane E Auckland      Nzl ","Amount":"-7.6","Category":"Transport"},
    {"Date": "44161","Account":"Credit Card","Details":"Victoria Avenue Supere Auckland      Nz ","Amount":"-6.9","Category":"Groceries"},
    {"Date": "44160","Account":"Credit Card","Details":"Sharesies Limited      Wellington    Nz ","Amount":"-3","Category":"Subscriptions"},
    {"Date": "44159","Account":"Credit Card","Details":"Victoria Avenue Supere Auckland      Nz ","Amount":"-7.2","Category":"Groceries"},
    {"Date": "44158","Account":"Credit Card","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-7.98","Category":"Groceries"},
    {"Date": "44158","Account":"Credit Card","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-6.49","Category":"Groceries"},
    {"Date": "44157","Account":"Credit Card","Details":"Bp Connect Bombay      Auckland      Nzl ","Amount":"-8.2","Category":"Transport"},
    {"Date": "44157","Account":"Credit Card","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-118.19","Category":"Groceries"},
    {"Date": "44157","Account":"Credit Card","Details":"Maramarua Golf Club    Pokeno        Nz ","Amount":"-25.71","Category":"Fitness/ Sport"},
    {"Date": "44156","Account":"Credit Card","Details":"Bamboo Tiger           Auckland      Nzl ","Amount":"-19","Category":"Entertainment"},
    {"Date": "44156","Account":"Credit Card","Details":"Farmers 1140           Newmarket     Nzl ","Amount":"-29.99","Category":"General"},
    {"Date": "44156","Account":"Credit Card","Details":"Countdown              Auckland      Nzl ","Amount":"-22","Category":"Groceries"},
    {"Date": "44156","Account":"Credit Card","Details":"New World Remuera      Remuera       Nz ","Amount":"-18.55","Category":"Groceries"},
    {"Date": "44156","Account":"Credit Card","Details":"New World Remuera      Remuera       Nz ","Amount":"-33.59","Category":"Groceries"},
    {"Date": "44156","Account":"Credit Card","Details":"Westfield Shopping Ctr Auckland      Nz ","Amount":"-3","Category":"General"},
    {"Date": "44155","Account":"Credit Card","Details":"Bamboo Tiger           Auckland      Nzl ","Amount":"-9.5","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"Bamboo Tiger           Auckland      Nzl ","Amount":"-28.5","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"Bamboo Tiger           Auckland      Nzl ","Amount":"-9.5","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"Joy Bong Thai          Auckland      Nzl ","Amount":"-49.8","Category":"Dining Out"},
    {"Date": "44155","Account":"Credit Card","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-26.98","Category":"Groceries"},
    {"Date": "44155","Account":"Credit Card","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-4.56","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"The Chamberlain        Auckland      Nz ","Amount":"-25.5","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"The Yakitori House     Auckland      Nzl ","Amount":"-10","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"Anthology Lounge       Auckland      Nzl ","Amount":"-10","Category":"Entertainment"},
    {"Date": "44155","Account":"Credit Card","Details":"Air Nz One             Auckland      Nz ","Amount":"-213","Category":"General"},
    {"Date": "44155","Account":"Credit Card","Details":"Eventfinda Ltd         093652342     Nz ","Amount":"-22.5","Category":"Entertainment"},
    {"Date": "44154","Account":"Credit Card","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-102.15","Category":"General"},
    {"Date": "44153","Account":"Credit Card","Details":"Morningside Tavern     Auckland      Nz ","Amount":"-8","Category":"Entertainment"},
    {"Date": "44153","Account":"Credit Card","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-16.49","Category":"Groceries"},
    {"Date": "44153","Account":"Credit Card","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44153","Account":"Credit Card","Details":"Eventfinda Ltd         093652342     Nz ","Amount":"-22.5","Category":"Entertainment"},
    {"Date": "44153","Account":"Credit Card","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-1.69","Category":"Groceries"},
    {"Date": "44152","Account":"Credit Card","Details":"Morningside Tavern     Auckland      Nz ","Amount":"-8","Category":"Entertainment"},
    {"Date": "44152","Account":"Credit Card","Details":"Credit Card Repayment Insurance ","Amount":"-18.03","Category":"General"},
    {"Date": "44151","Account":"Credit Card","Details":"Pink Neon Sign         Auckland      Nzl ","Amount":"-5.2","Category":"General"},
    {"Date": "44151","Account":"Credit Card","Details":"Revive Wyndham Street  Auckland      Nz ","Amount":"-9","Category":"Dining Out"},
    {"Date": "44150","Account":"Credit Card","Details":"Wonderhorse            Hamilton      Nzl ","Amount":"-42.5","Category":"Entertainment"},
    {"Date": "44150","Account":"Credit Card","Details":"The Bank               Hamilton      Nzl ","Amount":"-17","Category":"Entertainment"},
    {"Date": "44150","Account":"Credit Card","Details":"The Bank               Hamilton      Nzl ","Amount":"-28","Category":"Entertainment"},
    {"Date": "44150","Account":"Credit Card","Details":"Bp 2Go Horotiu         Horotiu       Nzl ","Amount":"-70.07","Category":"Transport"},
    {"Date": "44150","Account":"Credit Card","Details":"The Sugar Bowl         Hamilton      Nz ","Amount":"-14","Category":"Dining Out"},
    {"Date": "44149","Account":"Credit Card","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-7","Category":"Entertainment"},
    {"Date": "44149","Account":"Credit Card","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-7.7","Category":"Entertainment"},
    {"Date": "44149","Account":"Credit Card","Details":"Riverside Golf Club    Hamilton      Nz ","Amount":"-6.2","Category":"Fitness/ Sport"},
    {"Date": "44149","Account":"Credit Card","Details":"Riverside Casino       Hamilton      Nz ","Amount":"-25","Category":"Entertainment"},
    {"Date": "44149","Account":"Credit Card","Details":"Riverside Casino       Hamilton      Nz ","Amount":"-12.5","Category":"Entertainment"},
    {"Date": "44149","Account":"Credit Card","Details":"Thai Classic Cuisine   Hamilton      Nz ","Amount":"-82.5","Category":"Dining Out"},
    {"Date": "44148","Account":"Credit Card","Details":"Hell Pizza Remuera     Auckland      Nzl ","Amount":"-21","Category":"Dining Out"},
    {"Date": "44148","Account":"Credit Card","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"-5.05","Category":"Entertainment"},
    {"Date": "44148","Account":"Credit Card","Details":"New World Remuera      Remuera       Nz ","Amount":"-26.57","Category":"Groceries"},
    {"Date": "44148","Account":"Credit Card","Details":"Tank Sylvia Park       Auckland      Nz ","Amount":"-8.9","Category":"General"},
    {"Date": "44148","Account":"Credit Card","Details":"Shore Road Superette   Auckland      Nz ","Amount":"-11","Category":"General"},
    {"Date": "44147","Account":"Credit Card","Details":"Stolen Summer          Auckland      Nz ","Amount":"-8.5","Category":"General"},
    {"Date": "44147","Account":"Credit Card","Details":"Stolen Summer          Auckland      Nz ","Amount":"-4.5","Category":"General"},
    {"Date": "44147","Account":"Credit Card","Details":"Krispy Kreme           Auckland      Nz ","Amount":"-3","Category":"General"},
    {"Date": "44146","Account":"Credit Card","Details":"Stolen Summer          Auckland      Nz ","Amount":"-10","Category":"General"},
    {"Date": "44146","Account":"Credit Card","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-4.19","Category":"Groceries"},
    {"Date": "44146","Account":"Credit Card","Details":"Morningside Tavern     Auckland      Nz ","Amount":"-8","Category":"Entertainment"},
    {"Date": "44145","Account":"Credit Card","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44145","Account":"Credit Card","Details":"Hellofresh*238242912   Auckland      Nz ","Amount":"-113.91","Category":"Groceries"},
    {"Date": "44143","Account":"Credit Card","Details":"Golf Warehouse         Ellerslie     Nz ","Amount":"-32","Category":"Fitness/ Sport"},
    {"Date": "44143","Account":"Credit Card","Details":"Barbershop Co Ellersli Ellerslie     Nz ","Amount":"-35","Category":"General"},
    {"Date": "44143","Account":"Credit Card","Details":"Golf Warehouse         Ellerslie     Nz ","Amount":"-2.5","Category":"Fitness/ Sport"},
    {"Date": "44142","Account":"Credit Card","Details":"Archie Brothers        Auckland      Nzl ","Amount":"-50","Category":"Entertainment"},
    {"Date": "44142","Account":"Credit Card","Details":"Deep Creek Brews       Auckland      Nz ","Amount":"-15.8","Category":"Entertainment"},
    {"Date": "44142","Account":"Credit Card","Details":"New York Grill         Auckland      Nz ","Amount":"-143","Category":"Dining Out"},
    {"Date": "44142","Account":"Credit Card","Details":"Something And Social   Auckland      Nz ","Amount":"-31","Category":"Entertainment"},
    {"Date": "44142","Account":"Credit Card","Details":"Something And Social   Auckland      Nz ","Amount":"-14.42","Category":"Entertainment"},
    {"Date": "44142","Account":"Credit Card","Details":"Sardine                Auckland      Nz ","Amount":"-36","Category":"Entertainment"},
    {"Date": "44142","Account":"Credit Card","Details":"Apple.Com/Bill         Sydney        Au ","Amount":"-1.69","Category":"Subscriptions"},
    {"Date": "44142","Account":"Credit Card","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-7.79","Category":"Entertainment"},
    {"Date": "44141","Account":"Credit Card","Details":"The Chamberlain        Auckland      Nz ","Amount":"-6.63","Category":"Entertainment"},
    {"Date": "44140","Account":"Credit Card","Details":"Sumthin Dumplin        Auckland      Nz ","Amount":"-12.5","Category":"Groceries"},
    {"Date": "44139","Account":"Credit Card","Details":"Revive Wyndham Street  Auckland      Nz ","Amount":"-15","Category":"Dining Out"},
    {"Date": "44139","Account":"Credit Card","Details":"Morningside Tavern     Auckland      Nz ","Amount":"-8","Category":"Entertainment"},
    {"Date": "44138","Account":"Credit Card","Details":"Hellofresh*247237612   Auckland      Nz ","Amount":"-113.91","Category":"Groceries"},
    {"Date": "44138","Account":"Credit Card","Details":"Spotify                Stockholm     Se ","Amount":"-14.99","Category":"Subscriptions"},
    {"Date": "44137","Account":"Credit Card","Details":"Stolen Summer          Auckland      Nz ","Amount":"-12.5","Category":"General"},
    {"Date": "44137","Account":"Credit Card","Details":"Altezano Queen Street  Auckland City Nz ","Amount":"-11","Category":"General"},
    {"Date": "44137","Account":"Credit Card","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-102.15","Category":"General"},
    {"Date": "44137","Account":"Credit Card","Details":"New World Remuera      Remuera       Nz ","Amount":"-23.26","Category":"Groceries"},
    {"Date": "44136","Account":"Credit Card","Details":"Caltex Oteha Valley Rd Albany        Nz ","Amount":"-4.6","Category":"Transport"},
    {"Date": "44136","Account":"Credit Card","Details":"Burger Fuel Parnell    Auckland      Nz ","Amount":"-27.8","Category":"Dining Out"},
    {"Date": "44136","Account":"Credit Card","Details":"Kfc Greenlane - 604    Auckland      Nz ","Amount":"-32.17","Category":"Dining Out"},
    {"Date": "44165.5533796296","Account":"Cash Account","Details":"Renay Yang","Amount":"-20","Category":"General"},
    {"Date": "44165.3175347222","Account":"Cash Account","Details":"New Zealand R","Amount":"153","Category":"General"},
    {"Date": "44163.8107060185","Account":"Cash Account","Details":"Miss S S O'Dr","Amount":"13.5","Category":"General"},
    {"Date": "44164.4924652778","Account":"Cash Account","Details":"Miss S S O'Dr","Amount":"7","Category":"General"},
    {"Date": "44162.7133680556","Account":"Cash Account","Details":"Liam Broughton","Amount":"-28","Category":"General"},
    {"Date": "44162.4111574074","Account":"Cash Account","Details":"Marshall, C","Amount":"8.5","Category":"Subscriptions"},
    {"Date": "44157.6228125","Account":"Cash Account","Details":"Liam Broughton","Amount":"-108","Category":"General"},
    {"Date": "44157.4015625","Account":"Cash Account","Details":"Miss S S O'Dr","Amount":"60","Category":"General"},
    {"Date": "44155.48375","Account":"Cash Account","Details":"Auck Donations","Amount":"-20","Category":"General"},
    {"Date": "44155.6653703704","Account":"Cash Account","Details":"Remuera Flat","Amount":"-1050","Category":"Rent/ Mortgage"},
    {"Date": "44154.4120138889","Account":"Cash Account","Details":"Deloitte","Amount":"3759.64","Category":"Salary/ Wage"},
    {"Date": "44151.1741782407","Account":"Cash Account","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44149.9516782407","Account":"Cash Account","Details":"Riverside Casino","Amount":"-100","Category":"Entertainment"},
    {"Date": "44151.401412037","Account":"Cash Account","Details":"Group Shared Service","Amount":"-92.08","Category":"Transport"},
    {"Date": "44151.4148958333","Account":"Cash Account","Details":"Cityfitness Group","Amount":"-51.96","Category":"Fitness/ Sport"},
    {"Date": "44150.1530671296","Account":"Cash Account","Details":"Town And Country Foo","Amount":"-19.8","Category":"Dining Out"},
    {"Date": "44150.6821990741","Account":"Cash Account","Details":"Tom Thomson","Amount":"-10","Category":"Entertainment"},
    {"Date": "44147.5949768519","Account":"Cash Account","Details":"Tab New Zealand","Amount":"-100","Category":"General"},
    {"Date": "44147.9606944444","Account":"Cash Account","Details":"Savannah O'Driscoll","Amount":"-81","Category":"General"},
    {"Date": "44147.6292361111","Account":"Cash Account","Details":"New Zealand R","Amount":"100","Category":"General"},
    {"Date": "44142.8549537037","Account":"Cash Account","Details":"O'Driscoll,Sa","Amount":"71.5","Category":"General"},
    {"Date": "44144.77625","Account":"Cash Account","Details":"Miss L F Maclaurin A","Amount":"60","Category":"General"},
    {"Date": "44144.4014351852","Account":"Cash Account","Details":"Fisher J R","Amount":"60","Category":"General"},
    {"Date": "44141.8822569444","Account":"Cash Account","Details":"Savannah O'Driscoll","Amount":"-13.5","Category":"General"},
    {"Date": "44138.5187962963","Account":"Cash Account","Details":"Broughton L J","Amount":"60","Category":"General"},
    {"Date": "44138.3411458333","Account":"Cash Account","Details":"Hasemore-Slie","Amount":"60","Category":"General"},
    {"Date": "44138.4010416667","Account":"Cash Account","Details":"Bonney L E","Amount":"60","Category":"General"},
    {"Date": "44137.8708217593","Account":"Cash Account","Details":"Thomson,Nicky","Amount":"60","Category":"General"},
    {"Date": "44137.7435763889","Account":"Cash Account","Details":"Legget,Peter","Amount":"60","Category":"General"},
    {"Date": "44137.5069791667","Account":"Cash Account","Details":"Miss Thomson","Amount":"60","Category":"General"},
    {"Date": "44137.9627430556","Account":"Cash Account","Details":"Labra Odde I R","Amount":"60","Category":"General"},
    {"Date": "44137.8791319444","Account":"Cash Account","Details":"Jasim Z H","Amount":"60","Category":"General"},
    {"Date": "44137.6085185185","Account":"Cash Account","Details":"Mr D S Madhav","Amount":"60","Category":"General"},
    {"Date": "44137.6711574074","Account":"Cash Account","Details":"Miss S S O'Dr","Amount":"10","Category":"General"},
    {"Date": "44165","Account":"Cash Account","Details":"","Amount":"0.13","Category":"General"},
    {"Date": "44165","Account":"Cash Account","Details":"","Amount":"-0.02","Category":"General"},
    {"Date": "44162.7130324074","Account":"Cash Account","Details":"Liam Broughton","Amount":"-152","Category":"General"},
    {"Date": "44158.4231018519","Account":"Cash Account","Details":"Kingsclare Stable","Amount":"-89.23","Category":"General"},
    {"Date": "44165","Account":"Cash Account","Details":"","Amount":"0.41","Category":"General"},
    {"Date": "44165","Account":"Cash Account","Details":"","Amount":"-0.07","Category":"General"},
    {"Date": "44196","Account":"","Details":"Awop Limited             Matangi      Nz ","Amount":"-102.7","Category":""},
    {"Date": "44196","Account":"","Details":"Kfc Gisborne - 521       Gisborne     Nz ","Amount":"-14.28","Category":""},
    {"Date": "44196","Account":"","Details":"The Bottle Shop        Gisborne      Nz ","Amount":"-51.48","Category":""},
    {"Date": "44195","Account":"","Details":"Awop Limited           Matangi       Nz ","Amount":"-102.7","Category":""},
    {"Date": "44195","Account":"","Details":"Awop Limited           Matangi       Nz ","Amount":"-91.91","Category":""},
    {"Date": "44194","Account":"","Details":"Cj Gisborne - 209      Gisborne      Nz ","Amount":"-22.5","Category":""},
    {"Date": "44194","Account":"","Details":"Cotton On Mega 9925    Gisborne      Nz ","Amount":"-49.99","Category":""},
    {"Date": "44193","Account":"","Details":"Nz Transport Agency    Palm Nth      Nz ","Amount":"-2.1","Category":""},
    {"Date": "44193","Account":"","Details":"Bp 2Go Pongakawa       Te Puke       Nzl ","Amount":"-22.5","Category":""},
    {"Date": "44193","Account":"","Details":"Bp 2Go Pongakawa       Te Puke       Nzl ","Amount":"-59.25","Category":""},
    {"Date": "44192","Account":"","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-4.6","Category":"Groceries"},
    {"Date": "44192","Account":"","Details":"Pizza Hut Newmarket    Auckland      Nzl ","Amount":"-93.42","Category":""},
    {"Date": "44192","Account":"","Details":"Netflix.Com            Los Gatos Ca  Nz ","Amount":"-16.99","Category":""},
    {"Date": "44191","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-22.15","Category":"General"},
    {"Date": "44191","Account":"","Details":"The Warehouse 119      Albany        Nz ","Amount":"-82","Category":""},
    {"Date": "44191","Account":"","Details":"Ola Help.Ola.Co.Nz     Auckland      Nz ","Amount":"-7.53","Category":""},
    {"Date": "44191","Account":"","Details":"Ellerslie Convention C Auckland      Nz ","Amount":"-18.5","Category":""},
    {"Date": "44191","Account":"","Details":"Ellerslie Convention C Auckland      Nz ","Amount":"-39","Category":""},
    {"Date": "44190","Account":"","Details":"Jb Hi-Fi               6498154629    Nz ","Amount":"-208","Category":""},
    {"Date": "44190","Account":"","Details":"Sharesies Limited      Wellington    Nz ","Amount":"-3","Category":"Subscriptions"},
    {"Date": "44190","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-9.38","Category":"Entertainment"},
    {"Date": "44189","Account":"","Details":"New World Albany       Albany Nz     Nz ","Amount":"-102","Category":""},
    {"Date": "44189","Account":"","Details":"Hallensteins           Auckland      Nzl ","Amount":"-19.99","Category":""},
    {"Date": "44189","Account":"","Details":"Sharing Shed           Auckland      Nzl ","Amount":"-31","Category":""},
    {"Date": "44189","Account":"","Details":"Liquor Centre Avenue   Auckland      Nzl ","Amount":"-54.98","Category":""},
    {"Date": "44188","Account":"","Details":"Uber   *Eats           Help.Uber.Com Nz ","Amount":"-25.25","Category":""},
    {"Date": "44188","Account":"","Details":"The Chamberlain        Auckland      Nz ","Amount":"-25.5","Category":"Entertainment"},
    {"Date": "44188","Account":"","Details":"The Chamberlain        Auckland      Nz ","Amount":"-11.22","Category":"Entertainment"},
    {"Date": "44188","Account":"","Details":"The Chamberlain        Auckland      Nz ","Amount":"-30.6","Category":"Entertainment"},
    {"Date": "44188","Account":"","Details":"The Chamberlain        Auckland      Nz ","Amount":"-8.16","Category":"Entertainment"},
    {"Date": "44188","Account":"","Details":"Galaxy Cabs            Auckland      Nzl ","Amount":"-46.4","Category":""},
    {"Date": "44188","Account":"","Details":"Dr Rudis Rooftop Brew  Auckland Cent Nz ","Amount":"-50","Category":""},
    {"Date": "44188","Account":"","Details":"Neo                    Auckland      Nzl ","Amount":"-15","Category":""},
    {"Date": "44188","Account":"","Details":"Neo                    Auckland      Nzl ","Amount":"-27","Category":""},
    {"Date": "44188","Account":"","Details":"Pink Neon Sign         Auckland      Nzl ","Amount":"-4.3","Category":"General"},
    {"Date": "44188","Account":"","Details":"Hallensteins Queen S   Auckland Cent Nzl ","Amount":"-59.99","Category":""},
    {"Date": "44188","Account":"","Details":"Mojo Durham            Auckland      Nz ","Amount":"-19.5","Category":""},
    {"Date": "44187","Account":"","Details":"Auckland Racing Club   Auckland      Nz ","Amount":"-43","Category":""},
    {"Date": "44187","Account":"","Details":"New World Remuera      Remuera       Nz ","Amount":"-28.35","Category":"Groceries"},
    {"Date": "44187","Account":"","Details":"Pink Neon Sign         Auckland      Nzl ","Amount":"-4","Category":"General"},
    {"Date": "44187","Account":"","Details":"Cw Akl Lower Queen St  Auckland      Nz ","Amount":"-15.99","Category":""},
    {"Date": "44186","Account":"","Details":"Mcdonalds Albany Frees Albany        Nz ","Amount":"-10.9","Category":""},
    {"Date": "44186","Account":"","Details":"Foodu                  Auckland      Nzl ","Amount":"-12.4","Category":""},
    {"Date": "44186","Account":"","Details":"Stolen Summer          Auckland      Nz ","Amount":"-9.5","Category":"General"},
    {"Date": "44185","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-102.15","Category":"General"},
    {"Date": "44185","Account":"","Details":"New World Remuera      Remuera       Nz ","Amount":"-40.38","Category":"Groceries"},
    {"Date": "44184","Account":"","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44184","Account":"","Details":"Mcdonalds Greenlane    Auckland      Nz ","Amount":"-17.3","Category":""},
    {"Date": "44183","Account":"","Details":"Escape Rooms Takapuna  Albany        Nz ","Amount":"-64","Category":""},
    {"Date": "44183","Account":"","Details":"Master And Apprentice  Takapuna Auck Nz ","Amount":"-11.97","Category":""},
    {"Date": "44182","Account":"","Details":"Chamberlain Park Golf  Auckland      Nz ","Amount":"-20","Category":""},
    {"Date": "44182","Account":"","Details":"Z Remuera              Auckland      Nz ","Amount":"-5","Category":""},
    {"Date": "44182","Account":"","Details":"Cater Plus 1480        Auckland      Nz ","Amount":"-5.1","Category":""},
    {"Date": "44182","Account":"","Details":"Cater Plus 1480        Auckland      Nz ","Amount":"-3","Category":""},
    {"Date": "44182","Account":"","Details":"Cater Plus 1480        Auckland      Nz ","Amount":"-3.7","Category":""},
    {"Date": "44182","Account":"","Details":"Credit Card Repayment Insurance ","Amount":"-16.93","Category":"General"},
    {"Date": "44181","Account":"","Details":"Morningside Tavern     Auckland      Nz ","Amount":"-20","Category":"Entertainment"},
    {"Date": "44180","Account":"","Details":"Sp * Golf Warehouse    Auckland      Nz ","Amount":"-157.49","Category":""},
    {"Date": "44180","Account":"","Details":"Bp Connect Greenlane E Auckland      Nzl ","Amount":"-79.21","Category":"Transport"},
    {"Date": "44179","Account":"","Details":"Apple.Com/Bill         Sydney        Au ","Amount":"-99.99","Category":"Subscriptions"},
    {"Date": "44179","Account":"","Details":"Golf Warehouse         Ellerslie     Nz ","Amount":"-29.99","Category":"Fitness/ Sport"},
    {"Date": "44179","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-4.69","Category":"Groceries"},
    {"Date": "44179","Account":"","Details":"Dot Golf               Auckland      Nz ","Amount":"-45","Category":""},
    {"Date": "44178","Account":"","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-80.09","Category":"Groceries"},
    {"Date": "44178","Account":"","Details":"Subway Ellerslie       Ellerslie     Nz ","Amount":"-22.9","Category":""},
    {"Date": "44177","Account":"","Details":"Bread And Butter Baker Auckland      Nzl ","Amount":"-12.5","Category":""},
    {"Date": "44177","Account":"","Details":"Mitre 10 Albany        Auckland      Nzl ","Amount":"-10.46","Category":""},
    {"Date": "44177","Account":"","Details":"Huffer House Britomart Britomart     Nz ","Amount":"-49.95","Category":""},
    {"Date": "44177","Account":"","Details":"Cotton On 9930 Queen S Auckland      Nz ","Amount":"-29.99","Category":""},
    {"Date": "44177","Account":"","Details":"Tank Albany            Auckland      Nz ","Amount":"-17.4","Category":""},
    {"Date": "44177","Account":"","Details":"Sal'S Pizza Missionbay Auckland      Nz ","Amount":"-8","Category":""},
    {"Date": "44176","Account":"","Details":"The Warehouse 113      Newmarket     Nz ","Amount":"-20","Category":""},
    {"Date": "44176","Account":"","Details":"Domino'S Meadowbank    Auckland      Nz ","Amount":"-15.29","Category":""},
    {"Date": "44176","Account":"","Details":"Headquarters           Auckland      Nzl ","Amount":"-36","Category":""},
    {"Date": "44175","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-10.56","Category":"Entertainment"},
    {"Date": "44175","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-10.98","Category":"Entertainment"},
    {"Date": "44175","Account":"","Details":"Uber   *Eats           Help.Uber.Com Nz ","Amount":"-35.97","Category":""},
    {"Date": "44174","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-4.99","Category":"Groceries"},
    {"Date": "44174","Account":"","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44173","Account":"","Details":"St Lukes Indoor Invest Auckland      Nz ","Amount":"-5","Category":""},
    {"Date": "44173","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-8.99","Category":"Groceries"},
    {"Date": "44173","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-6.48","Category":"Groceries"},
    {"Date": "44172","Account":"","Details":"Apple.Com/Bill         Sydney        Au ","Amount":"-1.69","Category":"Subscriptions"},
    {"Date": "44172","Account":"","Details":"Kfc Greenlane - 604    Auckland      Nz ","Amount":"-23.98","Category":"Dining Out"},
    {"Date": "44172","Account":"","Details":"Parasol & Swing        Auckland      Nz ","Amount":"-13.26","Category":""},
    {"Date": "44172","Account":"","Details":"Parasol & Swing        Auckland      Nz ","Amount":"-38.76","Category":""},
    {"Date": "44172","Account":"","Details":"Downtown Car Park      Auckland      Nz ","Amount":"-4","Category":""},
    {"Date": "44171","Account":"","Details":"Bell Block Motors      New Plymouth  Nz ","Amount":"-4.2","Category":""},
    {"Date": "44171","Account":"","Details":"Burger Fuel Parnell    Auckland      Nz ","Amount":"-29.9","Category":"Dining Out"},
    {"Date": "44170","Account":"","Details":"Airspresso             New Plymouth  Nzl ","Amount":"-11","Category":""},
    {"Date": "44170","Account":"","Details":"Black Bull Liquor      Stratford     Nzl ","Amount":"-51.98","Category":""},
    {"Date": "44169","Account":"","Details":"Little Creatures Pop-U Auckland Cent Nz ","Amount":"-10","Category":""},
    {"Date": "44169","Account":"","Details":"Kiwi Liquor            Auckland Cent Nz ","Amount":"-30","Category":""},
    {"Date": "44169","Account":"","Details":"Little Creatures Pop-U Auckland Cent Nz ","Amount":"-8","Category":""},
    {"Date": "44169","Account":"","Details":"Uber Trip Help.Uber.Co Vorden        Nz ","Amount":"-12.33","Category":"Entertainment"},
    {"Date": "44169","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-10","Category":"Entertainment"},
    {"Date": "44169","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-6.5","Category":"Entertainment"},
    {"Date": "44169","Account":"","Details":"Vulcan Lane Bagel      16 High Stree Nz ","Amount":"-9","Category":""},
    {"Date": "44168","Account":"","Details":"Spotify                Stockholm     Se ","Amount":"-14.99","Category":"Subscriptions"},
    {"Date": "44168","Account":"","Details":"Liquorland Remuera     Auckland      Nz ","Amount":"-28.99","Category":""},
    {"Date": "44168","Account":"","Details":"Sumthin Dumplin        Auckland      Nz ","Amount":"-11.5","Category":"Groceries"},
    {"Date": "44168","Account":"","Details":"Noel Leeming 2Q        Auckland      Nz ","Amount":"-29.99","Category":""},
    {"Date": "44168","Account":"","Details":"Vulcan Lane Bagel      16 High Stree Nz ","Amount":"-3.5","Category":""},
    {"Date": "44166","Account":"","Details":"Mcdonalds Albany Frees Albany        Nz ","Amount":"-13.6","Category":""},
    {"Date": "44166","Account":"","Details":"Morningside Tavern     Auckland      Nz ","Amount":"-8","Category":"Entertainment"},
    {"Date": "44166","Account":"","Details":"Farro Fresh Orakei     Orakei        Nz ","Amount":"-21.99","Category":""},
    {"Date": "44196","Account":"","Details":"","Amount":"0.12","Category":"General"},
    {"Date": "44196","Account":"","Details":"","Amount":"-0.02","Category":"General"},
    {"Date": "44191.4545833333","Account":"","Details":"Gary Mitchelmore","Amount":"-100","Category":""},
    {"Date": "44188.5511574074","Account":"","Details":"Callum Mitchelmore","Amount":"-35","Category":""},
    {"Date": "44182.3806712963","Account":"","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44182.3803472222","Account":"","Details":"06-0613-0073624-02","Amount":"-57.13","Category":""},
    {"Date": "44181.8896296296","Account":"","Details":"Peter Ezes","Amount":"-55","Category":""},
    {"Date": "44178.8690972222","Account":"","Details":"George Hardwick Smit","Amount":"-38.79","Category":""},
    {"Date": "44176.3628703704","Account":"","Details":"Callum Mitchelmore","Amount":"-46","Category":""},
    {"Date": "44174.4830439814","Account":"","Details":"Nico Hutton","Amount":"-30","Category":""},
    {"Date": "44173.6235416667","Account":"","Details":"Callum Mitchelmore","Amount":"-20","Category":""},
    {"Date": "44196","Account":"","Details":"","Amount":"2.15","Category":"General"},
    {"Date": "44196","Account":"","Details":"","Amount":"-0.38","Category":"General"},
    {"Date": "44180.7519097222","Account":"","Details":"Mitchelmore,G","Amount":"150","Category":""},
    {"Date": "44196","Account":"","Details":"Unarranged Overdraft Fee","Amount":"-3","Category":""},
    {"Date": "44194.9854976852","Account":"","Details":"4835-****-****-8369  Df","Amount":"-8.9","Category":""},
    {"Date": "44191.5367476852","Account":"","Details":"Bnz  Z3147 Bnz Remuera","Amount":"-140","Category":""},
    {"Date": "44191.4592592593","Account":"","Details":"Mitchelmore,C","Amount":"100","Category":""},
    {"Date": "44191.526400463","Account":"","Details":"Miss S S O'Dr","Amount":"40","Category":"General"},
    {"Date": "44192.8042708333","Account":"","Details":"Bashall,Chris","Amount":"24","Category":""},
    {"Date": "44192.8051851852","Account":"","Details":"Sparks B R","Amount":"21","Category":""},
    {"Date": "44194.4234375","Account":"","Details":"Ford, S W","Amount":"14.48","Category":""},
    {"Date": "44194.4234375","Account":"","Details":"O'Connor, D C","Amount":"14","Category":""},
    {"Date": "44194.4234375","Account":"","Details":"Marshall, C","Amount":"8.5","Category":"Subscriptions"},
    {"Date": "44194.4021064815","Account":"","Details":"Crouchley H J","Amount":"5","Category":""},
    {"Date": "44189.8246990741","Account":"","Details":"Miss S S O'Dr","Amount":"100","Category":"General"},
    {"Date": "44187.9351967593","Account":"","Details":"O'Driscoll,Sa","Amount":"20","Category":"General"},
    {"Date": "44187.6065162037","Account":"","Details":"Sharesies Nz","Amount":"-192","Category":""},
    {"Date": "44187.6106365741","Account":"","Details":"Steve Ford","Amount":"-120","Category":""},
    {"Date": "44187.5975115741","Account":"","Details":"Kingsclare Stable","Amount":"-71.18","Category":"General"},
    {"Date": "44187.5960416667","Account":"","Details":"Majestic Horse Float","Amount":"-49.03","Category":""},
    {"Date": "44187.5968981481","Account":"","Details":"Premier Horse","Amount":"-1.87","Category":""},
    {"Date": "44184.8141898148","Account":"","Details":"Kebab Serai","Amount":"-39","Category":""},
    {"Date": "44186.5880787037","Account":"","Details":"Auck Donations","Amount":"-20","Category":"General"},
    {"Date": "44184.8379050926","Account":"","Details":"Remuera Flat","Amount":"-906","Category":"Rent/ Mortgage"},
    {"Date": "44186.7594097222","Account":"","Details":"Fred King","Amount":"-38","Category":""},
    {"Date": "44184.8560648148","Account":"","Details":"Savannah O'Driscoll","Amount":"-12","Category":"General"},
    {"Date": "44184.8562847222","Account":"","Details":"Peter Ezes","Amount":"-10","Category":""},
    {"Date": "44183.7759143518","Account":"","Details":"Deloitte","Amount":"3807.53","Category":"Salary/ Wage"},
    {"Date": "44182.1690277778","Account":"","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44182.3801157407","Account":"","Details":"06-0613-0073624-02","Amount":"57.13","Category":""},
    {"Date": "44182.1690277778","Account":"","Details":"Tauarua Fune - (Reversal)","Amount":"100","Category":""},
    {"Date": "44181.412337963","Account":"","Details":"Cityfitness Group","Amount":"-51.96","Category":"Fitness/ Sport"},
    {"Date": "44179.4172916667","Account":"","Details":"Marshall, C","Amount":"50","Category":"Subscriptions"},
    {"Date": "44179.463125","Account":"","Details":"E P Managh","Amount":"32","Category":""},
    {"Date": "44173.7094560185","Account":"","Details":"Les Rohleder","Amount":"-143","Category":""},
    {"Date": "44173.7102430556","Account":"","Details":"Michelle Thomson","Amount":"-34.4","Category":""},
    {"Date": "44173.6710648148","Account":"","Details":"New Zealand R","Amount":"406","Category":"General"},
    {"Date": "44166.4124768519","Account":"","Details":"Mr N B Bearman","Amount":"60","Category":""},
    {"Date": "44286","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-23.27","Category":"Groceries"},
    {"Date": "44285","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-6.77","Category":"Groceries"},
    {"Date": "44285","Account":"","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44285","Account":"","Details":"Barkers Groom Room     Auckland      Nz ","Amount":"-28","Category":""},
    {"Date": "44285","Account":"","Details":"Paypal *Barkersgroo    4029357733    Sg ","Amount":"-7","Category":""},
    {"Date": "44284","Account":"","Details":"Air Nz One             Auckland      Nz ","Amount":"-79","Category":"General"},
    {"Date": "44284","Account":"","Details":"Ahnu New Zealand       Taupo         Nz ","Amount":"-153.76","Category":""},
    {"Date": "44284","Account":"","Details":"Expedia 72078361881621 Expedia.Co.Nz Nz ","Amount":"-98.69","Category":""},
    {"Date": "44284","Account":"","Details":"Expedia 72078359956822 Expedia.Co.Nz Nz ","Amount":"-149","Category":""},
    {"Date": "44284","Account":"","Details":"Airbnb                 Airbnb.Com    Gb ","Amount":"-101.12","Category":""},
    {"Date": "44284","Account":"","Details":"Uber   *Eats           Help.Uber.Com Nz ","Amount":"-45","Category":""},
    {"Date": "44283","Account":"","Details":"L & P Cafe             Paeroa        Nz ","Amount":"-50.5","Category":""},
    {"Date": "44283","Account":"","Details":"Uber Eats Help.Uber.Co Amsterdam     Nz ","Amount":"-23.5","Category":""},
    {"Date": "44282","Account":"","Details":"New World Waihi        Waihi         Nz ","Amount":"-8.47","Category":""},
    {"Date": "44282","Account":"","Details":"Challenge Whangamata   Whangamata    Nz ","Amount":"-14.6","Category":""},
    {"Date": "44282","Account":"","Details":"Netflix.Com            Los Gatos Ca  Nz ","Amount":"-16.99","Category":""},
    {"Date": "44282","Account":"","Details":"Whangamata Food Mark   Whangamata    Nz ","Amount":"-3","Category":""},
    {"Date": "44282","Account":"","Details":"Flat White Cafe        Waihi         Nz ","Amount":"-126.99","Category":""},
    {"Date": "44281","Account":"","Details":"Bp Connect Papakura Ms Auckland      Nz ","Amount":"-16.8","Category":""},
    {"Date": "44281","Account":"","Details":"Mcdonalds Drury Msa    Drury         Nz ","Amount":"-10","Category":""},
    {"Date": "44281","Account":"","Details":"Pb Technologies Auckla Auckland      Nz ","Amount":"-45","Category":""},
    {"Date": "44280","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-6.98","Category":"Groceries"},
    {"Date": "44280","Account":"","Details":"Sharesies Limited      Wellington    Nz ","Amount":"-3","Category":"Subscriptions"},
    {"Date": "44279","Account":"","Details":"Puntiq.Com             Newport       Au ","Amount":"-11.06","Category":""},
    {"Date": "44277","Account":"","Details":"Mojo Queens Arcade     Auckland      Nz ","Amount":"-4.9","Category":""},
    {"Date": "44277","Account":"","Details":"Countdown St Johns     Auckland      Nz ","Amount":"-133.76","Category":""},
    {"Date": "44277","Account":"","Details":"77 Convenience Store   Auckland      Nz ","Amount":"-7.9","Category":""},
    {"Date": "44276","Account":"","Details":"Eden Park Stadium      Auckland      Nz ","Amount":"-22.5","Category":""},
    {"Date": "44275","Account":"","Details":"Good George Nw         North Wharf   Nz ","Amount":"-77.5","Category":""},
    {"Date": "44275","Account":"","Details":"Bunnings - 9470        North Shore   Nz ","Amount":"-8.2","Category":""},
    {"Date": "44275","Account":"","Details":"Bunnings - 9470        North Shore   Nz ","Amount":"-88.89","Category":""},
    {"Date": "44275","Account":"","Details":"Mcdonalds Albany Frees Albany        Nz ","Amount":"-23.9","Category":""},
    {"Date": "44275","Account":"","Details":"Tab New Zealand        Lower Hutt    Nz ","Amount":"-102.15","Category":""},
    {"Date": "44275","Account":"","Details":"Golf Warehouse Ellersl Auckland      Nz ","Amount":"-32","Category":""},
    {"Date": "44275","Account":"","Details":"Nespresso New Zealand  Auckland      Nz ","Amount":"-28.5","Category":""},
    {"Date": "44274","Account":"","Details":"Brothers Beer          Auckland      Nz ","Amount":"-11","Category":""},
    {"Date": "44274","Account":"","Details":"Brothers Beer          Auckland      Nz ","Amount":"-10.5","Category":""},
    {"Date": "44274","Account":"","Details":"Brothers Beer          Auckland      Nz ","Amount":"-19","Category":""},
    {"Date": "44274","Account":"","Details":"Brothers Beer          Auckland      Nz ","Amount":"-12","Category":""},
    {"Date": "44274","Account":"","Details":"Pink Neon Sign         Auckland      Nz ","Amount":"-4","Category":""},
    {"Date": "44274","Account":"","Details":"Energy Online Ltd      Auckland      Nz ","Amount":"-152.23","Category":""},
    {"Date": "44273","Account":"","Details":"Mobil Clearview        Auckland      Nz ","Amount":"-69.89","Category":""},
    {"Date": "44273","Account":"","Details":"Mcdonalds Albany Frees Albany        Nz ","Amount":"-10.9","Category":""},
    {"Date": "44272","Account":"","Details":"Puntiq.Com             Newport       Au ","Amount":"-10.93","Category":""},
    {"Date": "44272","Account":"","Details":"Act*Ironman Newzealand 0800440877    Gb ","Amount":"-161","Category":""},
    {"Date": "44272","Account":"","Details":"Credit Card Repayment Insurance ","Amount":"-18.83","Category":"General"},
    {"Date": "44271","Account":"","Details":"Stolen Summer          Auckland      Nz ","Amount":"-5","Category":"General"},
    {"Date": "44271","Account":"","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44271","Account":"","Details":"Bp Connect Greenlane E Auckland      Nz ","Amount":"-25.1","Category":""},
    {"Date": "44270","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-3.98","Category":"Groceries"},
    {"Date": "44270","Account":"","Details":"Ministry Ofjustice 301 Auckland      Nz ","Amount":"-150","Category":""},
    {"Date": "44269","Account":"","Details":"77 Convenience Store   Auckland      Nzl ","Amount":"-9.9","Category":""},
    {"Date": "44269","Account":"","Details":"Mecca Auckland         Auckland      Nz ","Amount":"-24","Category":""},
    {"Date": "44269","Account":"","Details":"Pak N Save Glen Innes  Auckland      Nz ","Amount":"-112.02","Category":""},
    {"Date": "44269","Account":"","Details":"Coley & Punch          Auckland      Nz ","Amount":"-55.59","Category":""},
    {"Date": "44269","Account":"","Details":"Central Taxi           Auckland      Nz ","Amount":"-48","Category":""},
    {"Date": "44269","Account":"","Details":"Chuffed Cafe           Auckland      Nz ","Amount":"-46","Category":""},
    {"Date": "44268","Account":"","Details":"The Mudbrick Vineyard  Auckland      Nzl ","Amount":"-32","Category":""},
    {"Date": "44268","Account":"","Details":"The Mudbrick Vineyard  Auckland      Nzl ","Amount":"-32","Category":""},
    {"Date": "44268","Account":"","Details":"Wild On Waiheke        Waiheke Islan Nzl ","Amount":"-195.78","Category":""},
    {"Date": "44268","Account":"","Details":"Oneroa Beach Club      Waiheke Islan Nz ","Amount":"-19","Category":""},
    {"Date": "44268","Account":"","Details":"Harbour Information    Auckland      Nz ","Amount":"-138","Category":""},
    {"Date": "44268","Account":"","Details":"Ferry Cafe             East Tamaki   Nz ","Amount":"-26.3","Category":""},
    {"Date": "44268","Account":"","Details":"Thirsty Liquor Waiheke Oneroa        Nz ","Amount":"-56.98","Category":""},
    {"Date": "44268","Account":"","Details":"O Hagans               Auckland      Nz ","Amount":"-42.75","Category":""},
    {"Date": "44268","Account":"","Details":"O Hagans               Auckland      Nz ","Amount":"-21.37","Category":""},
    {"Date": "44268","Account":"","Details":"Ika Kakahi             Auckland      Nz ","Amount":"-38","Category":""},
    {"Date": "44267","Account":"","Details":"77 Convenience Store   Auckland      Nzl ","Amount":"-6","Category":""},
    {"Date": "44267","Account":"","Details":"The Lula Inn           Auckland      Nz ","Amount":"-57.81","Category":""},
    {"Date": "44267","Account":"","Details":"Wynyard Pavilion       Auckland      Nz ","Amount":"-30","Category":""},
    {"Date": "44267","Account":"","Details":"The Lula Inn           Auckland      Nz ","Amount":"-41","Category":""},
    {"Date": "44266","Account":"","Details":"Vulcan Lane Bagel      16 High Stree Nz ","Amount":"-3.5","Category":""},
    {"Date": "44266","Account":"","Details":"The Corner             Remuera       Nz ","Amount":"-22.38","Category":""},
    {"Date": "44266","Account":"","Details":"Mission Bay Liquor     Auckland      Nz ","Amount":"-19.99","Category":""},
    {"Date": "44266","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-12.69","Category":"Entertainment"},
    {"Date": "44265","Account":"","Details":"Green & Grocery Worl   Auckland      Nzl ","Amount":"-11","Category":"Groceries"},
    {"Date": "44265","Account":"","Details":"Pink Neon Sign         Auckland      Nzl ","Amount":"-8.5","Category":"General"},
    {"Date": "44265","Account":"","Details":"Bp 2Go Ellerslie       Auckland      Nzl ","Amount":"-4.8","Category":""},
    {"Date": "44265","Account":"","Details":"Puntiq.Com             Newport       Au ","Amount":"-10.92","Category":""},
    {"Date": "44265","Account":"","Details":"Bp 2Go Ellerslie       Auckland      Nz ","Amount":"-6","Category":""},
    {"Date": "44264","Account":"","Details":"Cargo Coffee           Auckland      Nz ","Amount":"-5.6","Category":""},
    {"Date": "44264","Account":"","Details":"Jetstar                Auckland      Nz ","Amount":"-102","Category":""},
    {"Date": "44263","Account":"","Details":"77 Convenience Store   Auckland      Nzl ","Amount":"-5.9","Category":""},
    {"Date": "44263","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-32.15","Category":"General"},
    {"Date": "44263","Account":"","Details":"Countdown St Johns     Auckland      Nzl ","Amount":"-63.35","Category":""},
    {"Date": "44262","Account":"","Details":"The Warehouse 166      Snells Beach  Nz ","Amount":"-399","Category":""},
    {"Date": "44262","Account":"","Details":"Little And Local       Snells Beach  Nz ","Amount":"-43.5","Category":""},
    {"Date": "44262","Account":"","Details":"Bp Connect Dairy Flat  Auckland      Nz ","Amount":"-15.1","Category":""},
    {"Date": "44262","Account":"","Details":"Apple.Com/Bill         Sydney        Au ","Amount":"-1.69","Category":"Subscriptions"},
    {"Date": "44262","Account":"","Details":"Westfield Shopping Ctr Auckland      Nz ","Amount":"-7","Category":"General"},
    {"Date": "44261","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-102.15","Category":"General"},
    {"Date": "44261","Account":"","Details":"Burger Fuel Mt Welling Auckland      Nzl ","Amount":"-50.9","Category":""},
    {"Date": "44261","Account":"","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"-5.05","Category":"Entertainment"},
    {"Date": "44260","Account":"","Details":"Pacific Liquor Gi      Auckland      Nzl ","Amount":"-147.95","Category":""},
    {"Date": "44259","Account":"","Details":"Pak N Save Glen Innes  Auckland      Nz ","Amount":"-37.91","Category":""},
    {"Date": "44258","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-52.15","Category":"General"},
    {"Date": "44258","Account":"","Details":"Puntiq.Com             Newport       Au ","Amount":"-10.95","Category":""},
    {"Date": "44258","Account":"","Details":"Spotify                Stockholm     Se ","Amount":"-14.99","Category":"Subscriptions"},
    {"Date": "44257","Account":"","Details":"Pak N Save Glen Innes  Auckland      Nz ","Amount":"-35.11","Category":""},
    {"Date": "44256","Account":"","Details":"Countdown St Johns     Auckland      Nzl ","Amount":"-200.78","Category":""},
    {"Date": "44254","Account":"","Details":"The Last Word          Christchurch  Nzl ","Amount":"-13","Category":""},
    {"Date": "44254","Account":"","Details":"Netflix.Com            Los Gatos Ca  Nz ","Amount":"-16.99","Category":""},
    {"Date": "44254","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-31.62","Category":"Entertainment"},
    {"Date": "44254","Account":"","Details":"Uber   *Eats           Help.Uber.Com Nz ","Amount":"-33.36","Category":""},
    {"Date": "44253","Account":"","Details":"Room 205 Coffee House  Christchurch  Nzl ","Amount":"-5.6","Category":""},
    {"Date": "44253","Account":"","Details":"Hallensteins           Christchurch  Nzl ","Amount":"-30","Category":""},
    {"Date": "44253","Account":"","Details":"Harewood Golf Club     Christchurch  Nzl ","Amount":"-19","Category":""},
    {"Date": "44253","Account":"","Details":"Ippin Ramen & Bowl     Papanui       Nz ","Amount":"-11.9","Category":""},
    {"Date": "44253","Account":"","Details":"The Frontrunner        Christchurch  Nz ","Amount":"-40","Category":""},
    {"Date": "44253","Account":"","Details":"Mcdonalds Northlands   Christchurch  Nz ","Amount":"-3.8","Category":""},
    {"Date": "44253","Account":"","Details":"Ramen Ria              Christchurch  Nz ","Amount":"-29","Category":""},
    {"Date": "44253","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-11.54","Category":"Entertainment"},
    {"Date": "44253","Account":"","Details":"The Rockpool           Christchurch  Nz ","Amount":"-42","Category":""},
    {"Date": "44253","Account":"","Details":"The Rockpool           Christchurch  Nz ","Amount":"-20","Category":""},
    {"Date": "44252","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-5.98","Category":"Groceries"},
    {"Date": "44252","Account":"","Details":"The Avonhead Tavern    Christchurch  Nzl ","Amount":"-13.5","Category":""},
    {"Date": "44252","Account":"","Details":"Sharesies Limited      Wellington    Nz ","Amount":"-3","Category":"Subscriptions"},
    {"Date": "44252","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-17.58","Category":"Entertainment"},
    {"Date": "44251","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-5.18","Category":"Groceries"},
    {"Date": "44251","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-6.98","Category":"Groceries"},
    {"Date": "44251","Account":"","Details":"Puntiq.Com             Newport       Au ","Amount":"-10.96","Category":""},
    {"Date": "44250","Account":"","Details":"Countdown St Johns     Auckland      Nzl ","Amount":"-5.4","Category":""},
    {"Date": "44250","Account":"","Details":"Mobil Eden Park        Auckland      Nz ","Amount":"-79.94","Category":""},
    {"Date": "44249","Account":"","Details":"Pink Neon Sign         Auckland      Nzl ","Amount":"-4","Category":"General"},
    {"Date": "44249","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-4.98","Category":"Groceries"},
    {"Date": "44248","Account":"","Details":"Neuron Mobility Nz     Auckland      Nz ","Amount":"-11.64","Category":""},
    {"Date": "44248","Account":"","Details":"Neuron Mobility Nz     Auckland      Nz ","Amount":"-11.26","Category":""},
    {"Date": "44248","Account":"","Details":"Pak N Save Glen Innes  Auckland      Nz ","Amount":"-94.43","Category":""},
    {"Date": "44248","Account":"","Details":"New World Eastridge    Auckland      Nz ","Amount":"-22.76","Category":""},
    {"Date": "44248","Account":"","Details":"Little Local Long Bay  Auckland      Nz ","Amount":"-51.3","Category":""},
    {"Date": "44247","Account":"","Details":"Retro Records          Silverdale    Nzl ","Amount":"-60","Category":""},
    {"Date": "44246","Account":"","Details":"Neo                    Auckland      Nzl ","Amount":"-16.5","Category":""},
    {"Date": "44246","Account":"","Details":"St Heliers Cellar      Auckland      Nz ","Amount":"-18.99","Category":""},
    {"Date": "44246","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-22.14","Category":"Entertainment"},
    {"Date": "44244","Account":"","Details":"Interest ","Amount":"-38.38","Category":""},
    {"Date": "44244","Account":"","Details":"Credit Card Repayment Insurance ","Amount":"-21.25","Category":"General"},
    {"Date": "44241","Account":"","Details":"Gas Albany             Auckland      Nzl ","Amount":"-70.3","Category":""},
    {"Date": "44241","Account":"","Details":"Bgpannual              Auckland      Nz ","Amount":"-360","Category":""},
    {"Date": "44241","Account":"","Details":"South Head Golf Club   Helensville   Nz ","Amount":"-12","Category":""},
    {"Date": "44241","Account":"","Details":"South Head Golf Club   Helensville   Nz ","Amount":"-14","Category":""},
    {"Date": "44240","Account":"","Details":"Kmart                  Auckland      Nzl ","Amount":"-92","Category":""},
    {"Date": "44240","Account":"","Details":"Gull Hobsonville       Auckland      Nz ","Amount":"-20","Category":""},
    {"Date": "44240","Account":"","Details":"New World Albany       Albany Nz     Nz ","Amount":"-41.61","Category":""},
    {"Date": "44240","Account":"","Details":"Bunnings - 9493        Mt Wellington Nz ","Amount":"-19.94","Category":""},
    {"Date": "44240","Account":"","Details":"Mcdonalds Sylvia Park  Auckland      Nz ","Amount":"-5","Category":""},
    {"Date": "44239","Account":"","Details":"Mexican Cafe           Auckland      Nz ","Amount":"-45.85","Category":""},
    {"Date": "44239","Account":"","Details":"Mexican Cafe           Auckland      Nz ","Amount":"-15.28","Category":""},
    {"Date": "44239","Account":"","Details":"Ola Help.Ola.Co.Nz     Auckland      Nz ","Amount":"-14.59","Category":""},
    {"Date": "44238","Account":"","Details":"Countdown Akl Metro    Auckland      Nzl ","Amount":"-3.5","Category":""},
    {"Date": "44238","Account":"","Details":"New World Metro Queen  Auckland      Nz ","Amount":"-21.49","Category":"Groceries"},
    {"Date": "44238","Account":"","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"-5.05","Category":"Entertainment"},
    {"Date": "44238","Account":"","Details":"Ola Help.Ola.Co.Nz     Auckland      Nz ","Amount":"-25.03","Category":""},
    {"Date": "44237","Account":"","Details":"Stolen Summer          Auckland      Nz ","Amount":"-10.5","Category":"General"},
    {"Date": "44237","Account":"","Details":"Takapuna Golf Course   Auckland      Nz ","Amount":"-16","Category":""},
    {"Date": "44237","Account":"","Details":"Coca Cola Vending      Auckland      Nz ","Amount":"-4.5","Category":""},
    {"Date": "44236","Account":"","Details":"77 Convenience Store   Auckland      Nz ","Amount":"-5.9","Category":""},
    {"Date": "44236","Account":"","Details":"Pink Neon Sign         Auckland      Nz ","Amount":"-4.3","Category":""},
    {"Date": "44235","Account":"","Details":"Countdown Meadowbank   Auckland      Nz ","Amount":"-33.42","Category":""},
    {"Date": "44234","Account":"","Details":"Mekong Baby            Auckland      Nzl ","Amount":"-111","Category":""},
    {"Date": "44234","Account":"","Details":"Event Cinemas Nwmkt    Auckland      Nz ","Amount":"-18","Category":""},
    {"Date": "44234","Account":"","Details":"Mcdonalds Albany Frees Albany        Nz ","Amount":"-14.3","Category":""},
    {"Date": "44234","Account":"","Details":"Apple.Com/Bill         Sydney        Au ","Amount":"-1.69","Category":"Subscriptions"},
    {"Date": "44234","Account":"","Details":"Long Bay Surf Club     Auckland      Nz ","Amount":"-75","Category":""},
    {"Date": "44233","Account":"","Details":"Sunnynook Dairy        Sunnynook     Nz ","Amount":"-4.99","Category":""},
    {"Date": "44233","Account":"","Details":"Z Albany               Albany        Nz ","Amount":"-75.89","Category":""},
    {"Date": "44233","Account":"","Details":"Burger King            Sylvia Park   Nz ","Amount":"-5","Category":""},
    {"Date": "44233","Account":"","Details":"Pak N Save Glen Innes  Auckland      Nz ","Amount":"-52.52","Category":""},
    {"Date": "44233","Account":"","Details":"Kmart                  Auckland      Nz ","Amount":"-29","Category":""},
    {"Date": "44232","Account":"","Details":"At Hop Auckland        Henderson     Nz ","Amount":"-40","Category":"Transport"},
    {"Date": "44232","Account":"","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"-9.55","Category":"Entertainment"},
    {"Date": "44232","Account":"","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"-1.45","Category":"Entertainment"},
    {"Date": "44232","Account":"","Details":"Neuron Mobility Nz     Auckland      Nz ","Amount":"-3.54","Category":""},
    {"Date": "44232","Account":"","Details":"The Warehouse 190      Lunn Ave      Nz ","Amount":"-103.5","Category":""},
    {"Date": "44232","Account":"","Details":"Monday Sunday Thai     Auckland      Nz ","Amount":"-46.4","Category":""},
    {"Date": "44232","Account":"","Details":"Westfield Shopping Ctr Auckland      Nz ","Amount":"-3","Category":"General"},
    {"Date": "44232","Account":"","Details":"Keytronics             Auckland      Nz ","Amount":"-36","Category":""},
    {"Date": "44232","Account":"","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"1.45","Category":"Entertainment"},
    {"Date": "44231","Account":"","Details":"Vulcan Lane Bagel      16 High Stree Nz ","Amount":"-4","Category":""},
    {"Date": "44231","Account":"","Details":"Neuron Mobility Nz     Auckland      Nz ","Amount":"-2.14","Category":""},
    {"Date": "44231","Account":"","Details":"Caltex St Heliers      St Heliers    Nz ","Amount":"-60","Category":""},
    {"Date": "44231","Account":"","Details":"Caltex St Heliers      St Heliers    Nz ","Amount":"-4.9","Category":""},
    {"Date": "44230","Account":"","Details":"Event Cinemas Nwmkt    Auckland      Nz ","Amount":"-42","Category":""},
    {"Date": "44230","Account":"","Details":"Uber Lime Help.Uber.Co Vorden        Nz ","Amount":"-8.2","Category":"Entertainment"},
    {"Date": "44230","Account":"","Details":"Spotify                Stockholm     Se ","Amount":"-14.99","Category":"Subscriptions"},
    {"Date": "44229","Account":"","Details":"Ola Help.Ola.Co.Nz     Auckland      Nz ","Amount":"-14.9","Category":""},
    {"Date": "44228","Account":"","Details":"New World Eastridge    Auckland      Nz ","Amount":"-7.49","Category":""},
    {"Date": "44228","Account":"","Details":"Eastridge Flowers      Auckland      Nz ","Amount":"-12","Category":""},
    {"Date": "44228","Account":"","Details":"Cafe On Kohi           Auckland      Nz ","Amount":"-49.45","Category":""},
    {"Date": "44227","Account":"","Details":"Tucks And Bao          Auckland      Nz ","Amount":"-78","Category":""},
    {"Date": "44227","Account":"","Details":"Dot Golf               Auckland      Nz ","Amount":"-62","Category":""},
    {"Date": "44227","Account":"","Details":"Maskell St Liquor      Auckland      Nz ","Amount":"-31.99","Category":""},
    {"Date": "44226","Account":"","Details":"Kfc Albany - 614       Albany        Nz ","Amount":"-16.68","Category":""},
    {"Date": "44225","Account":"","Details":"Saint Alice            Auckland Cent Nz ","Amount":"-23","Category":""},
    {"Date": "44225","Account":"","Details":"Shakespeare Hotel&Brew Auckland      Nz ","Amount":"-9","Category":""},
    {"Date": "44225","Account":"","Details":"Cj Metro - 201         Auckland      Nz ","Amount":"-16.5","Category":""},
    {"Date": "44223","Account":"","Details":"Netflix.Com            Los Gatos Ca  Nz ","Amount":"-16.99","Category":""},
    {"Date": "44223","Account":"","Details":"1Day                   Hamilton      Nz ","Amount":"-48.98","Category":""},
    {"Date": "44223","Account":"","Details":"Vending Direct         Auckland      Nz ","Amount":"-3","Category":""},
    {"Date": "44223","Account":"","Details":"Cater Plus 1480        Auckland      Nz ","Amount":"-3","Category":""},
    {"Date": "44223","Account":"","Details":"Shakti Mats Nz         Christchurch  Nz ","Amount":"-74","Category":""},
    {"Date": "44222","Account":"","Details":"Hellofresh*218425232   Auckland      Nz ","Amount":"-113.91","Category":""},
    {"Date": "44222","Account":"","Details":"Cater Plus 1480        Auckland      Nz ","Amount":"-3","Category":""},
    {"Date": "44221","Account":"","Details":"Z Albany               Albany        Nz ","Amount":"-94.69","Category":""},
    {"Date": "44221","Account":"","Details":"Sharesies Limited      Wellington    Nz ","Amount":"-3","Category":"Subscriptions"},
    {"Date": "44221","Account":"","Details":"The Warehouse 119      Albany        Nz ","Amount":"-25","Category":""},
    {"Date": "44221","Account":"","Details":"Vending Direct         Auckland      Nz ","Amount":"-4.7","Category":""},
    {"Date": "44221","Account":"","Details":"Vending Direct         Auckland      Nz ","Amount":"-3","Category":""},
    {"Date": "44221","Account":"","Details":"Vending Direct         Auckland      Nz ","Amount":"-3.2","Category":""},
    {"Date": "44220","Account":"","Details":"Burger Fuel Albany     Auckland      Nz ","Amount":"-49","Category":""},
    {"Date": "44220","Account":"","Details":"Mcdonalds Greenlane    Auckland      Nz ","Amount":"-17.6","Category":""},
    {"Date": "44219","Account":"","Details":"Headquarters           Auckland      Nzl ","Amount":"-28","Category":""},
    {"Date": "44219","Account":"","Details":"Headquarters           Auckland      Nzl ","Amount":"-24","Category":""},
    {"Date": "44219","Account":"","Details":"Ellerslie Convention C Auckland      Nz ","Amount":"-15","Category":""},
    {"Date": "44219","Account":"","Details":"Ellerslie Convention C Auckland      Nz ","Amount":"-20","Category":""},
    {"Date": "44219","Account":"","Details":"Ellerslie Convention C Auckland      Nz ","Amount":"-10","Category":""},
    {"Date": "44219","Account":"","Details":"Uber   *Trip           Help.Uber.Com Nz ","Amount":"-13.6","Category":"Entertainment"},
    {"Date": "44217","Account":"","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-3","Category":"Groceries"},
    {"Date": "44217","Account":"","Details":"Victoria Avenue Supere Auckland      Nz ","Amount":"-15.14","Category":"Groceries"},
    {"Date": "44216","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-102.15","Category":"General"},
    {"Date": "44216","Account":"","Details":"Bgp Karaka Million Pu  Auckland      Nz ","Amount":"-107.5","Category":""},
    {"Date": "44216","Account":"","Details":"A Bit To Bgp           Auckland      Nz ","Amount":"-5","Category":""},
    {"Date": "44216","Account":"","Details":"Nz Transport Agency    Palmerston No Nz ","Amount":"-109.16","Category":""},
    {"Date": "44215","Account":"","Details":"Chamberlain Park Golf  Auckland      Nz ","Amount":"-20","Category":""},
    {"Date": "44214","Account":"","Details":"Pink Neon Sign         Auckland      Nzl ","Amount":"-4","Category":"General"},
    {"Date": "44214","Account":"","Details":"Interest Credit Adjustment ","Amount":"0.16","Category":""},
    {"Date": "44214","Account":"","Details":"Benjamin Guilford      Auckland      Nz ","Amount":"-85","Category":""},
    {"Date": "44214","Account":"","Details":"New World Remuera      Remuera       Nz ","Amount":"-18.22","Category":"Groceries"},
    {"Date": "44214","Account":"","Details":"Z Remuera              Auckland      Nz ","Amount":"-4","Category":""},
    {"Date": "44213","Account":"","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-23.42","Category":"Groceries"},
    {"Date": "44213","Account":"","Details":"Z Albany               Albany        Nz ","Amount":"-73.09","Category":""},
    {"Date": "44213","Account":"","Details":"Account Fee ","Amount":"-32.5","Category":""},
    {"Date": "44213","Account":"","Details":"Interest ","Amount":"-53.2","Category":""},
    {"Date": "44213","Account":"","Details":"Credit Card Repayment Insurance ","Amount":"-18.98","Category":"General"},
    {"Date": "44212","Account":"","Details":"The Garden Shed        Auckland      Nz ","Amount":"-20.9","Category":""},
    {"Date": "44211","Account":"","Details":"Rebel Panmure          Panmure       Nz ","Amount":"-39.99","Category":"General"},
    {"Date": "44211","Account":"","Details":"Dot Golf               Auckland      Nz ","Amount":"-105","Category":""},
    {"Date": "44211","Account":"","Details":"Pak N Save Sylvia Park Auckland      Nz ","Amount":"-23.02","Category":""},
    {"Date": "44211","Account":"","Details":"Martha'S Backyard      Glen Innes    Nz ","Amount":"-1","Category":""},
    {"Date": "44210","Account":"","Details":"Caltex Dargaville      Dargaville    Nz ","Amount":"-89.52","Category":""},
    {"Date": "44210","Account":"","Details":"Nz Transport Agency    Palm Nth      Nz ","Amount":"-4.8","Category":""},
    {"Date": "44210","Account":"","Details":"Blah Blah Blah         Dargaville    Nzl ","Amount":"-43.8","Category":""},
    {"Date": "44209","Account":"","Details":"Bayview Store          Kaitaia       Nzl ","Amount":"-22.3","Category":""},
    {"Date": "44209","Account":"","Details":"Fullers Boi Hokianga   Auckland      Nz ","Amount":"-22","Category":""},
    {"Date": "44208","Account":"","Details":"Bp 2Go Whakapara       Hikurangi     Nzl ","Amount":"-12.4","Category":""},
    {"Date": "44208","Account":"","Details":"Gas Coopers Beach      Cable Bay     Nzl ","Amount":"-93.69","Category":""},
    {"Date": "44207","Account":"","Details":"Jb Hi-Fi               Auckland      Nzl ","Amount":"-99","Category":""},
    {"Date": "44207","Account":"","Details":"Air Nz One             Auckland      Nz ","Amount":"-140.6","Category":"General"},
    {"Date": "44207","Account":"","Details":"Cotton On Mega 9912    Albany        Nz ","Amount":"-64.98","Category":""},
    {"Date": "44207","Account":"","Details":"Countdown Greenlane    Auckland      Nzl ","Amount":"-61.95","Category":"Groceries"},
    {"Date": "44207","Account":"","Details":"Creatures1* Creatures1 Auckland      Nz ","Amount":"-25","Category":""},
    {"Date": "44207","Account":"","Details":"Little Creatures       Hobsonville   Nz ","Amount":"-11","Category":""},
    {"Date": "44207","Account":"","Details":"Mcdonalds Greenlane    Auckland      Nz ","Amount":"-5","Category":""},
    {"Date": "44207","Account":"","Details":"Mcdonalds Greenlane    Auckland      Nz ","Amount":"-5.5","Category":""},
    {"Date": "44206","Account":"","Details":"Bp Connect Bay View    Napier        Nzl ","Amount":"-4","Category":""},
    {"Date": "44206","Account":"","Details":"Bp Connect Bay View    Napier        Nzl ","Amount":"-62.84","Category":""},
    {"Date": "44206","Account":"","Details":"Hole In One Tmgh       Taupo         Nz ","Amount":"-25","Category":""},
    {"Date": "44206","Account":"","Details":"Subway Taupo           Taupo         Nz ","Amount":"-20.7","Category":""},
    {"Date": "44205","Account":"","Details":"Ajuna Eatery           Napier        Nzl ","Amount":"-11","Category":""},
    {"Date": "44205","Account":"","Details":"Ajuna Eatery           Napier        Nzl ","Amount":"-39.8","Category":""},
    {"Date": "44205","Account":"","Details":"Thirsty Liquor         Havelock Nort Nzl ","Amount":"-41.99","Category":""},
    {"Date": "44205","Account":"","Details":"New World Havelock Nor Hastings      Nz ","Amount":"-6.8","Category":""},
    {"Date": "44204","Account":"","Details":"Giant Brewing          Havelock Nort Nz ","Amount":"-22","Category":""},
    {"Date": "44204","Account":"","Details":"Giant Brewing          Havelock Nort Nz ","Amount":"-22","Category":""},
    {"Date": "44204","Account":"","Details":"Loading Ramp           Havelock Nort Nz ","Amount":"-131.5","Category":""},
    {"Date": "44204","Account":"","Details":"Jucy Rentals Nz        Christchurch  Nz ","Amount":"-416.16","Category":""},
    {"Date": "44203","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-52.15","Category":"General"},
    {"Date": "44203","Account":"","Details":"Akarangi Wines         Havelock      Nzl ","Amount":"-30","Category":""},
    {"Date": "44203","Account":"","Details":"Pipi Cafe              Havelock Nort Nzl ","Amount":"-84.4","Category":""},
    {"Date": "44203","Account":"","Details":"Craggy Range Cellar    Havelock Nort Nzl ","Amount":"-30","Category":""},
    {"Date": "44203","Account":"","Details":"Diva Bistro And Bar    Napier        Nz ","Amount":"-59","Category":""},
    {"Date": "44203","Account":"","Details":"Te Mata Estate Winery  Havelock Nort Nz ","Amount":"-20","Category":""},
    {"Date": "44203","Account":"","Details":"Apple.Com/Bill         Sydney        Au ","Amount":"-1.69","Category":"Subscriptions"},
    {"Date": "44202","Account":"","Details":"Mitre 10 Mega Masterto Masterton     Nzl ","Amount":"-20.74","Category":""},
    {"Date": "44202","Account":"","Details":"Tiwaiwaka Wines        Martinborough Nzl ","Amount":"-40","Category":""},
    {"Date": "44202","Account":"","Details":"Subway Dannevirke      Dannevirke    Nz ","Amount":"-14","Category":""},
    {"Date": "44201","Account":"","Details":"Bp 2Go Martinborough   Martinborough Nzl ","Amount":"-64.37","Category":""},
    {"Date": "44201","Account":"","Details":"Union Square Bistro &  Martinborough Nz ","Amount":"-61","Category":""},
    {"Date": "44200","Account":"","Details":"Bp 2Go Horotiu         Horotiu       Nzl ","Amount":"-62.21","Category":"Transport"},
    {"Date": "44200","Account":"","Details":"Bp Connect Wairakei    Taupo         Nzl ","Amount":"-14.19","Category":""},
    {"Date": "44200","Account":"","Details":"Caltex Tirau           Tirau         Nz ","Amount":"-13.28","Category":""},
    {"Date": "44199","Account":"","Details":"New World Remuera      Remuera       Nz ","Amount":"-52.55","Category":"Groceries"},
    {"Date": "44199","Account":"","Details":"Spotify                Stockholm     Se ","Amount":"-14.99","Category":"Subscriptions"},
    {"Date": "44199","Account":"","Details":"Mcdonalds Albany Frees Albany        Nz ","Amount":"-15.4","Category":""},
    {"Date": "44198","Account":"","Details":"La La Cafe             Auckland      Nzl ","Amount":"-12","Category":""},
    {"Date": "44198","Account":"","Details":"St Pierre'S St Lukes   Auckland      Nzl ","Amount":"-33.7","Category":""},
    {"Date": "44198","Account":"","Details":"Burger Fuel Parnell    Auckland      Nz ","Amount":"-25.2","Category":"Dining Out"},
    {"Date": "44198","Account":"","Details":"Nz Transport Agency    Palm Nth      Nz ","Amount":"-2.1","Category":""},
    {"Date": "44197","Account":"","Details":"Bp Connect Tauriko     Tauranga      Nzl ","Amount":"-62.42","Category":""},
    {"Date": "44197","Account":"","Details":"Tab New Zealand        Lower Hutt    Nzl ","Amount":"-102.15","Category":"General"},
    {"Date": "44197","Account":"","Details":"Pbc Cafe               Gisborne      Nz ","Amount":"-39.68","Category":""},
    {"Date": "44197","Account":"","Details":"Mcdonalds Whakatane    Whakatane     Nz ","Amount":"-10.3","Category":""},
    {"Date": "44278.41375","Account":"","Details":"St Heliers","Amount":"-860","Category":""},
    {"Date": "44286","Account":"","Details":"","Amount":"0.06","Category":"General"},
    {"Date": "44286","Account":"","Details":"","Amount":"-0.01","Category":"General"},
    {"Date": "44278.4107175926","Account":"","Details":"06-0613-0073624-04","Amount":"612","Category":""},
    {"Date": "44253","Account":"","Details":"","Amount":"0.04","Category":"General"},
    {"Date": "44253","Account":"","Details":"","Amount":"-0.01","Category":"General"},
    {"Date": "44225","Account":"","Details":"","Amount":"0.07","Category":"General"},
    {"Date": "44225","Account":"","Details":"","Amount":"-0.01","Category":"General"},
    {"Date": "44221.3843865741","Account":"","Details":"Erin Hasemore-Slieke","Amount":"-30","Category":""},
    {"Date": "44204.7598958333","Account":"","Details":"Callum Mitchelmore","Amount":"-135","Category":""},
    {"Date": "44198.6268865741","Account":"","Details":"Thomas Clark-Puia","Amount":"-30","Category":""},
    {"Date": "44198.3875578704","Account":"","Details":"Savannah O'Driscoll","Amount":"-26","Category":"General"},
    {"Date": "44275.4568171296","Account":"","Details":"Alex T Morrison","Amount":"-2331.34","Category":""},
    {"Date": "44286","Account":"","Details":"","Amount":"0.05","Category":"General"},
    {"Date": "44286","Account":"","Details":"","Amount":"-0.01","Category":"General"},
    {"Date": "44253","Account":"","Details":"","Amount":"0.05","Category":"General"},
    {"Date": "44253","Account":"","Details":"","Amount":"-0.01","Category":"General"},
    {"Date": "44225","Account":"","Details":"Transaction Fee","Amount":"-5","Category":""},
    {"Date": "44225","Account":"","Details":"","Amount":"0.19","Category":"General"},
    {"Date": "44225","Account":"","Details":"","Amount":"-0.03","Category":"General"},
    {"Date": "44207.6460069444","Account":"","Details":"Sharesies Nz","Amount":"-8000","Category":""},
    {"Date": "44284.7771180556","Account":"","Details":"O'Driscoll,Sa","Amount":"100","Category":"General"},
    {"Date": "44284.7834837963","Account":"","Details":"Miss S S O'Dr","Amount":"22.5","Category":"General"},
    {"Date": "44284.4185648148","Account":"","Details":"Marshall, C","Amount":"8.5","Category":"Subscriptions"},
    {"Date": "44278.4103472222","Account":"","Details":"06-0613-0073624-04","Amount":"-612","Category":""},
    {"Date": "44278.4067708333","Account":"","Details":"Hasemore-Slie","Amount":"447.5","Category":"General"},
    {"Date": "44278.3890277778","Account":"","Details":"O'Driscoll,Sa","Amount":"65","Category":"General"},
    {"Date": "44277.5463773148","Account":"","Details":"Auck Donations","Amount":"-20","Category":"General"},
    {"Date": "44275.4218287037","Account":"","Details":"06-0613-0073624-02","Amount":"-2331.34","Category":""},
    {"Date": "44275.4168518518","Account":"","Details":"06-0613-0073624-04","Amount":"-860","Category":""},
    {"Date": "44275.648125","Account":"","Details":"Jordan Fraser","Amount":"-97","Category":""},
    {"Date": "44277.3022222222","Account":"","Details":"Renay Yang","Amount":"-30.2","Category":"General"},
    {"Date": "44277.7548263889","Account":"","Details":"B K Larson, S L Hors","Amount":"50.16","Category":""},
    {"Date": "44276.89125","Account":"","Details":"O'Driscoll,Sa","Amount":"40","Category":"General"},
    {"Date": "44275.6494444444","Account":"","Details":"Miss S S O'Dr","Amount":"40","Category":"General"},
    {"Date": "44275.8924074074","Account":"","Details":"O'Driscoll,Sa","Amount":"25","Category":"General"},
    {"Date": "44274.587650463","Account":"","Details":"Mitchelmore Mr J R","Amount":"152.23","Category":""},
    {"Date": "44274.7021527778","Account":"","Details":"Deloitte","Amount":"3807.52","Category":"Salary/ Wage"},
    {"Date": "44273.5331828704","Account":"","Details":"Miss S S O'Dr","Amount":"50","Category":"General"},
    {"Date": "44272.5391898148","Account":"","Details":"Miss S S O'Dr","Amount":"45","Category":"General"},
    {"Date": "44271.1757638889","Account":"","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44271.4015625","Account":"","Details":"Cityfitness Group","Amount":"-40.23","Category":"Fitness/ Sport"},
    {"Date": "44271.7132060185","Account":"","Details":"Liam Broughton","Amount":"-121","Category":"General"},
    {"Date": "44271.7119791667","Account":"","Details":"Grace Brebner","Amount":"-106","Category":""},
    {"Date": "44269.0899884259","Account":"","Details":"Skycity - Cashiers M","Amount":"-150","Category":""},
    {"Date": "44265.8409606482","Account":"","Details":"Savannah O'Driscoll","Amount":"-24","Category":"General"},
    {"Date": "44262.6527199074","Account":"","Details":"Simon","Amount":"-75","Category":""},
    {"Date": "44263.8646180556","Account":"","Details":"Miss S S O'Dr","Amount":"85","Category":"General"},
    {"Date": "44263.9209953704","Account":"","Details":"Molloy, M","Amount":"19.25","Category":""},
    {"Date": "44258.9720949074","Account":"","Details":"4835-****-****-8369  Nf","Amount":"-52.15","Category":""},
    {"Date": "44258.9720949074","Account":"","Details":"4835-****-****-8369  Nf","Amount":"-52.15","Category":""},
    {"Date": "44258.4860648148","Account":"","Details":"St Heliers","Amount":"-400","Category":""},
    {"Date": "44258.4867824074","Account":"","Details":"St Heliers","Amount":"-120","Category":""},
    {"Date": "44258.4875231481","Account":"","Details":"06-0613-0073624-04","Amount":"400","Category":""},
    {"Date": "44258.769224537","Account":"","Details":"Miss S S O'Dr","Amount":"186","Category":"General"},
    {"Date": "44258.5463078704","Account":"","Details":"Mitchelmore Mr J R","Amount":"173","Category":""},
    {"Date": "44258.9720949074","Account":"","Details":"4835-****-****-8369  Nf","Amount":"52.15","Category":""},
    {"Date": "44258.9720949074","Account":"","Details":"4835-****-****-8369  Nf","Amount":"52.15","Category":""},
    {"Date": "44256.3964467593","Account":"","Details":"St Heliers","Amount":"-200","Category":""},
    {"Date": "44256.3957638889","Account":"","Details":"St Heliers Rent","Amount":"-200","Category":""},
    {"Date": "44256.4088657407","Account":"","Details":"St Heliers","Amount":"-60","Category":""},
    {"Date": "44256.3968981481","Account":"","Details":"06-0613-0073624-04","Amount":"400","Category":""},
    {"Date": "44256.4254976852","Account":"","Details":"Marshall, C","Amount":"8.5","Category":"Subscriptions"},
    {"Date": "44252.8691898148","Account":"","Details":"Acu  Ccl1000 Valley Ccl","Amount":"-100","Category":""},
    {"Date": "44253.5881481481","Account":"","Details":"Trading Trust Bank A","Amount":"56.58","Category":""},
    {"Date": "44249.9320601852","Account":"","Details":"Kingsclare Stable","Amount":"-114.41","Category":"General"},
    {"Date": "44249.9327546296","Account":"","Details":"Margaret Park","Amount":"-84.25","Category":""},
    {"Date": "44249.9305439815","Account":"","Details":"Premier Horse","Amount":"-1.87","Category":""},
    {"Date": "44249.588125","Account":"","Details":"Auck Donations","Amount":"-20","Category":"General"},
    {"Date": "44246.9647800926","Account":"","Details":"","Amount":"-15","Category":"General"},
    {"Date": "44249.6607638889","Account":"","Details":"Mitchelmore Mr J R","Amount":"600","Category":""},
    {"Date": "44249.3182291667","Account":"","Details":"New Zealand R","Amount":"150","Category":"General"},
    {"Date": "44246.9708449074","Account":"","Details":"4835-****-****-8369  Df","Amount":"-27.99","Category":""},
    {"Date": "44246.9708449074","Account":"","Details":"4835-****-****-8369  Df","Amount":"-24.9","Category":""},
    {"Date": "44246.9708449074","Account":"","Details":"4835-****-****-8369  Df","Amount":"-5.2","Category":""},
    {"Date": "44246.6773032407","Account":"","Details":"06-0613-0073624-04","Amount":"-800","Category":""},
    {"Date": "44246.912662037","Account":"","Details":"Alex T Morison","Amount":"-43.9","Category":""},
    {"Date": "44246.5877430556","Account":"","Details":"Deloitte","Amount":"3807.52","Category":"Salary/ Wage"},
    {"Date": "44245.620775463","Account":"","Details":"Barfoot & Thompson L","Amount":"-1100","Category":""},
    {"Date": "44245.8810648148","Account":"","Details":"Erin Hasemore-Slieke","Amount":"-46.4","Category":""},
    {"Date": "44245.6604513889","Account":"","Details":"Mitchelmore Mr J R","Amount":"537.59","Category":""},
    {"Date": "44245.6275115741","Account":"","Details":"06-0613-0073624-05","Amount":"200","Category":""},
    {"Date": "44243.1742013889","Account":"","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44243.4017939815","Account":"","Details":"Cityfitness Group","Amount":"-51.96","Category":"Fitness/ Sport"},
    {"Date": "44242.9768865741","Account":"","Details":"4835-****-****-8369  Df","Amount":"-80.48","Category":""},
    {"Date": "44241.755775463","Account":"","Details":"Green & Grocery Worl","Amount":"-20.9","Category":""},
    {"Date": "44240.4349884259","Account":"","Details":"Ym Kim","Amount":"-41","Category":""},
    {"Date": "44240.9101041667","Account":"","Details":"Sam Yoon","Amount":"-20","Category":""},
    {"Date": "44240.9104861111","Account":"","Details":"Liam Broughton","Amount":"-12","Category":"General"},
    {"Date": "44242.3373958333","Account":"","Details":"New Zealand R","Amount":"150","Category":"General"},
    {"Date": "44239.9296643519","Account":"","Details":"Visa Debit Card Fee","Amount":"-10","Category":""},
    {"Date": "44239.4629282407","Account":"","Details":"Mitchelmore Mr J R","Amount":"1582.59","Category":""},
    {"Date": "44239.4390740741","Account":"","Details":"06-0613-0073624-05","Amount":"400","Category":""},
    {"Date": "44238.2988310185","Account":"","Details":"Barfoot & Thompson L","Amount":"-1100","Category":""},
    {"Date": "44237.7538310185","Account":"","Details":"Emma Clarke","Amount":"-300","Category":""},
    {"Date": "44237.8010300926","Account":"","Details":"O'Driscoll,Sa","Amount":"150","Category":"General"},
    {"Date": "44233.7120601852","Account":"","Details":"Savannah O'Driscoll","Amount":"-40","Category":"General"},
    {"Date": "44232.6293865741","Account":"","Details":"S J Molloy","Amount":"1036","Category":""},
    {"Date": "44232.7873958333","Account":"","Details":"Miss S S O'Dr","Amount":"20","Category":"General"},
    {"Date": "44231.0622106481","Account":"","Details":"Molloy, M","Amount":"1036.6","Category":""},
    {"Date": "44231.7180439815","Account":"","Details":"Hasemore-Slie","Amount":"114","Category":"General"},
    {"Date": "44230.6556481481","Account":"","Details":"James Mitchelmore","Amount":"-5","Category":""},
    {"Date": "44228.9734837963","Account":"","Details":"4835-****-****-8369  Df","Amount":"-15.8","Category":""},
    {"Date": "44228.4536805556","Account":"","Details":"Savannah O'Driscoll","Amount":"-23","Category":"General"},
    {"Date": "44228.7326157407","Account":"","Details":"Miss S S O'Dr","Amount":"20","Category":"General"},
    {"Date": "44225","Account":"","Details":"Unarranged Overdraft Fee","Amount":"-3","Category":""},
    {"Date": "44225","Account":"","Details":"","Amount":"-0.11","Category":"General"},
    {"Date": "44223.3172337963","Account":"","Details":"New Zealand R","Amount":"277.32","Category":"General"},
    {"Date": "44223.5463888889","Account":"","Details":"Trading Trust Bank A","Amount":"40","Category":""},
    {"Date": "44223.4120833333","Account":"","Details":"Marshall, C","Amount":"8.5","Category":"Subscriptions"},
    {"Date": "44221.921400463","Account":"","Details":"Miss S S O'Dr","Amount":"30","Category":"General"},
    {"Date": "44219.7841319444","Account":"","Details":"Tab New Zealand","Amount":"-103","Category":"General"},
    {"Date": "44221.4429861111","Account":"","Details":"Barfoot & Thompson L","Amount":"-5500","Category":""},
    {"Date": "44218.9592939815","Account":"","Details":"Wbc  W1Ar143 Wbc Sky City","Amount":"-120","Category":""},
    {"Date": "44221.4351736111","Account":"","Details":"Harris A R Mo","Amount":"3735","Category":""},
    {"Date": "44217.6655787037","Account":"","Details":"Savannah O'Driscoll","Amount":"-125","Category":"General"},
    {"Date": "44217.5879976851","Account":"","Details":"Awop","Amount":"35.5","Category":""},
    {"Date": "44216.5879861111","Account":"","Details":"Auck Donations","Amount":"-20","Category":"General"},
    {"Date": "44216.3617939815","Account":"","Details":"06-0613-0073624-05","Amount":"-1000","Category":""},
    {"Date": "44216.3604050925","Account":"","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44215.1688310185","Account":"","Details":"Tauarua Funeral Serv","Amount":"-100","Category":"General"},
    {"Date": "44215.6809722222","Account":"","Details":"Mr A T Mitche","Amount":"500","Category":""},
    {"Date": "44215.7233564815","Account":"","Details":"Deloitte","Amount":"2514.86","Category":"Salary/ Wage"},
    {"Date": "44215.1688310185","Account":"","Details":"Tauarua Fune - (Reversal)","Amount":"100","Category":""},
    {"Date": "44214.4128356481","Account":"","Details":"Cityfitness Group","Amount":"-51.96","Category":"Fitness/ Sport"},
    {"Date": "44211.6812037037","Account":"","Details":"Fisher J R","Amount":"35","Category":"General"},
    {"Date": "44209.4119560185","Account":"","Details":"Miss S S O'Dr","Amount":"200","Category":"General"},
    {"Date": "44208.7116666666","Account":"","Details":"Rainbow Superette","Amount":"-9","Category":""},
    {"Date": "44207.9738078704","Account":"","Details":"4835-****-****-8369  Nf","Amount":"-11.27","Category":""},
    {"Date": "44206.9029398148","Account":"","Details":"O'Driscoll,Sa","Amount":"469","Category":"General"},
    {"Date": "44207.2657060185","Account":"","Details":"Mr C J Mitche","Amount":"135","Category":""},
    {"Date": "44207.4171064815","Account":"","Details":"Ford, S W","Amount":"41.79","Category":""},
    {"Date": "44206.8049652778","Account":"","Details":"Clark-Puia,Th","Amount":"29","Category":""},
    {"Date": "44203.9482175926","Account":"","Details":"Fraser,Jordan","Amount":"36.13","Category":""},
    {"Date": "44202.9270138889","Account":"","Details":"Remuera Flat","Amount":"-66","Category":"Rent/ Mortgage"},
    {"Date": "44201.985462963","Account":"","Details":"4835-****-****-8369  Nf","Amount":"-29.2","Category":""},
    {"Date": "44201.6005555556","Account":"","Details":"Peter Ezes","Amount":"-22","Category":""},
    {"Date": "44201.3181018519","Account":"","Details":"New Zealand R","Amount":"470","Category":"General"},
  ];

  // PROCESS TRANSACTIONS

  var processedTransactions = [];

  function processDate(date) {
    var utc_days  = Math.floor(date - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
    return date_info
  }

  function processAmount(amount) {
    var processedAmount = Number(amount);
    if (processedAmount < 0) {
      processedAmount = processedAmount * -1;
    }
    return processedAmount
  }

  function processCategory(category) {
    if (category == "") {
      return "Not Coded"
    } else {
      return category
    }
  }

  var transactionID = 1;

  function processTransaction(transaction) {
    transaction.TransactionID = transactionID
    transaction.Amount = processAmount(transaction.Amount);

    var processedDate = processDate(transaction.Date);
    transaction.Date = processedDate;

    transaction.Category = processCategory(transaction.Category);

    processedTransactions.push(transaction);
    transactionID = transactionID + 1
  }

  rawTransactions.forEach(processTransaction);

  // SUMMARISE TRANSACTION CATEGORIES

  var categoryStats = {}
  var spendTypeStats = {}

  var HCFilterValues = {
    'filterThisMonth': {'start': '2021-03-01',  'end': '2021-03-31', 'multiplier': 1},
    'filterLastMonth': {'start': '2021-02-01',  'end': '2021-02-28', 'multiplier': 1},
    'filterLast3Months': {'start': '2021-01-01',  'end': '2021-03-31', 'multiplier': 3},
    'filterLastYear': {'start': '2020-03-31',  'end': '2021-03-31', 'multiplier': 12},
  } // Hardcoded filter dates

  function sumCategory(category, transactions) {
    var categoryAmount = 0
    transactions.forEach((transaction) => {
      if (transaction.Category == category){
        categoryAmount = categoryAmount + transaction.Amount;
      }
    })
    return Math.round(categoryAmount);
  }

  function sumSpendTypes(type) {
    var typeAmmount = 0;
    for (const [key, value] of Object.entries(categoryMatcher)) {
      if (value == type) {
        if (categoryStats[key]) {
          typeAmmount = typeAmmount + categoryStats[key];
        }
      }
    }
    return Math.round(typeAmmount);
  }

  function filterTransactions(startDateString, endDateString, filterCategory) {

    var start = new Date(startDateString).getTime();
    var end = new Date(endDateString).getTime()
    var result = processedTransactions.filter(d => {
      var time = new Date(d.Date).getTime();
      if (filterCategory) {
        var category = d.Category;
        return (start <= time && time <= end && category == filterCategory);
      } else {
        return (start <= time && time <= end);
      }
     });
    return result;
  }
  var dateFilter = 'filterThisMonth';
  var filteredTransactions = filterTransactions(HCFilterValues[dateFilter].start, HCFilterValues[dateFilter].end, null);
  console.log(filteredTransactions);

  function buildCategoryStats(filteredTransactions) {

    expenseCategories.forEach((category) => {
      categoryStats[category] = sumCategory(category, filteredTransactions)
    });

    spendTypes.forEach((type) => {
      spendTypeStats[type] = sumSpendTypes(type);
    })
  }
  populateTransactions(filteredTransactions);
  buildCategoryStats(filteredTransactions);


  // SUMMARISE GOALS

  var goalTypeStats = {};

  function sumGoalTypes(multiplier) {
    spendTypes.forEach((type) => {
      var typeAmmount = 0;
      for (const [key, value] of Object.entries(categoryMatcher)) {
        if (value == type) {
          if (categoryStats[key]) {
            typeAmmount = typeAmmount + categoryGoals[key];
          }
        }
      }
      goalTypeStats[type] = typeAmmount * multiplier;
    });
    goalTypeStats["Savings"] = 500 * multiplier;
  }
  sumGoalTypes(1);

  // UPDATE CHARTS

  function updateSpendTypesChart() {
    var plannedSpendData = [],
        actualSpendData = [],
        totalPlanned = 0,
        totalActual = 0,
        spendDifference = 0;
    spendTypes.forEach((type) => {
      var goalType = goalTypeStats[type],
          spendType = spendTypeStats[type];
      totalPlanned = totalPlanned + goalType;
      totalActual = totalActual + spendType;
      plannedSpendData.push(goalType);
      actualSpendData.push(spendType);
    })
    spendDifference = totalPlanned - totalActual;
    if (spendDifference >= 0) {
      plannedSpendData.push(0);
      actualSpendData.push(spendDifference);
    } else {
      plannedSpendData.push(spendDifference * -1);
      actualSpendData.push(0);
    }
    chartTypeSpend.data.datasets[0].data.pop(0);
    chartTypeSpend.data.datasets[1].data.pop(0);
    chartTypeSpend.data.datasets[0].data = actualSpendData;
    chartTypeSpend.data.datasets[1].data = plannedSpendData;
    chartTypeSpend.update();
  }

  updateSpendTypesChart();

  var categoryColours = [
    "#5899da",
    "#e8743b",
    "#19a979",
    "#ed4a7b",
    "#945ecf",
    "#13a4b4",
    "#525df4",
    "#bf399e",
    "#6c8893",
    "#ee6868",
    "#2f6497",
    "#eacf42",
    "#3f51b5"
  ];

  function matchCategoryColours() {
    var matchedColours = {},
        categoriesLabels = [],
        count = 0;
    expenseCategories.forEach((category) => {
      categoriesLabels.push(category);
    })
    const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
    categoriesLabels.forEach((label) => {
      matchedColours[label] = nthElement(categoryColours, count);
      count = count + 1;
    })
    return matchedColours
  }

  var colourRef = matchCategoryColours();

  function buildCategoryLabels(labels, matchedColours) {
    var html1 = '<svg fill="',
        html2 = '" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5"/></svg> ',
        legendDiv = document.getElementById("categoryLabels"),
        mySpendLegendDiv = document.getElementById("mySpendCategoryLabels");
    legendDiv.innerHTML = "";
    mySpendLegendDiv.innerHTML = "";
    labels.forEach((label) => {
      var element = document.createElement("span");
      element.classList.add("chart-legend");
      element.innerHTML = html1.concat(matchedColours[label], html2, label);
      var mySpendElement = document.createElement("span");
      mySpendElement.classList.add("chart-legend");
      mySpendElement.innerHTML = html1.concat(matchedColours[label], html2, label);
      legendDiv.appendChild(element);
      legendDiv.appendChild(document.createElement('br'));
      mySpendLegendDiv.appendChild(mySpendElement);
      mySpendLegendDiv.appendChild(document.createElement('br'));
      
    })
  }

  function updateCategoriesChart() {
    var categoriesData = [],
        categoriesLabels = [];

    expenseCategories.forEach((category) => {
      categoriesData.push(categoryStats[category]);
      categoriesLabels.push(category);
    })

    chartCategorySpend.data.labels.pop()
    chartCategorySpend.data.datasets[0].data.pop(0);
    chartCategorySpend.data.labels = categoriesLabels;
    chartCategorySpend.data.datasets[0].backgroundColor = categoryColours;
    chartCategorySpend.data.datasets[0].data = categoriesData;
    chartCategorySpend.update();
    mySpendChartCategorySpend.data = chartCategorySpend.data;
    mySpendChartCategorySpend.update();

    buildCategoryLabels(categoriesLabels, colourRef);

  }

  updateCategoriesChart();

  function updateSpendCategoryProgress(multiplier) {
    var count = 1;
    var table = document.getElementById("categoriesTable");
    table.innerHTML = "";
    var rowHTML = ""
    var htmlStart = '<tr>'
    var html1 = '<td class="net-spend-category" width="43%" height="140px"><div class="px-3"><div class="progress"><div class="progress-bar" role="progressbar" style="width: '
    var html1a = '%" aria-valuenow="'
    var html1b = '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="p-1"><table><tbody><tr><td><svg width="60" height="60" fill="'
    var html1c = '" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30"/></svg></td><td width="5px"></td><td><span class="net-spend-category-title"> '
    var html2 = '</span><br><span class="net-spend-category-value"> $'
    var html3 = ' / $'
    var html4 = '</span><br><span class="net-spend-category-percent"> '
    var html4a = '%</span></td></tr></tbody></table></div></div></td>'
    var htmlMiddle = '<td width="14%"></td>'
    var htmlEnd = '</tr><tr height="25px"></tr>'
    // var colourRef = matchCategoryColours();
    expenseCategories.forEach((category) => {
      if (category != 'Not Coded') {
        var percent = '-';
        var percentProgressBar = 0;
        if (categoryGoals[category] * multiplier > 0) {
          percent = Math.round((categoryStats[category] / (categoryGoals[category] * multiplier)) * 100);
          percentProgressBar = Math.min(percent, 100);
        }
  
        if (count == 1) {
          rowHTML = rowHTML.concat(htmlStart, html1, percentProgressBar, html1a, percentProgressBar, html1b, colourRef[category], html1c, category, html2, categoryStats[category], html3, categoryGoals[category]  * multiplier, html4, percent, html4a, htmlMiddle);
          count = 2;
        } else {
          rowHTML = rowHTML.concat(html1, percentProgressBar, html1a, percentProgressBar, html1b, colourRef[category], html1c, category, html2, categoryStats[category], html3, categoryGoals[category]  * multiplier, html4, percent, html4a, htmlEnd);
          count = 1;
        }
      }
    })
    var body = document.createElement("tbody");
    body.innerHTML = rowHTML;
    table.appendChild(body);
  }
  updateSpendCategoryProgress(1);

  // Filtering

  var filterButtons = document.getElementsByName("filter");
  function filterButtonsUpdate(filter) {
    filterButtons.forEach((button) => {
      if (button.id != filter) {
        button.classList.remove('btn-active');
      } else {
        button.classList.add('btn-active');
      }
    });
  }

  function filterData(dateFilter, category) {
    var startDate = HCFilterValues[dateFilter].start,
        endDate = HCFilterValues[dateFilter].end,
        multiplier = HCFilterValues[dateFilter].multiplier;

    filteredTransactions = filterTransactions(startDate, endDate, category);

    buildCategoryStats(filteredTransactions);
    populateTransactions(filteredTransactions);
    sumGoalTypes(multiplier);
    updateSpendTypesChart();
    updateCategoriesChart();
    updateSpendCategoryProgress(multiplier);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
      var id = e.target.id;
      dateFilter = id;
      filterButtonsUpdate(id);
      // var categoryValue = document.getElementById('categorySelect').value;
      // if (categoryValue == 'All') {
      //   categoryValue = null;
      // }
      filterData(dateFilter, null);
    });
  });

  // function populateCategorySelect(expenseCategories) {
  //   var categorySelectElement = document.getElementById('categorySelect');
  //   expenseCategories.forEach((catgory) => {
  //     var option = document.createElement('Option');
  //     option.value = catgory;
  //     option.innerHTML = catgory;
  //     categorySelectElement.appendChild(option);
  //   })
  // }

  // var filterSelect = document.getElementById('categorySelect');

  // filterSelect.addEventListener('change', function(e) {
  //   console.log(filterButtons);
  //   console.log(dateFilter, filterSelect.value);
  //   filterData(dateFilter, filterSelect.value);
  // })

  // populateCategorySelect(expenseCategories);

  function populateTransactions(filteredTransactions) {
    document.getElementById('transactionsTable').innerHTML = '';
    var options = '';
    expenseCategories.forEach((category) => {
      var option = '<option value="' + category + '">' + category + '</option>'
      options = options.concat(option);
    });
    filteredTransactions.forEach((transaction) => {
      var row = document.createElement('tr');
      var dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      var date = transaction.Date.toLocaleDateString('en-NZ', dateOptions);
      var transactionID = transaction.TransactionID.toString();
      var selectID = 'mySpendSelect'.concat(transactionID);
      var catSelect1 = '<select id=' + selectID + ' name="codeSelect" class="form-select shadow-none">';
      var catSelect = catSelect1.concat(options, '</select>');
      var content = '<td>'+ date + '</td><td>'+ transaction.Details + '</td><td>$ '+ transaction.Amount.toFixed(2) + '</td><td>'+ catSelect + '</td>';
      row.innerHTML = content;
      document.getElementById('transactionsTable').appendChild(row);
      document.getElementById(selectID).value = transaction.Category;

      var categorySelect = document.getElementById(selectID);

      categorySelect.addEventListener('change', function(e) {
        console.log("Change single category");
        updateSingleTransaction(transaction.TransactionID, categorySelect.value);
        filterData(dateFilter, null);
        populateCodeSpendRows()
      })


    });
  }

  function populateCodeSpendRows() {
    console.log('code spend rows');
    document.getElementById('codeSpendBody').innerHTML = '';
    var body = document.getElementById('codeSpendBody');
    var headerRow = document.createElement('tr');
    headerRow.classList.add("code-headings");
    headerRow.innerHTML = '<tr><td class="col-lg-4 px-4"><l>Check your expenses...</l></td><td class="col-lg-4 px-4"><l>Code them here...</l></td><td class="col-lg-2 px-4"><l>Lock it in!</l></td></tr>';
    body.appendChild(headerRow);
    var options = '<option selected disabled>Select Category</option>';
    var catSelect2 = '</select>';
    expenseCategories.forEach((category) => {
      var option = '<option value="' + category + '">' + category + '</option>'
      options = options.concat(option);
    });

    processedTransactions.forEach((transaction) => {
      if (transaction.Category === 'Not Coded')  {
        var row = document.createElement('tr');
        var transactionID = transaction.TransactionID.toString();
        row.setAttribute('id', transactionID)
        var dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        var date = transaction.Date.toLocaleDateString('en-NZ', dateOptions);
        var selectID = 'select'.concat(transactionID);
        var buttonID = 'button'.concat(transactionID);
        var catSelect1 = '<select id=' + selectID + ' name="codeSelect" class="form-select code-select shadow-none my-4" aria-label="Default select example">';
        var catSelect = catSelect1.concat(options, catSelect2);
        var td1 = '<tr class="code-content"><td><div><table width="90%" class="code-inner m-2 shadow-sm"><tr></tr><td class="p-3">'+ date + '<br>' + transaction.Details + '<br><div class="code-amount">$ '+ transaction.Amount.toFixed(2) + '</div></td></tr></table></div></td><td><div><table width="90%" class="code-inner m-2 shadow-sm"><tr><td class="p-3">' + catSelect + '</td></tr></table></div></td><td><div" class="p-3"><button id=' + buttonID + ' name="codeButton" type="button" class="btn btn-outline-success btn-save-code m-4" disabled>✓</button></div></td></tr>';
        row.innerHTML = td1;
        body.appendChild(row);

        var categorySelect = document.getElementById(selectID);
        var categorySaveButton = document.getElementById(buttonID);

        categorySelect.addEventListener('change', function(e) {
          categorySaveButton.disabled = false;
          console.log("Change category");
        })

        categorySaveButton.addEventListener('click', function(e) {
          console.log("Save category");
          updateMultipleTransactions(transaction.Details, categorySelect.value);
          filterData(dateFilter, null);
        })
      }
    })
  }

  function updateMultipleTransactions(transactionName, value) {
    processedTransactions.forEach((transaction) => {
      if (transaction.Details === transactionName && transaction.Category === 'Not Coded')  {
        transaction.Category = value;
        document.getElementById(transaction.TransactionID).remove();
      }
    });
  }

  function updateSingleTransaction(transactionID, value) {
    processedTransactions.forEach((transaction) => {
      if (transaction.TransactionID === transactionID)  {
        transaction.Category = value;
      }
    });
  }

  //My Budget Page

  function populateBudgetTables() {

    var livingCostsTable = document.getElementById("livingCostsTable");
    var luxurySpendTable = document.getElementById("luxurySpendTable");

    var livingCostsRowHTML = '';
    var LuxurySpendRowHTML = '';
    var htmlStart = '<tr>';
    var html1 = '<td width="45%"><table><tr><td><div class="px-1"><svg width="60" height="60" fill="';
    //colour code
    var html2 = '" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30"/></svg></div></td><td><b class="ms-1">';
    //category name
    var html3 = '</b><div class="input-group px-1"><div class="input-group-prepend"><span class="input-group-text" id="">$</span></div><input id="';
    //input category ID
    var html4 = '" type="number" min="0" class="form-control" value='
    //category value
    var html5 = '></div></td><td><div class="px-1"><b>Per</b><select id="';
    //select frequency ID
    var html6 = '" class="form-select shadow-none budget-select" aria-label="Income Frequency"><option value="Week" selected>Week</option><option value="Fortnight">Fortnight</option><option value="Month">Month</option><option value=""Year>Year</option></select></div></td></tr></table></td>';
    var htmlMiddle = '<td width="10%"></td>';
    var htmlEnd = '</tr><br>'
    
    
    var LCcount = 1;
    var LScount = 1;

    expenseCategories.forEach((category) => {
      var inputID = category;
        var selectID = category.concat('Select');
      if (categoryMatcher[category] == 'Living Costs') {

        if (LCcount == 1) {
          livingCostsRowHTML = livingCostsRowHTML.concat(htmlStart, html1, colourRef[category], html2, category, html3, inputID, html4, categoryGoals[category], html5, selectID, html6, htmlMiddle);
          LCcount = 2;
        } else {
          livingCostsRowHTML = livingCostsRowHTML.concat(html1, colourRef[category], html2, category, html3, inputID, html4, categoryGoals[category], html5, selectID, html6, htmlEnd);
          LCcount = 1;
        }
      }
      if (categoryMatcher[category] == 'Luxury Spend') {

        if (LScount == 1) {
          LuxurySpendRowHTML = LuxurySpendRowHTML.concat(htmlStart, html1, colourRef[category], html2, category, html3, inputID, html4, categoryGoals[category], html5, selectID, html6, htmlMiddle);
          LScount = 2;
        } else {
          LuxurySpendRowHTML = LuxurySpendRowHTML.concat(html1, colourRef[category], html2, category, html3, inputID, html4, categoryGoals[category], html5, selectID, html6, htmlEnd);
          LScount = 1;
        }
      }
    })
    var LCbody = document.createElement("tbody");
    LCbody.innerHTML = livingCostsRowHTML;
    livingCostsTable.appendChild(LCbody);

    var LSbody = document.createElement("tbody");
    LSbody.innerHTML = LuxurySpendRowHTML;
    luxurySpendTable.appendChild(LSbody);
  }
  populateBudgetTables();

  populateCodeSpendRows();
  // populateCategorySelect(expenseCategories);
  // populateTransactions();
})()
// id="categorySelect"

