import '@/assets/styles/main.css';

import config from '@/config';

import { http } from '@/services';

http.init({
  configFn: () => {
    return {
      baseURL: config.api.baseUrl,
    };
  },
});
