import HomeGerenteView from "@/views/gerente/HomeGerenteView.vue";

const routes_gerente = [
  {
    path: "",
    name: "gerente-home",
    component: HomeGerenteView,
  },
  {
    path: "huespedes",
    name: "gerente-huespedes",
  },
  {
    path: "habitaciones",
    name: "gerente-habitaciones",
  },
  {
    path: "recepcionistas",
    name: "gerente-recepcionistas",
  },
  {
    path: "reportes",
    name: "gerente-reportes",
  },
  {
    path: "",
    name: "gerente-create-habitacion",
  },
];

export default routes_gerente;
