window.addEventListener('load', (e) => {
	const form = document.querySelector('#form')
    const btn = document.querySelector('#bttn-message')
    const btn_link = document.querySelector('#bttn-link')
    var number_input = document.querySelector('#numberinput');
	var text_input = document.querySelector('#textinput');

    number_input.addEventListener('input',()=>{
        number = number_input.value
        text = text_input.value
        if(number.length>=11){
            btn.disabled = false
            btn_link.disabled = false
        }else{
            btn.disabled=true
            btn_link.disabled=true
        }
    })

	form.addEventListener('submit', (e) => {
		e.preventDefault();
        btn_link.addEventListener("click",()=>{
            btn_link.style.backgroundColor = "rgb(17, 155, 0)";
            btn_link.style.color = "white"
            btn_link.innerHTML = "LINK COPIADO"
            navigator.clipboard.writeText(`https://web.whatsapp.com/send?phone=55${number}?text=${text}`);

        })
        btn.addEventListener("click",()=>{
            window.open(`https://web.whatsapp.com/send?phone=55${number}?text=${text}`)
        })
    })
})
