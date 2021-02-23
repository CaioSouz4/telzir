Stack utilizada :
ReactJS
MaterialUI
React Testing Library

Procedimento para executar a aplicação:
Baixar ou clonar repositório
Executar o comando npm install no diretório raiz
Executar o comando npm start no diretório raiz

Procedimento para executar os testes:
Escreva seu cenário de teste no arquivo spec.json na pasta tests
Seu cenário de teste deve ter o seguinte formato:
Exemplo de formato:

{
   "dddOrigemValue":"11",
   "dddDestinoValue":"16",
   "planoValue":"FaleMais30",
   "tempoValue":"20",
   "resultadoSemPlano":"38.00",
   "resultadoComPlano":"0.00"
}
sendo dddOrigemValue, o DDD de origem, dddDestinoValue, o DDD de destino, planoValue,
 o plano FaleMais (entre as opções: 'FaleMais30', 'FaleMais60', 'FaleMais120'), 
tempoValue o tempo em minutos, resultadoSemPlano o resultado do cenário sem o plano,
 resultadoComPlano o resultado do cenário com plano.

Executar então o comando npm test form-calculo no diretório raiz

Estrutura
Em src/test/ os testes da aplicação
Em src/service/ a função de cálculo dos preços dos planos
Em src/styles/ arquivos de estilização
Em src/pages/ o componente principal da aplicação Form.js

Observações
Tomei a liberdade de criar valores ficticios para alguns casos que nã oestavam descritos, por exemplo: custo da ligação de 016 para 017 (caso seja um regra de negócio por favor avisar)