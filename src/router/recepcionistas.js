import HomeRecepView from '@/views/recepcionista/HomeRecepView.vue'
import ReportesGerente from '@/views/gerente/gerente_reportes/ReportesGerente'
import ReportesGerentePrecios from '@/views/gerente/gerente_reportes/ReportesGerentePrecios'
import ReportesGerentePersonas from '@/views/gerente/gerente_reportes/ReportesGerentePersonas'

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
    component: ReportesGerente,
  },

  {
    path: "reportes/precios",
    name: "recepcionista-reportes-precios",
    component: ReportesGerentePrecios,
  },

  {
    path: "reportes/personas",
    name: "recepcionista-reportes-personas",
    component: ReportesGerentePersonas,
  },

  {
    path: "cochera",
    name: "recepcionista-cochera",
  }

  
];

export default routes_recepcionista;