import * as $ from "jquery";
import * as moment from "moment";
import PerfectScrollbar from "perfect-scrollbar";

export default (function() {
  const scrollables = $(".scrollable");
  if (scrollables.length > 0) {
    scrollables.each((index, el) => {
      new PerfectScrollbar(el);
    });
  }
  const day = document.getElementById("day");
  if (day) day.innerHTML = moment().format("dddd");
  const dayComplete = document.getElementById("dayComplete");
  if (dayComplete) dayComplete.innerHTML = moment().format("MMM, DD YYYY");
  const realTime=document.getElementById("timeOclock")
  if(realTime)
  setInterval(
    ()=>{
      realTime.innerHTML=moment().format("DD/MM/YYYY HH:mm:ss")
    },1000
  )
})();
