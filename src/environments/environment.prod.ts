import PACKAGE_JSON from '../../package.json';

export const environment = {
  appVersion: PACKAGE_JSON.version,
  production: true,
  componentServerEndpoint: 'https://opencdms-components-api-jnxkyuyk3q-ew.a.run.app',
  opencdmsServerEndpoint: 'https://api.opencdms.org/climsoft',
};
