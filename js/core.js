export async function get(url) {
    try {
        let res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (res.status == 200 && res.statusText == "OK") return await res.json();
        return null;

    } catch (err) {
        console.error(err);
    }
    finally {
        console.log("Done");
    }
}

export async function post(url, body) {
    try {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        });

        if (res.status == 200 && res.statusText == "OK") return res.status;
        return null;

    } catch (err) {
        console.error(err);
    }
    finally {
        console.log("Done");
    }
}

export async function put(url, body) {
    try {
        let res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        });

        if ((res.status == 200 || res.status == 304) && res.statusText == "OK") return res.status;
        return null;

    } catch (err) {
        console.error(err);
    }
    finally {
        console.log("Done");
    }
}

export async function Delete(url) {
    try {
        let res = await fetch(url, {
            "method": "DELETE",
            "headers": {
                "content-type": "application/json; charset=UTF-8"
            }
        });

        if ((res.status == 200 || res.status == 304) && res.statusText == "OK") return res.status;
        return null;

    } catch (err) {
        console.log(err);
    }
    finally {
        console.log("Done");
    }
}