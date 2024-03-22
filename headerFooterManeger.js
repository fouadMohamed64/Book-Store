
class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav>
            <a href="aboutUs.html" target="_blank"><img src="imgs/logo2.jpeg" alt="logo"></a>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutUs.html" target="_blank">About Us</a></li>
                <li><a href="contact.html" target="_blank">Contact Us</a></li>
            </ul>
        </nav>
        `
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <div class="footerContainer">
                <h2>Feed Your Mind</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vitae, nisi itaque corporis,
                    qui excepturi nulla eius id error a ratione libero
                    soluta obcaecati, saepe nihil at recusandae consequuntur
                    temporibus corrupti. Voluptates necessitatibus doloribus
                    ducimus? Odio eaque officia itaque vel repellat a? Officia,
                    id! Quidem totam et tempore quis. Praesentium ratione
                    explicabo omnis consequuntur harum eveniet nihil sequi
                    ut voluptatibus delectus nemo, numquam unde tempora optio
                    dolore laborum. Earum consequatur ipsam ab dolorem fuga.
                    Aspernatur et placeat beatae exercitationem delectus,
                    possimus autem ipsa nesciunt mollitia, vel consequatur odit
                    temporibus aut iure dolore voluptatibus! Aut eaque delectus
                    illum consequuntur ex odit sunt.
                </p>
                <p class="icons">
                    <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.gmail.com/"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://www.github.com/"><i class="fa-brands fa-github"></i></a>
                </p>
            </div>
        </footer>
        <p class="copyright">
            copyright &copy; 2024 by Fouad Mohamed ITi student 
        </p>
        `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);

/*
youtube vedio
https://youtu.be/AiQqip_pVbA?si=kz8fbigocuyRWNy9
*/