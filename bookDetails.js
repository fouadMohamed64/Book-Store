
let mainDiv = document.getElementById('mainDiv');

let userId = window.location.href.split('=')[1];
console.log(userId);

let req = new XMLHttpRequest();
req.open('GET', 'jsonFils/category.json');
req.send();
req.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let jsObj = JSON.parse(req.responseText);
        console.log(jsObj)
        
        for(let i=0; i<jsObj.length; i++){
            let cat = jsObj[i].cat;

            for(let j=0; j<cat.length; j++){
                if(cat[j].id == userId){

                    let userCard = document.createElement('div');
                    userCard.classList = 'userCard';
                    
                    let title = document.createElement('h2');
                    title.textContent = `${cat[j].title}`;
                    
                    let img = document.createElement('img');
                    img .src = cat[j].cover_image;
                    
                    let isbn = document.createElement('p');
                    isbn.textContent = `isbn: ${cat[j].isbn}`;
                    
                    let pages = document.createElement('p');
                    pages.textContent = `pages: ${cat[j].pages}`;
                    
                    let id = document.createElement('p');
                    id.textContent = `Id: ${cat[j].id}`;
                    
                    let releaseDate = document.createElement('p');
                    releaseDate.textContent = `releaseDate: ${cat[j].releaseDate}`;
                    
                    let price = document.createElement('p');
                    price.textContent = `price: ${cat[j].price}`;
                    
                    userCard.appendChild(img);
                    userCard.appendChild(title);
                    userCard.appendChild(id);
                    userCard.appendChild(price);
                    userCard.appendChild(isbn);
                    userCard.appendChild(releaseDate);
                    userCard.appendChild(pages);
                    mainDiv.appendChild(userCard);
                }
            }

        }

    }
}

// console.log(mainDiv)
