const footer = document.getElementById("footer");   
if(footer.classList.contains("mainFooter")){
    footer.innerHTML = `
        <ul class="license">

            <li>Sitio web bajo licencia <a href="https://github.com/Alex22sv/SitioWeb/blob/main/LICENSE"><u>GPL-3.0 license</u></a></li>
        </ul>
    `;
} else {
    footer.innerHTML = `
    <div class="footerChild">
    <img src="./images/AlexLogoTransparentWhite.png" alt="logo" class="logoFooter">
</div>
<div class="footerChild">
    <ul class="license">
        <li><a href="mailto:ae22mp@gmail.com" class="fa-solid fa-envelope"></a></li>
        <li><a href="https://twitter.com/Alex22_SV" class="fa-brands fa-twitter" target="_blank"></a></li>
        <li><a href="https://www.instagram.com/alex.sv22/" class="fa-brands fa-instagram" target="_blank"></a></li>
        <li><a href="https://github.com/Alex22sv" class="fa-brands fa-github" target="_blank"></a></li>
        <li><a href="https://discord.com/users/435534715831975938" class="fa-brands fa-discord" target="_blank"></a></li>
        <li><a href="https://www.reddit.com/user/Alex22_SV" class="fa-brands fa-reddit" target="_blank"></a></li>
    </ul>
    <ul class="license">
        <li>Sitio web bajo licencia <a href="https://github.com/Alex22sv/SitioWeb/blob/main/LICENSE"><u>GPL-3.0 license</u></a></li>
    </ul>
</div>
`;
}