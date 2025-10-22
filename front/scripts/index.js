require ("./forms1.js");
const utils = require("./utils.js");
const axios = require("axios");

const url = "https://students-api.up.railway-app/movies";
const URL_API= "https://verflix-back.onrender.com/";
const getMovies = async () => {
  try {
    const res = await axios.get(URL_API + "movies");

    // Verifica si no hay películas
    if (!res.data?.length) {
      return utils.appendFailMsg("No hay películas para mostrar");
      
    }

    // Si hay películas, las pasa a la función que las muestra
    utils.AppendMoviesToContainer(res.data);
    
  } catch (e) {
    console.log("Error:", e);
    utils.appendFailMsg();
  } finally {
    console.log("Se ejecutó la solicitud.");
  }
};
const container = document.getElementById("movieContainer");
if(container){
  getMovies();

};


