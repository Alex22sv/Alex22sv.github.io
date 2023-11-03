const contact = document.getElementById("contact");
contact.innerHTML = `
    <div class="container">
        <div class="row footer">
            <div class="col-md-10 contact_left">
                <h3>Contacto</h3>
                <p>Si quieres contactar conmigo puedes usar el siguiente formulario:</h4>
                <form method="post" action="contact-post.html">
                    <input type="text" value="Nombre (Obligatorio)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Nombre';}">
                    <input type="text" value="Email (Obligatorio)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Correo';}">
                    <input type="text" value="Título" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Título';}">
                    <textarea onfocus="if(this.value == 'Mensaje') this.value='';" onblur="if(this.value == '') this.value='Mensaje;'" >Mensaje</textarea>
                    <span class="pull-right"><input type="submit" value="Enviar"></span>
                </form>
            </div>
            <!-- <div class="col-md-4  contact_right">
                <p><span>Lorem Ipsum is simply dummy text: </span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <ul class="list-unstyled address">
                    <li><i class="fa fa-map-marker"></i><span>500 Lorem Ipsum Dolor Sit,</span></li>
                    <li><i class="fa fa-phone"></i><span>(00) 222 666 444</span></li>
                    <li><i class="fa fa-envelope"></i><a href="mailto:info@mycompany.com">info(at)mycompany.com</a></li>
                </ul>
            </div>	 -->	
        </div>
    </div>
`   