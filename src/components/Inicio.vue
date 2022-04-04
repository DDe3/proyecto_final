<template>
  <div class="center">
    <h2 class="bg-black text-white text-center p-2">
      Ofrecemos el mejor servicio de alquiler de vehículos
    </h2>
    <h3 class="text-black text-center p-2">Nada de tarifas ocultas</h3>
  </div>

  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators" id="onbot">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="d-block w-100"
          alt="Not found"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="bg-black text-white text-center p-2">CarShare</h5>
          <p class="text-warning">
            Nuestro conveniente programa CarShare te brinda acceso las 24 horas
            del día, los 7 días de la semana, a una variedad de vehículos por
            una tarifa baja por hora.
          </p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="d-block w-100"
          alt="Not found"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="bg-black text-white text-center p-2">
            Alquiler de autos más popular de Quito y el Ecuador
          </h5>
          <p class="text-warning">Contamos con más de 100 marcas y modelos de autos</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-automobiles-39501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="d-block w-100"
          alt="Not found"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="bg-black text-white text-center p-2">
            Colección de autos exóticos
          </h5>
          <p class="text-warning">
            ¿Necesitas un super auto? Elige entre una colección excepcional de
            increibles vehículos de marcas de categoría mundial.
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.center {
  z-index: 9;
  width: 100%;
  text-align: center;
  font-size: 18px;
}
#onbot {
  position: absolute;
}
</style>