// @ts-nocheck
import type {
  QueryGenqlSelection,
  Query,
  MutationGenqlSelection,
  Mutation,
} from './schema.ts'
import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  type FieldsSelection,
  type GraphqlOperation,
  type ClientOptions,
  GenqlError,
} from '../generated/runtime/index.ts'
export type { FieldsSelection } from '../generated/runtime/index.ts'
export { GenqlError }

import types from './types.ts'
export * from './schema.ts'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends QueryGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'http://localhost:1337/graphql',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
  Query,
  fields
>
export const generateQueryOp: (
  fields: QueryGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}

export type MutationResult<fields extends MutationGenqlSelection> =
  FieldsSelection<Mutation, fields>
export const generateMutationOp: (
  fields: MutationGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any)
}
