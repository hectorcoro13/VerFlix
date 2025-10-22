console.log("hola");
const axios = require("axios");

const renderForm = () => {
  const genres = [
    { name: "Acción", value: "action" },
    { name: "Aventura", value: "adventure" },
    { name: "Comedia", value: "comedy" },
    { name: "Drama", value: "drama" },
    { name: "Fantasía", value: "fantasy" },
    { name: "Terror", value: "horror" },
    { name: "Musical", value: "musical" },
    { name: "Misterio", value: "mystery" },
    { name: "Romance", value: "romance" },
    { name: "Ciencia Ficción", value: "sci-fi" },
    { name: "Suspense", value: "thriller" },
    { name: "Guerra", value: "war" }
  ];

  const checkList = document.getElementById("checkbox-list");
  genres.forEach((genre) => {
    const element = document.createElement("label");
    element.innerHTML = `<input type="checkbox" name="opciones" value="${genre.value}" class="w-auto"> ${genre.name}`;
    
    checkList.append(element);
  });
};

const resetForm = (event) => {
  event.preventDefault();
  const confirmation = confirm("¿Está seguro de que desea reiniciar el formulario?");
  if (confirmation) {
    form.reset();  // Ahora la llamada a form.reset() es correcta
    alert("El formulario ha sido reiniciado");
  }
};

const handleOnSubmit = async (e) => {
  e.preventDefault(); 

  const formData = new FormData(e.target); 

  const title = formData.get('title');
  const year = formData.get('year');
  const director = formData.get('director');
  const duration_hours = formData.get('duration_hours');
  const duration_minutes = formData.get('duration_minutes');
  const rate = formData.get('rate');
  const poster = formData.get('poster');

  const genres = Array.from(document.querySelectorAll('input[name="opciones"]:checked'))
    .map(checkbox => checkbox.value);

  if (
    [title, year, director, duration_hours, duration_minutes, genres, rate, poster]
      .some((e) => e === "" || !e)
  ) {
    return alert("Todos los campos son obligatorios");
  }

  const data = {
    title,
    year,
    director,
    duration: `${duration_hours} hs ${duration_minutes} min`,
    genres: genres,
    rate,
    poster
  };

  console.log("form data", data);

  try {
    await axios.post("http://localhost:3000/movies", data);
  } catch (error) {
    console.error(error);
  }
};

const form = document.getElementById("form_movies");

if(form) {
  renderForm();
  form.addEventListener("submit", handleOnSubmit);

  const resetButton = document.querySelector('button[type="reset"]');
  if (resetButton) {
    resetButton.addEventListener("click", resetForm);
  }
}
