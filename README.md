<h3>Stack utilizada :<h3> 
<ul>
  <li>ReactJS<li>
  <li>MaterialUI<li>
  <li>React Testing Libraryg<li>
</ul>

<h3>Procedimento para executar a aplicação:</h3> 
<ul>
    <li>Baixar ou clonar repositório<li>
    <li>Executar o comando  <code>npm install</code> no diretório raiz<li>
    <li>Executar o comando  <code>npm start</code> no diretório raiz<li>
</ul>


<h3>Procedimento para executar os testes: </h3> 
<ul>
    <li>Escreva seu cenário de teste no arquivo <code>spec.json</code> na pasta tests <li>
    Seu cenário de teste deve ter o seguinte formato:  
    <blockquote>Exemplo de formato:</blockquote>

        ```JSON
            {
                "dddOrigemValue": "11",
                "dddDestinoValue": "16",
                "planoValue": "FaleMais30",
                "tempoValue": "20",
                "resultadoSemPlano": "38.00",
                "resultadoComPlano": "0.00"
            }
        ```
    sendo dddOrigemValue, o DDD de origem, dddDestinoValue, o DDD de destino, planoValue, o plano FaleMais (entre as opções: 'FaleMais30', 'FaleMais60', 'FaleMais120'), tempoValue o tempo em minutos, resultadoSemPlano o resultado do cenário sem o plano, resultadoComPlano o resultado do cenário com plano. 

    <li>Executar então o comando <code>npm test form-calculo</code> no diretório raiz<li>
</ul>

<h3>Estrutura</h3>
Em <code>src/test/</code> os testes da aplicação
Em <code>src/service/</code> a função de cálculo dos preços dos planos 
Em <code>src/styles/</code> arquivos de estilização
Em <code>src/pages/</code> o componente principal da aplicação Form.js


<h3>Observações</h3>
Tomei a liberdade de criar valores ficticios para alguns casos que nã oestavam descritos,
por exemplo: custo da ligação de 016 para 017 (caso seja um regra de negócio por favor avisar)







