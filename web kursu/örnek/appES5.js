function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

function UI() {
}

UI.prototype.AddCourseToList = function (course) {
    const list = document.querySelector("#course-list");

    var html = `
    <tr>
        <td>${course.image}</td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    </tr>
    `;

    list.innerHTML += html;
}

UI.prototype.clearControls = function () {
    const title = document.querySelector("#title").value = "";
    const instructor = document.querySelector("#instructor").value = "";
    const image = document.querySelector("#image").value = "";
}

UI.prototype.deleteCourse = function (e) {
    if (e.classList.contains("delete")) {
        e.parentElement.parentElement.remove();
    }
}

UI.prototype.showDialog = function(message,className){
    var alert = `
    <div class="alert alert-${className}">
    ${message}
    </div>
    `;

    var row = document.querySelector(".row");
    row.insertAdjacentHTML("beforebegin",alert);

    setTimeout(()=>{
        document.querySelector(".alert").remove();
    },5000)
}

document.querySelector("#new-course").addEventListener("submit", function (e) {

    const title = document.querySelector("#title").value;
    const instructor = document.querySelector("#instructor").value;
    const image = document.querySelector("#image").value;

    // Create Course
    const course = new Course(title, instructor, image)

    //Create UI
    const ui = new UI();

    if (title === "" || instructor === "" || image === "") {
        ui.showDialog("Boş Bırakılamaz","warning");
    } else {
        // Add to list
        ui.AddCourseToList(course);

        // Clear controls
        ui.clearControls();

        ui.showDialog("Başarıyla Eklendi","success");
    }


    e.preventDefault();
});

document.querySelector("#course-list").addEventListener("click", function (e) {
    const ui = new UI();

    ui.deleteCourse(e.target);
    ui.showDialog("Başarıyla silindi","danger");
})