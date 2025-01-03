   let data = fetch("https://dummyapi.online/api/movies");

        data.then((res) => {
            return res.json();
        })
        .then((res) => {
            const container = document.getElementById("movieContainer");

             res.map((movie) => {
                
             const card = document.createElement("div");
             card.classList.add("card");

             card.innerHTML = `
                <div class="card-content">
                <h2>${movie.movie}</h2>
                 <p>Rating: ${movie.rating}</p>
                 </div>
                `;

                container.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });