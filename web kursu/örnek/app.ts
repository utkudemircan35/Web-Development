var Course = /** @class */ (function () {
    function Course(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 100000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
    return Course;
}());
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.AddCourseToList = function (course) {
        var list = document.querySelector("#course-list");
        var html = "\n        <tr>\n            <td>" + course.image + "</td>\n            <td>" + course.title + "</td>\n            <td>" + course.instructor + "</td>\n            <td><a href=\"#\" data-id=\"" + course.courseId + "\" class=\"btn btn-danger btn-sm delete\">Delete</a></td>\n        </tr>\n        ";
        list.innerHTML += html;
    };
    UI.prototype.clearControls = function () {
        var title = document.querySelector("#title").value = "";
        var instructor = document.querySelector("#instructor").value = "";
        var image = document.querySelector("#image").value = "";
    };
    UI.prototype.deleteCourse = function (e) {
        e.parentElement.parentElement.remove();
    };
    UI.prototype.showDialog = function (message, className) {
        var alert = "\n        <div class=\"alert alert-" + className + "\">\n        " + message + "\n        </div>\n        ";
        var row = document.querySelector(".row");
        row.insertAdjacentHTML("beforebegin", alert);
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 5000);
    };
    return UI;
}());
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.getCourses = function () {
        var courses;
        if (localStorage.getItem("courses") === null) {
            courses = [];
        }
        else {
            courses = JSON.parse(localStorage.getItem("courses"));
        }
        return courses;
    };
    Storage.displayCourses = function () {
        var courses = Storage.getCourses();
        var ui = new UI();
        courses.forEach(function (e) {
            ui.AddCourseToList(e);
        });
    };
    Storage.addCourse = function (course) {
        var courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));
    };
    Storage.deleteCourse = function (element) {
        if (element.classList.contains("delete")) {
            var id_1 = element.getAttribute("data-id");
            var courses_1 = Storage.getCourses();
            courses_1.forEach(function (course, index) {
                if (course.courseId == id_1) {
                    courses_1.splice(index, 1);
                }
            });
            localStorage.setItem("courses", JSON.stringify(courses_1));
        }
    };
    return Storage;
}());
document.addEventListener("DOMContentLoaded", Storage.displayCourses);
document.querySelector("#new-course").addEventListener("submit", function (e) {
    var title = document.querySelector("#title").value;
    var instructor = document.querySelector("#instructor").value;
    var image = document.querySelector("#image").value;
    // Create Course
    var course = new Course(title, instructor, image);
    //Create UI
    var ui = new UI();
    if (title === "" || instructor === "" || image === "") {
        ui.showDialog("Boş Bırakılamaz", "warning");
    }
    else {
        // Add to list
        ui.AddCourseToList(course);
        Storage.addCourse(course);
        // Clear controls
        ui.clearControls();
        ui.showDialog("Başarıyla Eklendi", "success");
    }
    e.preventDefault();
});
document.querySelector("#course-list").addEventListener("click", function (e) {
    var ui = new UI();
    if (e.target.classList.contains("delete")) {
        ui.showDialog("Başarıyla silindi", "danger");
        ui.deleteCourse(e.target);
        Storage.deleteCourse(e.target);
    }
});
