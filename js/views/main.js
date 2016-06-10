window.onload = function(){
  $("#calendar").datepicker({
    weekStart: 1,
    maxViewMode: 2,
    todayBtn: "linked",
    language: "pt-BR",
    daysOfWeekDisabled: "0",
    daysOfWeekHighlighted: "0",
    todayHighlight: true
  });

  $('#inCalendar input').datepicker({
    autoclose: true,
    weekStart: 1,
    maxViewMode: 2,
    todayBtn: "linked",
    language: "pt-BR",
    daysOfWeekDisabled: "0",
    daysOfWeekHighlighted: "0",
    todayHighlight: true
});
}
