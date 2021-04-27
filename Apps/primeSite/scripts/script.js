var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var result = xhttp.responseText;
       vc.config = JSON.parse(result);
    //    console.log(result);
    }
};
xhttp.open("GET", "./scripts/menu.json", true);
xhttp.send();

const showPlayContent = (item) => {
    console.log('fn: showPlayContent');
    var itemString = JSON.stringify(item);
    var ele = `<h1>${item.title}</h1>
    <p>${item.description}</p>
    <button class="btn btn-default" id="button_${item.id}" onclick="showPopUp(this.id)" attr='${itemString}'><i class="fa fa-play"></i> Play</button>`;
    document.getElementById('playContent').innerHTML = ele;
}

const showPopUp = (id) => {
    console.log('fn: showPopUp');
    let details = document.getElementById(id).getAttribute("attr");
    let itemDetails =  JSON.parse(details); 
    let popup = `<div class="popup" id="popupBanner">
        <button class="close-popup" onclick="closePopup()"><i class="fa fa-close"></i></button>
        <div class="video-container">
        <video controls>
            <source src="${itemDetails.src}" type="video/mp4">
        </video>
    </div>
    </div>`;
    document.getElementById('layer').innerHTML += popup;
    document.getElementById('popupBanner').classList.add(`banner_${itemDetails.title}`);
}

const closePopup = () => {
    console.log('fn: closePopup');
    document.getElementById("popupBanner").remove();
}