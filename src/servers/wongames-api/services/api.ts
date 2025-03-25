import { client } from '../config/api.ts';
import type { GamesParams } from '../types/index.ts';

/**
 * Fetches posts with optional filtering and pagination
 */
export async function fetchGames(params: GamesParams){
  const { id, name, page, limit, start, price, platforms, categories,developers,publishers } = params;

  return await client.query({
    games_connection: {
      __args: {
        pagination: {
          page,
          start,
          limit
        },
        filters: {
          id,
          name: {
            contains: name,
          },
          publisher: {
            and: publishers?.map(publisher => ({
              name: {
                contains: publisher
              }
            }))
          },
          platforms: {
            and: platforms?.map(platform => ({
              name: {
                contains: platform
              }
            }))
          },
          
          categories: {
            and: categories?.map(category => ({
              name: {
                contains: category
              }
            }))
          },
          
          developers: {
            and: developers?.map(developer => ({
              name: {
                contains: developer
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
        short_description: true,
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

export async function fetchCategories(){
  return await client.query({
    categories: {
      name: true,
    }
  });
}


export async function fetchDevelopers(){
  return await client.query({
    developers: {
      name: true,
    }
  });
}


export async function fetchPublishers(){
  return await client.query({
    publishers: {
      name: true,
    }
  });
}
