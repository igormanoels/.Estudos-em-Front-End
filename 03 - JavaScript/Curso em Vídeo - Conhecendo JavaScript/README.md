Curso em Vídeo - Curso Grátis de JavaScript e ECMAScript para Iniciantes
Link: https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1

***Baseado no ECMA SCRIPT - Padronização Internacional do JavaScript

**Jornalista      x       **Designer        x       **Programador
Escreve txt       x       Cores             x       Engenharia
Imagens           x       Posições          x       Integração
Mídias            x       Dimensões         x       Segurança

BASICAMENTE ESTAMOS FALANDO DE:
CONTEÚDO - HTML
DESINING - CSS
INTERAÇÕES - JavaScrip

    **Client
    Interações que ocorrem do lado do usuário

    **Servidor
    O que prove a informação que é buscada pelo client

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide

https://www.ecma-international.org/wp-content/uploads/ECMA-262_13th_edition_june_2022.pdf

Tipos Primitivos Primordiais
number
    Infinity
    Nan
string
boolean
null
undefined
object
    Array
function

O comando "typeof" dentro do terminal do node, mostra o tipo de objeto se refere a variável ou valor

ex. typeof 6 --> retorna "number"  6 = numero
ex. typeof "nome da variável" --> retorna o tipo de valor que aquela variavel recebe


### Aula 6 
+ --> é simbologia para concatenação 
= --> é simbologia para receber um valor

var n1 = 1545.5   // atribuição de valor
n1.toFixed(2)        // fixa valor com dois digitos após a vírgula
'1545.50'

n1.toLocaleString(`pt-BR`, {style: 'currency', currency: 'BRL'})
'R$ 1.545,50'        // atribui valor segundo moeda local

### Aula 7 e Aula 8
Operadores "A EXECUÇÃO DAS **OPERAÇÕES** DENTRO DE UM SCRIP, OCORREM EM CASCATA, SEGUINDO A ORDEM ABAIXO:"
            **Aritméticos** (são binários)
                            +       "Soma" 
                            -       "Subtração" 
                            *       "Multiplicação"
                            /       "Divisão real"
                            %       "Resto da divisão"
                            **      "Potencia"
            **Atribuição**
                            ++          "soma valor da variavél +1" (incremento)
                            --          "subtrai valor da variavél -1" (decremento)
                            += 5        "atribui ao valor da variavel a soma de 5"
            **Relacionais**
                            >       maior
                            <       menor
                            >=      maior ou igual
                            <=      menor ou igual
                            ==      igual
                            !=      diferente
                            ===     identico        "igualdade para valores em grandeza e tipo, quando a comparação é feita o jS compara não só o valor, mais também o tipo de item, serve para diferenciar um texto de um número (ex. 5 (Number) == '5'(String) )"
                            !==     não identico    "compara a igualdade como no operador anterior
            **Lógicos**
                            !       negação   (não)     "
                            &&      conjunção (e)       "precisa de ambos para seguir"
                            ||      disjunções (ou)     "precisa de apenas um para seguir"
            **Ternários**
                            Os operadores são ? e :
                            teste      ? "True"     : "False"
                            media >= 7 ? "Aprovado" : "Reprovado"
                            Para este caso, se a média for maior ou igual a 7, o aluno terá a mensagem de aprovado, caso contrário, reprovado.


Ordem de precedência 
    ()          "primeiro oq estiver dentro do parentes"
    **          "em seguida as potencias"
    * / %       "os operadores de multiplicação"
    + -         "e por ultimo os valores de adção e subtração"

### Aula 9 e 10
DOM "DOCUMENT OBJECT MODEL" - modelo de objeto para documentos
É um conjunto de objetos do navegador, que fará com que o projeto criado rode.

Árvore DOM tudo o que for criado vai ser para a raiz, conhecida como window

        window
            location - url
            document - documento atual
                html
                    head 
                        meta
                        title
                    body
                        h1
                        p
                            strong
                        div

            history - navegação do site

quando for utilizar seleções via queryselector lembre-se:
                    .       seleção de class (ex. var x = window.document.querySelector('div.msg1'))
                    #       seleção de id (ex. var x = window.document.querySelector('div#msg1'))

### Aula 11, 12, 13, 14 e 15
## Estrutura
CONDIÇÕES SIMPLES
        if(condição){
            true
        }
        
CONDIÇÕES COMPOSTAS
        if(condição ){
            true
        }else{
            false   
        }

CONDIÇÕES ANINHADAS
        if(condição){
            bloco1
        }else{
            if{
                bloco2
            }else{
                bloco3
            }
        }
CONDIÇÕES MÚLTIPLAS
        switch (expressão) {
    case valor1: **Funciona com string's e Num's**
        break;  **A função do break é pausar a execução da expressão uma vez que houve um encontro que satisfação a condição imposta.**
    case valor2:
        break;
    case valor3:
        break;
    default:    
    case valor4: 
        break; // Na última condição o break é opcional, mas na dúvida se coloca.
}              // Caso não tenha o break, e o Case Valor2 seja a resposta encontrada, o JS
               // irá retornar todos os valores após esse case até o encerramento do teste. 