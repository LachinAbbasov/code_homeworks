

//get All Movies Cards
export async function getAllMovies(url) {
  let name = null;
  let error = null;
  await axios
    .get(url)
    .then((result) => {
      name = result.data;
    })
    .catch((err) => {
      error = err;
    });
  
  return {
    name: name,
    error: error,
  }
}


export async function getMovieById(apiUrl, id) {
  try {
    const response = await axios.get(`${apiUrl}/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
}


export async function updateMovieById(apiUrl, id, updatedMovieData) {
  try {
    const response = await axios.put(`${apiUrl}/movies/${id}`, updatedMovieData);
    return response.data;
  } catch (error) {
    console.error('Error updating movie by ID:', error);
    throw error;
  }
}

