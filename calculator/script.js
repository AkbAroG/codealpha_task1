let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
console.log(arr);

arr.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            console.log(input.value);
            
        }
        else if (e.target.innerHTML == 'AC') {
          string= string.substring(0,string.length-1)
          input.value = string;
        }
          else if (e.target.innerHTML == 'DEL') {
          string="";
          input.value = string;
        }
      
        else {
            string = string + e.target.innerHTML;
            input.value = string;
            console.log(input.value);
            
        }
    })
})
