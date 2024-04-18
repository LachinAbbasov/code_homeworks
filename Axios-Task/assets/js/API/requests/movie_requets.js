

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

export async function deleteButton(url, id) {
  let response = null;
  await axios.delete(url + `/${id}`)
  .then((res) => {
    response = res.data;
  })
  .catch(err=>{
    console.log(err)
  })

  return response;
}



