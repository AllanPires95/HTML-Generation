/*
Case sensitive = reconhece letras maiusculas e minisculas

    por tag: getElementTagName(
    por id: getElementeByID()
    por nome: getElementsByName()
    por classe: getElementsByName()
    por seletor: querySelector()
    */

    let nome =  window.document.getElementById('nome')
    let email = document.querySelector('#email')
    let assunto = document.querySelector('#assunto')
    let nomeOk = false
    let emailOk = false
    let nassuntoOk = false
    let mapa = document.querySelector("#mapa")

    nome.style.width ='100%'
    email.style.width = '100%'  

    function validaNome()   {
        let txt = document.querySelector('#txtNome')
        if (nome.value.length <3)   {
          txt.innerHTML = 'Nome inválido'
            txt.style.color = 'red'

        } else {txt.innerHTML='Nome váldo'
        txt.style.color = 'green'
        nomeOk = true
        }
        function validaEmail () {
            let txt = document.querySelector('#Email')

            if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
            txtEmail.innerHTML ="E-mail inválido"
            txtEmail.style.color ='purple'

        }else {

            txt.innerHTML='E-mail váldo'
        txt.style.color = 'green'
        emailOk = true
        }
    }

        function validaAssunto () {
            let.txt = document.querySelector('#txtAssunto')
            
            if(assunto.value.length >= 100 ) {
                txtAssunto.innerHTML = 'Texto é muito longo, digite no máximo 100 caracteres'
                txtAssunto.style.color = 'yellow'
                txtAssunto.style.display = 'block'
            } else {
                txtAssunto.style.display = 'none'
                assuntoOK = true
            }
        function enviar () {

            if (nomeOk == true && emailOk == true && assuntoOk == true){
                alert('Formulário enviado com sucesso!')
            } else {
                alert ("Preencha o formulário corretamente antes de enviar!")
            }
        }
        function mapaZoom (){
            mapa.style.width = '800px'
            mapa.style.height = '600px'


        }
        function mapaNormal(){

            mapa.style.width = '400px'
            mapa.style.height = '250px'


        }
    }