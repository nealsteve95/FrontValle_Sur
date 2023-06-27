import HomeRecepView from '@/views/recepcionista/HomeRecepView.vue'

const routes_recepcionista = [
  {
    path: "",
    name: "recepcionista-home",
    component: HomeRecepView,
  },
  {
    path: "huespedes",
    name: "recepcionista-huespedes",
  },
  {
    path: "habitaciones",
    name: "recepcionista-habitaciones",
  },
  {
    path: "reservas",
    name: "recepcionista-reservas",
  },
  {
    path: "check",
    name: "recepcionista-check",
  },
  {
    path: "reportes",
    name: "recepcionista-reportes",
  },
  {
    path: "cochera",
    name: "recepcionista-cochera",
  },
];

export default routes_recepcionista;