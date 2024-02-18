
 export default async function MovieData() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ebac869df0f0a071005f374c0a6045e4');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
     const result= await res.json()
     console.log(result.results)
      return result;
    } catch (error) {
      // console.error('An error occurred:', error.message);
    }
  }