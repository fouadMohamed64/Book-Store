
let customHeaderTag = document.getElementsByTagName('special-header')[0];
// console.log(customHeaderTag);

let mainDiv = document.getElementById("mainDiv");
let id = window.location.href.split("=")[1];
// console.log(id);

let req = new XMLHttpRequest();
req.open("GET", "jsonFils/category.json");
req.send();
req.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    let jsObj = JSON.parse(req.responseText);
   let  cat = jsObj[id-1].cat
    
    let titleName = document.createElement('h1');
    titleName.classList = 'categoryHeader';
    titleName.textContent = jsObj[id-1].title;
    // document.body.prepend(titleName);
    customHeaderTag.append(titleName);

    for (i = 0; i< cat.length; i++) {
        let userContainer = document.createElement("div");
        userContainer.classList = "userContainer";

        let key = document.createElement('p');
        key.textContent = cat[i].id;
        key.style.cssText = 'display: none';
        userContainer.appendChild(key);
       
        let title = document.createElement("h2");
        title.textContent = cat[i].title;

        let img = document.createElement("img");
        img.src = cat[i].cover_image;
        
        userContainer.appendChild(img);
        userContainer.appendChild(title);
        mainDiv.appendChild(userContainer);
        
        userContainer.onclick = function(){
          userContainer.id = key.textContent;
          // console.log(userContainer);
          window.open(`bookDetails.html?id=${userContainer.id}`, "_blank");
        }
      }
    }
  };

// console.log(mainDiv)
