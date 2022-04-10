import PACKAGE_JSON from '../../package.json';

export const environment = {
  appVersion: PACKAGE_JSON.version,
  production: false,
  componentServerEndpoint: 'https://opencdms-components-api-jnxkyuyk3q-ew.a.run.app',
  // componentServerEndpoint: 'http://localhost:8000',
  opencdmsServerEndpoint: 'https://api.opencdms.org/climsoft',
};
