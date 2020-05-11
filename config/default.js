const defer = require('config/defer').deferConfig;
const Utils = require('./utils');
const { GetvaluefromSSM }  = require('../src/resolvers');

const stage = process.env.SLS_INSTANCE_STAGE;
const region = process.env.SLS_INSTANCE_REGION;

module.exports = {
  app: {
    port: 2114,
    file: 'default.js',
    Defaultjs: 'loaded',
    s3Name: defer((cfg) => `data-bucket-app-${cfg.stage}-${cfg.region}`),
    testDefer: defer((cfg) => `${cfg.app.s3Name}-adasdas`),
    xx: Utils.fromTest('adasdasdadad'),
    Key: GetvaluefromSSM(region, `/${stage}/SECRET_PATH`, true),
  },
};
