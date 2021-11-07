import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodb2',
  connector: 'mongodb',
  url: 'mongodb+srv://Esteban_TIC:UDP1BAi1m4vWO5CC@misiontic.tdhf0.mongodb.net/PedidosBD',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Mongodb2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
