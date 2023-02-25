let conexionServidor = async()=>{
    let comunicacion = await fetch("https://mizamarzes.github.io/Conexion_Servidor_github/");
    let texto = await comunicacion.text();
    document.querySelector("body").innerHTML = texto;
}
conexionServidor();
