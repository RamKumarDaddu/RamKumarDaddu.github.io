var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var result = xhttp.responseText;
       data = JSON.parse(result);
    //    console.log(data);
       renderDom(data)
    //    console.log(result);
    }
};
xhttp.open("GET", "./data.json", true);
xhttp.send();

var renderDom = (data) => {
    var movies = data.movies
    var element = document.getElementById('showDom')
    for(let i = 0; i < movies.length ; i++) {
        console.log(movies[i])
        var dom = `
        <div class="carousel-item">
            <div class="banner">
                <video src="${movies[i].src}" muted autoplay loop></video>
                <div class="textBox">
                    <h2>${movies[i].title}</h2>
                    <p>
                        ${movies[i].description}
                    </p>
                    <a href="#">See Movie</a>
                </div>
                <div class="videoBx">
                    <video src="${movies[i].src}" muted autoplay loop"></video>
                </div>
            </div>
        </div>`
        element.innerHTML += dom;
    }
    element.children[0].classList.add('active');
}