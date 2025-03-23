import { client } from '../config/api.ts';
import type { GamesParams } from '../types/index.ts';

/**
 * Fetches posts with optional filtering and pagination
 */
export async function fetchGames(params: GamesParams){
  const { id, name, page, limit, start, price, platforms } = params;

  console.error('Params ', params)

  return await client.query({
    games_connection: {
      __args: {
        pagination: {
          page,
          start,
          limit
        },
        filters: {
          name: {
            contains: name,
          },
          platforms: {
            and: platforms?.map(platform => ({
              name: {
                contains: platform
              }
            }))
          },
          price
        }
      },
      nodes: {
        name: true,
        documentId: true,
        price: true,
        slug: true,
        locale: true,
        release_date: true,
        rating: true,
      },
      pageInfo: {
        pageCount: true,
        total: true,
        page: true,
      }
    }
  });
}

export async function fetchPlatforms(){
  return await client.query({
    platforms: {
      name: true,
    }
  });
}