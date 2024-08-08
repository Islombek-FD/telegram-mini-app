const ENV = import.meta.env;

const config = {
  app: {
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
