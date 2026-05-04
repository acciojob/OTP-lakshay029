//your JS code here. If required.
const inputs=document.querySelectorAll(".code")
inputs[0].focus();
inputs.forEach((input,i)=>{
	input.addEventListener('keyup',(e)=>{
		if(e.key>='0' && e.key<='9'){
			inputs[i+1].focus();
		}else if(e.key=='Backspace'){
			
			inputs[i-1].focus();
		}
		else{
			e.preventDefault();
		}
	})




	
})