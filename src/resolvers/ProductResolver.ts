import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Product } from "../entity/Product";

@Resolver()
export class ProductResolver {
  @Mutation(() => Boolean)
  async createProducts(
    @Arg("name") name: string,
    @Arg("quantity") quantity: number
  ) {
    const product = new Product();
    await Product.insert({ name, quantity });
    return true;
  }
}
