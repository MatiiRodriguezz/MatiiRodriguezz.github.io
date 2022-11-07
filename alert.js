
document.querySelector('#enviar').addEventListener('click', (e) => {
        e.preventDefault()
        Swal.fire({
            title: '¡Formulario enviado con exito!',
            text: 'Muchas gracias por rellenar el formulario',
            icon: 'success',
            footer: 'Sera redireccionado en 5 segundos.',
            allowOutsideClick: false,
            showConfirmButton: false
    })
    setTimeout(() => {
        window.location.href = "/"
    }, 5000)
})