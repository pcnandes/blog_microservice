# Objetivo

O objetivo deste projeto é explorar o conceito de microserviços e algumas outras tecnologias como Redis, WebSocket e Docker. O framework escolhido para o backend será o nestjs. Utilizei como referencia um projeto que mantenho atualizado com a maioria das bibliotecas que utilizo. (https://github.com/pcnandes/nest_reference_project). Boa parte da documentação estará no código.

# O Sistema (Blog)

Para testar os conceitos abordados no tópico anterior, optei por criar um blog simples.

## Funcionalidades:

- login/cadastro utilizando midias sociais (OAuth);
- controle de acesso (apenas o criado da postágem poderá alterá-la);
- comentar postagens;
- curtir postagens;
- notificar o usuario via email quando suas postagens receber comentários ou curtidas;
- notificar usuário via WebSocket quando suas postagens receber comentários ou curtidas;
- _enviar notificações via push quando suas postagens receber comentários ou curtidas_;
- permitir pesquisar nas postagens e comentários;

## modelo de dados

![Modelo de Dados](/docs/modelo.svg)

- usuario pode criar postagens;
- usuario pode comentar postagens;
- usuario pode curtir postagens;

## Distribuísção dos serviços

![Modelo de Dados](/docs/modelo.svg)

Para esse estudo optei por criar 4 serviços:

- Segurança -> responsável pelo login e controle de acesso.
- Consulta -> em um caso real teríamos mais consultas que criação de conteúdo. Pensando nisso, separei esse serviço pois assim posso escaloná-lo melhor conforme minha aplicação cresça;
- Cadastro -> responsável por criar postagens, comentários e curtidas;
- Notificações -> responsável por enficar notificações (email, socket e push) para o usuário;

**TODO** Criar diagrama com todos os serviços, loadbalance, banco, filas, etc.

## Porque usar MongoDB?

Como a aplicação não possui necessidade de uma forte integridade relacional e provavelmente precisarei de buscas textuais complexas, optarei por usar MongoDB. Além disso será uma oportunidade de testar algo novo, visto que minha experiência é maior no mundo relacional (Postgres e Mysql).

`$ npm install --save @nestjs/mongoose mongoose`

## Organização do projeto
