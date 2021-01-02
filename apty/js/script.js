/*--------- Svg responive -------------*/
function xsScreen(){
    console.log("fn: xsScreen");
    width = window.innerWidth;
    if(width > 320 && width < 375){
        var ele = document.getElementsByTagName("svg")[0];
        ele.removeAttribute('viewBox')
        ele.setAttribute('viewBox','0 0 1440 320');
    }else if(width > 374 && width < 425){
        var ele = document.getElementsByTagName("svg")[0];
        ele.removeAttribute('viewBox')
        ele.setAttribute('viewBox','0 0 1440 320');
    }
    
}
xsScreen();

/*---------------------------*/

var toggleCollapseContent = () => {
    console.log("fn: toggleCollapseContent");
    var navBar = document.getElementById('xsNavItems');
    setTimeout(function () {
        navBar.classList.toggle("toggle");
      }, 20)
}

var showData = (id) => {
    console.log("fn: showData");
    if(id === 'gridView') {
        var element = document.getElementById("listView");
        element.classList.remove("active");
        document.getElementById(id).classList.add('active');
        document.getElementById('listContainer').style.display = 'none';
        document.getElementById('gridContainer').style.display = 'block';
    } else {
        var element = document.getElementById("gridView");
        element.classList.remove("active");
        var showActiveClass = document.getElementById(id)
        showActiveClass.classList.add('active');
        document.getElementById('gridContainer').style.display = 'none';
        document.getElementById('listContainer').style.display = 'block';
    }
}

/*------------ Checked Data --------------*/
var selectedData = []
var selectPlace = (id) => {
    console.log("fn: selectPlace")
    var ele = document.getElementById(id);
    var flag = ele.checked;
    if(flag === true) {
        var selectedEle = ele.parentElement.parentElement.parentElement.id;
        document.getElementById(selectedEle).style.backgroundImage = 'linear-gradient(135deg, #2B2ECF 0%, #652BCF 100%)';
        document.getElementById(selectedEle + '_title').style.color = "#fff";
        document.getElementById(selectedEle + '_descrip').style.color = "#C5D3E8";
        selectedData.push(selectedEle);
        document.getElementById('selectedDataDiv').style.display = 'block';
        document.getElementById('count').innerHTML = selectedData.length;
        // ele.parentElement.parentElement.parentElement.style.background = 'linear-gradient(135deg, #2B2ECF 0%, #652BCF 100%);'
    } else {
        var selectedEle = ele.parentElement.parentElement.parentElement.id;
        document.getElementById(selectedEle).style.backgroundImage = '';
        document.getElementById(selectedEle).style.backgroundColor = 'white';
        document.getElementById(selectedEle + '_title').style.color = "#2B2ECF";
        document.getElementById(selectedEle + '_descrip').style.color = "#7F8A9C";
        const index = selectedData.indexOf(selectedEle);
        if (index > -1) {
            selectedData.splice(index, 1);
        }
        document.getElementById('count').innerHTML = selectedData.length;
        if(selectedData.length === 0) {
            document.getElementById('selectedDataDiv').style.display = 'none';
        }
    }
}