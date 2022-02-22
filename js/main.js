import { get as GET, put as PUT } from "../js/core.js";

async function fetchUsers() {
    return GET("http://localhost:3000/users");
}

async function fetchCourse() {
    return GET("http://localhost:3000/courses");
}

async function putUser(id, body) {
    return PUT(`http://localhost:3000/users/${id}`, body);
}

// Fetch users data form API.
let wrapperCourses = document.getElementById("courses-wrapper");
let registerForm = document.getElementsByClassName("register")[0];
let registerWrapper = document.getElementsByClassName("register-wrapper")[0];
let registerClose = document.getElementsByClassName("register--close")[0];

function triggerRegister() {
    registerForm.classList.add("active");
    if (registerForm.classList.contains("active")) {
        registerWrapper.addEventListener("click", function () {
            registerForm.classList.remove("active");
        });

        registerClose.addEventListener("click", function () {
            registerForm.classList.remove("active");
        });
    }
}

function userRegister(codeCourse, data) {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let formRegister = document.getElementsByClassName("register-form")[0];

    formRegister.addEventListener("submit", function (e) {
        e.preventDefault();
        data?.forEach((E) => {
            if (email.value == E?.email && password.value == E?.password) {
                registerForm.classList.remove("active");
                formRegister.reset();
                userUpdate(codeCourse, E);
            }
        })
    })
}

function isUserExist() {
    return (localStorage.getItem("user")) ? true : false;
}

function isRegisterCourse(codeCourse) {
    let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    if (user) {
        user?.courses.forEach((E) => {
            if (E?.code == codeCourse) {
                return false;
            }
        })
    }
    return true;
}

function getUser(codeCourse) {
    fetchUsers()
        .then((data) => {
            triggerRegister();
            return data;
        })
        .then((data) => {
            return Array.from(new Set(data));
        })
        .then((data) => {
            userRegister(codeCourse, data);
        })
        .catch((error) => {
            console.log(error);
        })
}

function userUpdate(codeCourse, singleUser) {
    let user = singleUser;
    let courses = (localStorage.getItem("courses")) ? JSON.parse(localStorage.getItem("courses")) : null;
    if (!user.hasOwnProperty("courses")) { user.courses = new Array(); }

    if (courses) {
        courses?.forEach((E) => {
            if (E?.code == codeCourse) {
                user?.courses.push(E);
            }
        })
    }
    saveUser(user);
    localStorage.setItem("user", JSON.stringify(user));
}

function saveUser(user) {
    putUser(user?.id, user)
        .then(() => {
            window.location.href = "http://127.0.0.1:5500/BASIC/course.html";
        });
}

function userRegisterCourse(codeCourse) {
    if (!isUserExist()) {
        getUser(codeCourse);
    } else {
        userUpdate(codeCourse, JSON.parse(localStorage.getItem("user")));
    }
}

function checkRegisterCourse(course) {
    for (let i = 0; i < course.length; i++) {
        course[i].addEventListener("click", function (e) {
            e.preventDefault();
            userRegisterCourse(course[i].getAttribute("id"));
        })
    }
}

fetchCourse()
    .then((data) => {
        if (data) {
            return data;
        }
    })
    .then((data) => {
        let html = '';
        if (Array.isArray(data)) {
            localStorage.setItem("courses", JSON.stringify(data));
            data?.forEach((E) => {
                let card = `
                    <div class="col-4">
                        <div class="card">
                            <img class="card-img-top" src="${E?.thumbnail}" alt="Card">
                            <div class="card-body">
                                <h5 class="card-title">${E?.name}</h5>
                                <a href="#" id="${E?.code}" class="btn btn-primary course">Đăng ký</a>
                            </div>
                        </div>
                    </div>
                `;
                html += card;
            })
        }

        wrapperCourses.innerHTML = html;
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        let course = document.getElementsByClassName("course");
        checkRegisterCourse(course);
    });