
const API_KEY = '9047624a1b9374b2c4c2c70991622d3b';
const API_BASE = 'https://api.themoviedb.org/3';

/*
 - pegar lista originais da Netflix;
 - recomendados (trending)
 - em alta (top rated)
 - ação
 - comédia
 - terror
 - romance
 - documentários
*/

const initialFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const data = await request.json();
  return data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await initialFetch(
          `/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await initialFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await initialFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await initialFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await initialFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await initialFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await initialFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await initialFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'animation',
        title: 'Animação',
        items: await initialFetch(
          `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
        ),
      }
    ];
  },

  getInfos: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch(type) {
        case 'movie':
            info = await initialFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        case 'tv':
          info = await initialFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        
        default:
            info = null
      }
    }
    return info;
  }

};
