function createMovie ({
    title, year, director, duration, genre, rate, poster
}){

    const movie = document.createElement("div");
    movie.classList.add("card");
    movie.classList.add("card-body");
    movie.innerHTML = `
     <a href="#"><h2 class="card-title">${title}</h2></a>
    <p>${genre}</p>
    <p>${year}</p>
     <h5>${director}</h5>
      <p>${rate}</p>
    <div class="card-img-top">
        <img src = "${poster}" alt="${title + "-img"}" />
    </div>`

    const container = document.getElementById("movieContainer");
      container.appendChild(movie)   
}

function AppendMoviesToContainer(dataFromApi){

      const container = document.getElementById("movieContainer");
      if(container){
        container.innerHTML = "";
        dataFromApi.forEach((movie,index)=>{
          return createMovie(movie);
    });
    
  }
  }
  const appendFailMsg = ()=>{
    const carouselInner = document.
    getElementById ("movieContainer");

    carouselInner.innerHTML =
    '<p id = "texto5" >No se pudieron cargar las películas. Inténtalo más tarde. </p>';
    return;
  }

  const modulesToExport = {
    AppendMoviesToContainer,
    appendFailMsg
  }

  module.exports =  modulesToExport;

  
  

  