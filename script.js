async function fetchUsers() {
    const container = document.getElementById("user-container");
    container.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();
        container.innerHTML = "";

        users.forEach(user => {
            const div = document.createElement("div");
            div.classList.add("user-card");

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.city}</p>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        container.innerHTML = "Error fetching data. Check your internet connection.";
        console.error(error);
    }
}

fetchUsers();