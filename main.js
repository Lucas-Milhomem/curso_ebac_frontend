function valid () {

const pona = document.getElementById ('numeroA').value;
const ponb = document.getElementById ('numeroB').value;

const numa = parseFloat (pona);
const numb = parseFloat (ponb);

if (numb > numa) {
    alert ('Obrigado pelo envio');
}

else{ 
    alert ('O segundo valor precisa ser maior do que o primeiro');
}


}