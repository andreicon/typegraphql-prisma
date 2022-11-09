import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMainUserOrThrowArgs } from "./args/FindUniqueMainUserOrThrowArgs";
import { MainUser } from "../../../models/MainUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MainUser)
export class FindUniqueMainUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => MainUser, {
    nullable: true
  })
  async getMainUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMainUserOrThrowArgs): Promise<MainUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}