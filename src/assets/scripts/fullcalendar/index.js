import * as $ from "jquery";
import "fullcalendar/dist/fullcalendar.min.js";
import "fullcalendar/dist/fullcalendar.min.css";
import { lang } from "moment";
import * as moment from "moment";

export default (function() {
  const dayNumber = document.getElementById("dayNumber");
  if (dayNumber)
    dayNumber.innerHTML =
      moment().format("DD") + '<span class="fsz-def">st</span>';
  const momentDay = document.getElementsByClassName("momentDay");
  console.log("momentDay ", momentDay);
  if (momentDay)
    for (let item of momentDay) item.innerHTML = moment().format("MMM DD");
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  const events = [
    {
      title: "Reunion General",
      start: new Date(y, m, 1),
      desc: "Meetings",
      bullet: "success"
    },
    {
      title: "Celebración dia de la mujer",
      start: new Date(y, m, 6),
      desc: "Meetings",
      bullet: "success"
    },
    {
      title: "Inicio de integración",
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2),
      desc: "Hangouts",
      bullet: "success"
    },
    {
      title: "Meeting",
      start: new Date(y, m, d - 3, 16, 0),
      allDay: false,
      desc: "Product Checkup",
      bullet: "warning"
    },
    {
      title: "Conferencia comunicación",
      start: new Date(y, m, d + 4, 16, 0),
      allDay: false,
      desc: "Conference",
      bullet: "danger"
    },
    {
      title: "Celebración Cumpleaños",
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false,
      desc: "Gathering"
    }
  ];

  $("#full-calendar").fullCalendar({
    events,
    height: 900,
    loading: lang("es"),
    editable: true,
    defaultDate: new Date(),
    header: {
      left: "month,agendaWeek,agendaDay",
      center: "title",
      right: "today prev,next"
    }
  });
})();
