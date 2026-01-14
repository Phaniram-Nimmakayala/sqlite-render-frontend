document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const msg = document.getElementById("msg").value;

    fetch("https://sqlite-render-backend.onrender.com/insert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, msg })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Data stored successfully!");
            document.querySelector("form").reset();
        } else {
            alert("Error storing data");
        }
    })
    .catch(err => console.error(err));
});
