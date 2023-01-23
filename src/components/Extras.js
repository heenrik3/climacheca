const countries = {
  AF: 'Afeganistão',
  AL: 'Albânia',
  DZ: 'Argélia',
  AS: 'Samoa Americana',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antártica',
  AG: 'Antígua e Barbuda',
  AR: 'Argentina',
  AM: 'Armênia',
  AW: 'Aruba',
  AU: 'Austrália',
  AT: 'Áustria',
  AZ: 'Azerbaijão',
  BS: 'Bahamas',
  BH: 'Bahrein',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Bielorrússia',
  BE: 'Bélgica',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Butão',
  BO: 'Bolívia',
  BQ: 'Bonaire, Sint Eustatius e Saba',
  BA: 'Bósnia e Herzegovina',
  BW: 'Botswana',
  BV: 'Ilha Bouvet',
  BR: 'Brasil',
  IO: 'Território Britânico do Oceano Índico',
  BN: 'Brunei Darussalam',
  BG: 'Bulgária',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CV: 'Cabo Verde',
  KH: 'Camboja',
  CM: 'Camarões',
  CA: 'Canadá',
  KY: 'Ilhas Cayman',
  CF: 'República Centro-Africana',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Ilha do Natal',
  CC: 'Ilhas Cocos',
  CO: 'Colômbia',
  KM: 'Comores',
  CD: 'Congo',
  CG: 'Congo',
  CK: 'Ilhas Cook',
  CR: 'Costa Rica',
  HR: 'Croácia',
  CU: 'Cuba',
  CW: 'Curaçao',
  CY: 'Chipre',
  CZ: 'Czechia',
  CI: 'Costa do Marfim',
  DK: 'Dinamarca',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'República Dominicana',
  EC: 'Equador',
  EG: 'Egito',
  SV: 'El Salvador',
  GQ: 'Guiné Equatorial',
  ER: 'Eritreia',
  EE: 'Estônia',
  SZ: 'Eswatini',
  ET: 'Etiópia',
  FK: 'Ilhas Malvinas',
  FO: 'Ilhas Faroé',
  FJ: 'Fiji',
  FI: 'Finlândia',
  FR: 'França',
  GF: 'Guiana Francesa',
  PF: 'Polinésia Francesa',
  TF: 'Territórios Franceses do Sul',
  GA: 'Gabão',
  GM: 'Gâmbia',
  GE: 'Geórgia',
  DE: 'Alemanha',
  GH: 'Gana',
  GI: 'Gibraltar',
  GR: 'Grécia',
  GL: 'Groenlândia',
  GD: 'Granada',
  GP: 'Guadalupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guiné',
  GW: 'Guiné-Bissau',
  GY: 'Guiana',
  HT: 'Haiti',
  HM: 'Ilha Heard e Ilhas McDonald',
  VA: 'Santa Sé',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungria',
  IS: 'Islândia',
  IN: 'Índia',
  ID: 'Indonésia',
  IR: 'Irã',
  IQ: 'Iraque',
  IE: 'Irlanda',
  IM: 'Ilha de Man',
  IL: 'Israel',
  IT: 'Itália',
  JM: 'Jamaica',
  JP: 'Japão',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Cazaquistão',
  KE: 'Quênia',
  KI: 'Kiribati',
  KP: 'Coreia Do Norte',
  KR: 'Coreia Do Sul',
  KW: 'Kuwait',
  KG: 'Quirguistão',
  LA: 'República Democrática Popular do Laos',
  LV: 'Letônia',
  LB: 'Líbano',
  LS: 'Lesoto',
  LR: 'Libéria',
  LY: 'Líbia',
  LI: 'Liechtenstein',
  LT: 'Lituânia',
  LU: 'Luxemburgo',
  MO: 'Macau',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malásia',
  MV: 'Maldivas',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Ilhas Marshall',
  MQ: 'Martinica',
  MR: 'Mauritânia',
  MU: 'Maurício',
  YT: 'Mayotte',
  MX: 'México',
  FM: 'Micronésia',
  MD: 'Moldávia',
  MC: 'Monaco',
  MN: 'Mongólia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Marrocos',
  MZ: 'Moçambique',
  MM: 'Mianmar',
  NA: 'Namíbia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Holanda',
  NC: 'Nova Caledônia',
  NZ: 'Nova Zelândia',
  NI: 'Nicarágua',
  NE: 'Níger',
  NG: 'Nigéria',
  NU: 'Niue',
  NF: 'Ilha Norfolk',
  MP: 'Ilhas Marianas do Norte',
  NO: 'Noruega',
  OM: 'Omã',
  PK: 'Paquistão',
  PW: 'Palau',
  PS: 'Estado da Palestina',
  PA: 'Panamá',
  PG: 'Papua Nova Guiné',
  PY: 'Paraguai',
  PE: 'Peru',
  PH: 'Filipinas',
  PN: 'Pitcairn',
  PL: 'Polônia',
  PT: 'Portugal',
  PR: 'Porto Rico',
  QA: 'Qatar',
  MK: 'República da Macedônia do Norte',
  RO: 'Romênia',
  RU: 'Rússia',
  RW: 'Ruanda',
  RE: 'Reunião',
  BL: 'São Bartolomeu',
  SH: 'Santa Helena, Ascensão e Tristão da Cunha',
  KN: 'São Cristóvão e Névis',
  LC: 'Santa Lúcia',
  MF: 'Saint Martin',
  PM: 'São Pedro e Miquelão',
  VC: 'São Vicente e Granadinas',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'São Tomé e Príncipe',
  SA: 'Arábia Saudita',
  SN: 'Senegal ',
  RS: 'Sérvia',
  SC: 'Seychelles',
  SL: 'Serra Leoa',
  SG: 'Singapura',
  SX: 'Sint Maarten',
  SK: 'Eslováquia',
  SI: 'Eslovênia',
  SB: 'Ilhas Salomão',
  SO: 'Somália',
  ZA: 'África do Sul',
  GS: 'Ilhas Geórgia do Sul e Sandwich do Sul',
  SS: 'Sudão do Sul',
  ES: 'Espanha',
  LK: 'Sri Lanka',
  SD: 'Sudão',
  SR: 'Suriname',
  SJ: 'Svalbard e Jan Mayen',
  SE: 'Suécia',
  CH: 'Suíça',
  SY: 'República Árabe Síria',
  TW: 'Taiwan',
  TJ: 'Tajiquistão',
  TZ: 'Tanzânia, República Unida da',
  TH: 'Tailândia',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad e Tobago',
  TN: 'Tunísia',
  TR: 'Turquia',
  TM: 'Turcomenistão',
  TC: 'Ilhas Turks e Caicos',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ucrânia',
  AE: 'Emirados Árabes Unidos',
  GB: 'Reino Unido',
  UM: 'Ilhas dos Estados Unidos',
  US: 'Estados Unidos',
  UY: 'Uruguai',
  UZ: 'Uzbequistão',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Vietnam',
  VG: 'Ilhas Virgens (britânicas)',
  VI: 'Ilhas Virgens (EUA)',
  WF: 'Wallis e Futuna',
  EH: 'Saara Ocidental',
  YE: 'Yemen',
  ZM: 'Zâmbia',
  ZW: 'Zimbábue',
  AX: 'Ilhas Åland',
}

const climates = {
  clouds: 'Nublado',
  clear: 'Céu Limpo',
  fog: 'Névoa',
  mist: 'Neblina',
  haze: 'Névoa',
  rain: 'Chuvoso',
  drizzle: 'Garoa',
}

export function toCelsius(temp) {
  return Math.round(temp - 273.15)
}

export function parseAPIData(data) {
  const climate = climates[data.weather[0].main.toLowerCase()]
  const description = climate ? climate : ''
  const art = climate
    ? `${data.weather[0].main.toLowerCase()}.png`
    : 'clouds.png'

  return {
    coords: { ...data.coord },
    name: data.name,
    country: countries[data.sys.country],
    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('pt-BR'),
    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR'),
    description: description,
    art: art,
    visibility: data.visibility,
    wind: data.wind.speed,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    temperature: {
      now: toCelsius(data.main.temp),
      min: toCelsius(data.main.temp_min),
      max: toCelsius(data.main.temp_max),
      feels: toCelsius(data.main.feels_like),
    },
  }
}

async function fetchData(url) {
  try {
    const res = await fetch(url)

    const data = await res.json()

    if (data.cod === '404') throw new Error('Not Found')

    // console.log(data)

    return data
  } catch (err) {
    console.clear()
    return false
  }
}

export async function fetchByPosition(pos) {
  const url = process.env.REACT_APP_API_COORDS.replace(
    '<LAT>',
    pos.coords.latitude
  ).replace('<LON>', pos.coords.longitude)

  const data = await fetchData(url)

  return data ? parseAPIData(data) : false
}

export async function fetchByCityName(city) {
  const url = process.env.REACT_APP_API_CITY.replace('CITY', city)

  const data = await fetchData(url)

  return data ? parseAPIData(data) : false
}
