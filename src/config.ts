const ENV = import.meta.env;

const config = {
  app: {
    // TODO: Get User from Telegram by initData
    userId: 217258,
    placeId: 203675,
    env: ENV.MODE,
    isDev: ENV.MODE !== 'production',
  },
  api: {
    baseUrl: ENV.VITE_API_URL + '/api/',
  },
};

export default config;
