



let mainDiv = document.getElementById('mainDiv');

let req = new XMLHttpRequest();
req.open('GET', 'jsonFils/category.json');
req.send();
req.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let jsObj = JSON.parse(req.responseText);
        console.log(jsObj);
        for(let i=0; i<jsObj.length; i++){

            let userContainer = document.createElement('div');
            userContainer.classList = 'userContainer';
            
            let title = document.createElement('h2');
            title.textContent = jsObj[i].title;

            let img = document.createElement('img');
            img .src = jsObj[i].cover_image;

            userContainer.appendChild(title);
            userContainer.appendChild(img);
            mainDiv.appendChild(userContainer);

            img.onclick = function(){
                window.open(`products.html?id=${jsObj[i].id}`, '_blank')
            }
        }
    }
}

// console.log(mainDiv)
