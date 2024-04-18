function enviar(){

  document.getElementById('botaoform').style.display = 'none'

  if(document.getElementsByName('resposta1')[0].checked){
    document.getElementById('resultado').innerHTML += 'Pergunta 1 correta!!!<br>'
  }else{
    document.getElementById('resultado').innerHTML += 'Pergunta 1: Era a opção a<br>'
  }

  if(document.getElementsByName('resposta2')[3].checked){
    document.getElementById('resultado').innerHTML += 'Pergunta 2 correta!!!<br>'
  }else{
    document.getElementById('resultado').innerHTML += 'Pergunta 2: Era a opção d<br>'
  }

  if(document.getElementsByName('resposta3')[1].checked){
    document.getElementById('resultado').innerHTML += 'Pergunta 3 Correta!!!<br>'
  }else{
    document.getElementById('resultado').innerHTML += 'Pergunta 3: Era a opção b'
  }
}
