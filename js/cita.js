function validarFormulario() 
{
    // Validar que el checkbox esté seleccionado
    if (!document.getElementById("acepto_checkbox").checked) 
    {
        alert("Debes aceptar el tratamiento de tus datos para continuar.");
        return false;
    }
    alert("Su solicitud a sido enviada exitosamente. Nos comunicaremos con usted en las proximas 24 horas.");
    return true;
    
}