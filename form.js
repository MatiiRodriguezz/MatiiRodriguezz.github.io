var inputs = document.getElementsByClassName("formulario__input");
for (var i =0; < inputs.lenght; i++) {
    inputs{i} addEventListener("keyup", function(){
        if(this.value.lenght>=1) {
            this.nextElementsibling.classList.add("fijar");
        }
    }
    )
}