var vc = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      config: null,
      class: []
    },
    methods:{
        // showMovie(item) {
        //     console.log('fn:showMovie');
        //     var banner = document.getElementById("banner");
        //     banner.classList.add(`banner_${item.id}`);
        //     showPlayContent(item);
        // },
        showPopup(item) {
            debugger
            console.log('fn:showPopup');
            let popup = `<div class="popup banner_${item.class}" id="popupBanner" >
                <button class="close-popup" onclick="closePopup()"><i class="fa fa-close"></i></button>
                <div class="video-container">
                <video controls>
                    <source src="${item.src}" type="video/mp4">
                </video>
            </div>
            </div>`;
            document.getElementById('layer').innerHTML += popup;
        }
    }
})