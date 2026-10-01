
function mostrarInformacionDolar() {
    const banner = document.getElementById("banner-cotizacion");
    const tiempoEsperaMs = 2500; // 2.5 segundos de retraso

    setTimeout(() => {
        banner.innerHTML = `🔔 <strong>Cotización del dólar hoy:</strong> $1.200`;
        banner.style.display = "block";
    }, tiempoEsperaMs);
}


mostrarInformacionDolar();


const btnProcesar = document.getElementById("btn-procesar");
const inputMonto = document.getElementById("monto");
const divMensaje = document.getElementById("mensaje-estado");

btnProcesar.addEventListener("click", () => {
    
    divMensaje.className = "resultado";
    divMensaje.textContent = "";

    try {
        const monto = parseFloat(inputMonto.value);

        // Validaciones propensas a error (lógica de negocio del simulador)
        if (isNaN(monto)) {
            throw new Error("Debes ingresar un valor numérico válido.");
        }

        if (monto <= 0) {
            throw new Error("El monto debe ser mayor a $0.");
        }

        if (monto > 50000) {
            throw new Error("El monto excede el límite máximo permitido por transacción ($50.000).");
        }

        
        divMensaje.className = "resultado exito";
        divMensaje.textContent = `✅ Operación procesada con éxito por un total de $${monto.toLocaleString("es-AR")}.`;

    } catch (error) {
        
        console.error("Detalle técnico del error:", error.message);
        
        divMensaje.className = "resultado error";
        divMensaje.textContent = `⚠️ No se pudo procesar la operación: ${error.message} Intentá de nuevo.`;

    } finally {
        
        console.log("Bloque finally ejecutado: Se restableció el estado del botón/formulario.");
        
        
        inputMonto.value = "";
        inputMonto.focus();
    }
});