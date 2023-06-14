const environment = 'development';

const defaultConfig = {
  currentAppVersion: 1,
  appStoreLink: 'https://',
  playStoreLink: 'https://',
};

const configs = {
  development: {
    ...defaultConfig,
    dataDragonUrl: 'https://ddragon.leagueoflegends.com/',
    riotUrl: 'https://',
  },
};

export const config = configs[environment];
