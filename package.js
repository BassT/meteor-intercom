Package.describe({
  name: 'dispatch:intercom',
  version: '2.0.0',
  summary: 'Intercom for meteor.'
});

Package.onUse(function (api) {
  api.use([
    // core
    'random@1.0.3'
  ], 'web');

  api.addFiles([
    // Package helper functions
    'intercom.js'
  ], 'web');

  api.export('IntercomMeteor', 'web');
});
