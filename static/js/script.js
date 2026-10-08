function showTimetable(id) {
    document.querySelectorAll(".timetable .container[id]").forEach(function (section) {
        section.style.display = "none";
    });

    const selectedTimetable = document.getElementById(id);

    if (selectedTimetable) {
        selectedTimetable.style.display = "block";
    }
}

function hideTimetable(id) {
    const selectedTimetable = document.getElementById(id);

    if (selectedTimetable) {
        selectedTimetable.style.display = "none";
    }
}