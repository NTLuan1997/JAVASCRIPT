
let wrapper = document.getElementById("tbody-course");

(function () {
    let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    if (user) {
        console.log(user?.courses);
        let tbody = "<body>";
        user?.courses?.forEach((E, index) => {
            let tr = `
                <tr>
                    <td class="course-text">${index}</td>
                    <td>
                        <img class="course-thumbnail" src="${E?.thumbnail}" alt="thumbnail"/>
                        <p class="course-name">${E?.name}</p>
                    </td>
                    <td class="course-text">${E?.code}</td>
                    <td class="course-text">${E?.coin}</td>
                    <td class="d-flex align-items-center justify-content-center">
                        <button class="btn btn-primary w-75">Xoa</button>
                    </td>
                </tr>
            `;
            tbody += tr;
        });

        tbody += "</tbody>";
        wrapper.innerHTML = tbody;
    } else {
        console.log("User chua dang nhap");
    }
})();