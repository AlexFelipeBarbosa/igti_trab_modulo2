# igti_trab_modulo2
Repositório criado para o Trabalho Pratico do Modulo 2 -  BootCamp FullStack - IGTI

ObjetivosExercitar os seguintes conceitos trabalhados no Módulo: <br>
	* Criação de um projeto Node.js. <br>
	* Manipulação de arquivos. <br>
	* Manipulação de objetos JSON. <br>

Enunciado<br>
O aluno deverá criar um projeto Node.js para realizar a criação de alguns métodos e processamento de arquivos JSON.<br><br>
Atividades <br><br>
O aluno deverá baixar os arquivos Cidades.json e Estados.json do link a seguir <br>
(https://github.com/felipefdl/cidades-estados-brasil-json (Links para um site externo.)) e colocá-los dentro do seu projeto. <br>
O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um representado por um ID. <br>
No arquivo Cidades.json estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo ID <br>
fazendo referência ao arquivo Estados.json.O aluno deverá desempenhar as seguintes atividades:<br>
	1. Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json,<br>
  e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. <br>
  O nome do arquivo deve ser o UF do estado, por exemplo: MG.json. <br><br>
	2. Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente <br>
  e retorne a quantidade de cidades daquele estado. <br><br>
	3. Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, <br>
  seguidos da quantidade, em ordem decrescente.<br>
  Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”] <br><br>
	4. Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, <br>
  seguidos da quantidade, em ordem decrescente. 
  Utilize o método criado no tópico anterior. <br>
  Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]<br><br>
	5. Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF.<br>
  Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. <br>
  Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].<br><br>
	6. Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF.<br>
  Em caso de empate, considerar a ordem alfabética para ordená-los e então retorne o primeiro. <br>
  Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].<br><br>
	7. Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. <br>
  Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: “Nome da Cidade - UF".<br><br>
	8. Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF.<br>
  Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: “Nome da Cidade - UF".<br><br>

O projeto ao ser executado, deve realizar os cinco métodos em sequência, imprimindo os resultados em console e depois finalizando a execução.<br>
