// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ['foo', 'bar'];

let values: Array<number>;
values = [1, 2, 3];

// tuple (tipos dos valores previsíveis)
let title: [number, string];
title = [1, 'foo'];

// enum (Construção de chave e valor, podendo assim fazer uma chamada mais fácil)
enum Colors {
  white = '#fff',
  black = '#000',
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = [1];

// void (vazio/sem retorno)
function logger(): void {
  console.log('foo');
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error('error');
}

// object
let cart: object;

cart = {
  key: 'fi',
};
