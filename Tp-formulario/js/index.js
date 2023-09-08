function mostrar_datos(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value 
    let dni = document.getElementById("dni").value
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    let localidad = document.getElementById("localidad").value
    let domicilio = document.getElementById("domicilio").value
    vbox1 = document.getElementById("box1").value
	vbox2 = document.getElementById("box2").value
	vbox3 = document.getElementById("box3").value


    document.write("<h1> Los datos ingresados fueron: </h1> >")
    document.write("Nombre: "+nombre+"<br>")
    document.write("Apellido: "+apellido+"<br>")
    document.write("DNI: "+dni+"<br>")
    document.write("Fecha de nacimiento: "+fecha_nacimiento+"<br>")
    document.write("Localidad: "+localidad+"<br>")
    document.write("Domicilio: "+domicilio+"<br>")
    document.write("Lenguaje 1: "+vbox1+"<br/>");
	document.write("Lenguaje 2: "+vbox2+"<br/>");
	document.write("Lenguaje 3: "+vbox3+"<br/>"); 
		
}