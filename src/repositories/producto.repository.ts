import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Mongodb2DataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.mongodb2') dataSource: Mongodb2DataSource,
  ) {
    super(Producto, dataSource);
  }
}
