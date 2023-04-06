const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(formData, data);
    postData(data);
});

const postData = async (data) => {
    const res = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result.fname);
    alert(result.fname + " was added");
};

const detail = document.getElementById("show-detail");
// detail.addEventListener('click', )