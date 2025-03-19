import { client } from '../config/api.ts';
import type { GamesParams } from '../types/index.ts';

/**
 * Fetches posts with optional filtering and pagination
 */
export async function fetchGames(params: GamesParams){
  const { id, name, page, limit, start } = params;

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
            contains: name
          },
        }
      },
      nodes: {
        name: true,
        documentId: true,
        price: true,
        description: true,
        locale: true,
        releaseDate: true,
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