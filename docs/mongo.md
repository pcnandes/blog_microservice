# Anotações MongoDB

## Insert Operator

```javascript
db.alunos.insert({
  nome: 'Fernando',
  data_nascimento: new Date(1994, 03, 26),
  notas: [10, 4.5, 7],
  curso: {
    nome: 'Sistema de informação',
  },
});
```

## Find

https://docs.mongodb.com/manual/reference/method/db.collection.find/index.html

1. AND

```javascript
db.alunos
  .find({
    nome: 'Felipe',
  })
  .pretty();

db.alunos.find({ 'habilidades.nome': 'inglês' }).pretty();
```

2. AND

```javascript
db.alunos.find({
  nome: 'Felipe',
  'habilidades.nome': 'inglês',
});
```

3. OR e AND

```javascript
db.alunos.find({
  $or: [
    { 'curso.nome': 'Sistemas de informação' },
    { 'curso.nome': 'Engenharia Química' },
  ],
  nome: 'Daniela',
});
```

4. IN

```javascript
db.alunos.find({
  'curso.nome': {
    $in: ['Sistema de informação', 'Engenharia Química'],
  },
});
```

## Update

https://docs.mongodb.com/manual/reference/operator/update/

Por padrao, o update substitui apenas o primeiro documento encontrado. multi: true define q tds deverão ser alterados

- atualiza parte do documento

```javascript
db.alunos.update(
  { 'curso.nome': 'Sistemas de informação' },
  {
    $set: { 'curso.nome': 'Sistemas de Informação' },
  },
  {
    multi: true,
  },
);
```

- Atualiza o documento inteiro

```javascript
db.alunos.update(
    {"curso.nome" : "Sistema de informação"}
    {
        "nome" : "Sistemas de informação"
    }
)
```

- substitui o array inteiro

```javascript
db.alunos.update(
  {"_id" : ObjectId("56cb0002b6d75ec12f75d3b5")},
  {$set : {
    {
      "notas" : [
        10,
        9,
        4.5,
        8.5
      ]
    }
  }
}
```

**Alguns Operadores de update**
$set: muda o valor de um campo;
$unset: remove um campo do documento;
$rename: muda o nome de um campo do documento;
$inc: quando um campo numérico precisa ser incrementado (ou decrementado, usando um valor negativo);
\$mul: quando um campo numérico precisa ser multiplicado;

**mongo nao indexa ausencia de valores por isso prefira os operadoes $e, $in e $all no lugar de $ne**

**use explain() para analisar as queryes**

#### Update em arrays

https://docs.mongodb.com/manual/reference/operator/update-array/

1. inclui um elemento no array

```javascript
db.alunos.update(
  { _id: ObjectId('56cb0002b6d75ec12f75d3b5') },
  {
    $push: {
      notas: 8.5,
    },
  },
);
```

2. adiciona o elemento no array, mas somente se ele elemento nao existir (parecido com set)

```javascript
db.alunos.update(
  { _id: ObjectId('56cb0002b6d75ec12f75d3b5') },
  {
    $addToSet: {
      notas: 8.5,
    },
  },
);
```

3. inclui N elementos no array

```javascript
db.alunos.update(
  { _id: ObejctId('56cb0139b6d75ec12f75d3b6') },
  {
    $push: {
      notas: { $each: [8.5, 3] },
    },
  },
);
```

## Pesquisas

**Operadores** https://docs.mongodb.com/manual/reference/operator/query/

- igualdade. Quando usado em um array, automaticamente o mongo usa \$in

```javascript
db.alunos.find({
  notas: 8.5,
});
```

- maior que
  **findOne -> um registro**

```javascript
db.alunos.findOne({
  notas: { $gt: 5 },
});
```

- menor que

```javascript
db.alunos.find({
  notas: { $lt: 5 },
});
```

- ordenando e limitando a qtd de resultados
  **1 -> crescente; 2 -> decrescente**

```javascript
db.alunos
  .find()
  .sort({ nome: 1 })
  .limit(3);
```

## Importando documentos

**importando para o documento alunos um array json que esta no arquivo alunos.json**
mongoimport -c alunos --jsonArray < alunos.json

## Geo Localização

Para rabalhar com localizações no mapa, preciso ter no meu documento as propriedades coordinates, com as coordenadas e o type.

```javascript
db.alunos.update(
  { _id: ObjectId('56cb0139b6d75ec12f75d3b6') },
  {
    $set: {
      localizacao: {
        endereco: 'Rua Vergueiro, 3185',
        cidade: 'São Paulo',
        coordinates: [-23.588213, -46.632356],
        type: 'Point',
      },
    },
  },
);
```

- criando um index. Para criar busca por proximidade é preciso criar um indice

```javascript
db.alunos.createIndex({
  localizacao: '2dsphere',
});
```

- realiza busca de proximidade

```javascript
db.alunos.aggregate([
  {
    // operador
    $geoNear: {
      // pega os mais proximos
      near: {
        // indica as coordenadas e o tipo
        coordinates: [-23.5640265, -46.6527128],
        type: 'Point',
      },
      // campo que será criado para calcular a distancia
      distanceField: 'distancia.calculada',
      // indica que a busca será feita em um globo e a altura será ignorada
      spherical: true,
    },
  },
]);
```

Nesse exemplo, foi pego uma localização existente no banco, por isso trouxe tbm o proprio. É possivel retirar o primeiro documento e definir uma quantidade de documentos retornados.

```javascript
db.alunos.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-23.5640265, -46.6527128],
        type: 'Point',
      },
      distanceField: 'distancia.calculada',
      spherical: true,
      // nomero de registros retornados
      num: 4,
    },
  },
  // quantos devem ser pulados
  { $skip: 1 },
]);
```

## Definindo o nivel de operação (ACID)

Mongo permite definir os niveis de operações, e controle de concorrencia.
https://docs.mongodb.com/manual/reference/read-concern/
https://docs.mongodb.com/manual/reference/write-concern/
