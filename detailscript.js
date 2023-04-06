const tbody = document.querySelector("tbody");
let values = "";

const fetchData = async () => {
    console.log("exec");
    const res = await fetch("http://localhost:5000/details");
    const response = await res.json();
    console.log("details", response);
    response.forEach((e) => {
        values += `
        <tr>
                <td>${e.fname}</td>
                <td>${e.lname}</td>
                <td>${e.dob}</td>
                <td>${e.email}</td>
                <td>${e.gender}</td>
                <td>${e.address1}</td>
                <td>${e.address2}</td>
                <td>${e.city}</td>
                <td>${e.state}</td>
                <td>${e.country}</td>
                <td>${e.zipcode}</td>
        </tr>`;
    });
    tbody.innerHTML = values;
};
fetchData();
