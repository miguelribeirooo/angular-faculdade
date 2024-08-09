# Explicação

Não fiz botoes de navegação para rotas entre os componentes, mas esta funcionando.

Seguindo as aulas percebi que as versões do angular da aula estao diferentes das dispoiniveis atualmente, entao tive que ver videos por fora sobre routing no angular.

se você olhar no arquivo 'src\app\app.routes.ts' verá como esta funcionando as rotas
outra coisa que facilitou a organizacao dos componentes foi a seguinte linha de comandos que executei com base em uma documentação:

```console
ng generate module modulo-a --routing
ng generate component modulo-a/componente-a1
ng generate component modulo-a/componente-a2

ng generate module modulo-b --routing
ng generate component modulo-b/componente-b1
ng generate component modulo-b/componente-b2

```