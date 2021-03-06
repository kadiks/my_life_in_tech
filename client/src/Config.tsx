// interface Settings {
//   API_URL: string;
//   API_ENDPOINT: string;
//   API_EXTENSION: string;
//   GA_TRACKING_ID: string;
//   VERSION: string;
// }

const dev = {
  API_URL: 'http://localhost:3000',
  API_ENDPOINT: '/api',
  API_EXTENSION: '.json',
  GA_TRACKING_ID: '',
  VERSION: '0.2.0',
  // IMAGE_SOURCE: 'nd'
};

const test = {
  // API_URL: 'http://192.168.1.48:3001',
  API_URL: 'http://localhost:3001',
  // API_URL: '',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: '',
};

const prod = {
  API_URL: 'https://mylifeintech.herokuapp.com',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: 'UA-12326200-19',
};

const env = process.env.NEXT_ENV;

// declare var Config: Settings;

let Config = {};

if (env === 'dev' || env === 'test' || env === 'prod') {
  Config = Object.assign(Config, dev);
}
if (env === 'test' || env === 'prod') {
  Config = Object.assign(Config, test);
}
if (env === 'prod') {
  Config = Object.assign(Config, prod);
}

// console.log('env', env);
// console.log('Config', Config);

export default Config;
