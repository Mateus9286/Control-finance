function renderControle() {
  const valorTodos = document.getElementById("valorTotal");
  valorTodos.innerText = "";
  insertedValues.forEach((element) => {
    const container = document.getElementById("valores");
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    const button = document.createElement("button");
    const img = document.createElement("img");

    section.classList.add("controle");
    section.id = element.id;
    h3.classList.add("controleValor");
    button.classList.add("btnControle");

    h3.innerText = ` R$ ${element.value}`;
    if (element.categoryID == 1) {
      button.innerText = valuesCategory[0];
    }
    if (element.categoryID == 2) {
      button.innerText = valuesCategory[1];
    }
    img.src = "./assets/trash.png";
    img.id = "lixeira";

    div.append(button, img);
    section.append(h3, div);
    container.append(section);
   
  });

  const valorTotal = insertedValues.reduce((previousValue, currentValue) => previousValue + currentValue.value,0)
  
  valorTodos.innerText = `R$ ${valorTotal}`;
}
renderControle();

function templateControle(string) {
  const input = document.querySelector("input");
  const valor = input.value;

  const btnCriar = document.querySelector(".btnValor");
  const container = document.getElementById("valores");
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const div = document.createElement("div");
  const button = document.createElement("button");
  const img = document.createElement("img");

  section.classList.add("controle");
  const referente = insertedValues.reverse();
  section.id = referente[0].id++;
  h3.classList.add("controleValor");
  button.classList.add("btnControle");

  h3.innerText = ` R$ ${valor}`;
  button.innerText = string;
  img.src = "./assets/trash.png";
  img.id = "lixeira";

  div.append(button, img);
  section.append(h3, div);

  btnCriar.addEventListener("click", (event) => {
    event.preventDefault();
    container.append(section);
    const Modal = document.getElementById("container");
    Modal.classList.toggle("flex");
    Modal.classList.toggle("containerModal");
    
  });
  // const valorTotal = insertedValues.reduce((previousValue, currentValue) => previousValue + currentValue.value,0);
  // const valorTodos = document.getElementById("valorTotal");
  // valorTodos.innerText = `R$ ${valorTotal}`;
  return section;
}

function eventoAdd() {
  const btnEntrada = document.querySelector("#entrada");
  const btnSaida = document.querySelector("#saida");
  const Entrada = "Entrada";
  const Saida = "Saida";

  btnEntrada.addEventListener("click", (event) => {
    event.preventDefault();
    templateControle(Entrada);
  });

  btnSaida.addEventListener("click", (event) => {
    event.preventDefault();
    templateControle(Saida);
  });
}
eventoAdd();

function capturandoDados() {
  const input = document.querySelector("input");
  const btnEntrada = document.querySelector("#entrada");
  const btnSaida = document.querySelector("#saida");
  const criar = document.querySelector(".btnValor");

  btnEntrada.addEventListener("click", (event) => {
    event.preventDefault();
    criar.addEventListener("click", (event) => {
      event.preventDefault();

      const referente = insertedValues.reverse();
      const contador = {};
      contador.id = referente[0].id + 1;
      contador.value = +input.value;
      contador.categoryID = 1;
      insertedValues.push(contador);
    });
  });
  btnSaida.addEventListener("click", (event) => {
    event.preventDefault();
    criar.addEventListener("click", (event) => {
      event.preventDefault();

      const referente = insertedValues.reverse();
      const contador = {};
      contador.id = referente[0].id + 1;
      contador.value = +input.value;
      contador.categoryID = 2;
      insertedValues.push(contador);
    });
  });
}
capturandoDados();

function filtraTodos() {
  const button = document.getElementById("todos");
  const valorTodos = document.getElementById("valorTotal");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const container = document.getElementById("valores");
    valorTodos.innerText = "";
    container.innerText = "";
    insertedValues.forEach((element) => {
      templateDosFiltros(element);
    });
    const valorTotal = insertedValues.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0
    );
    valorTodos.innerText = `R$ ${valorTotal}`;
  });
}
filtraTodos();

function filtraEntrada() {
  const button = document.getElementById("entradas");
  const valorEntrada = document.getElementById("valorTotal");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const entradas = insertedValues.filter(
      (element) => element.categoryID == 1
    );
    const container = document.getElementById("valores");

    container.innerText = "";
    entradas.forEach((element) => {
      templateDosFiltros(element);
    });

    valorEntrada.innerText = "";
    const valorTotal = entradas.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0
    );
    valorEntrada.innerText = `R$ ${valorTotal}`;
  });
}
filtraEntrada();

function filtraSaida() {
  const button = document.getElementById("saidas");
  const valorSaida = document.getElementById("valorTotal");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const saidas = insertedValues.filter((element) => element.categoryID == 2);

    const container = document.getElementById("valores");
    valorSaida.innerText = "";
    container.innerText = "";
    saidas.forEach((element) => {
      templateDosFiltros(element);
    });

    const valorTotal = saidas.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0
    );
    valorSaida.innerText = `R$ ${valorTotal}`;
  });
}
filtraSaida();

function templateDosFiltros(arr) {
  const container = document.getElementById("valores");
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const div = document.createElement("div");
  const button = document.createElement("button");
  const img = document.createElement("img");

  section.classList.add("controle");
  section.id = arr.id;
  h3.classList.add("controleValor");
  button.classList.add("btnControle");

  h3.innerText = ` R$ ${arr.value}`;
  if (arr.categoryID == 1) {
    button.innerText = valuesCategory[0];
  }
  if (arr.categoryID == 2) {
    button.innerText = valuesCategory[1];
  }
  img.src = "./assets/trash.png";
  img.id = "lixeira";

  div.append(button, img);
  section.append(h3, div);
  container.append(section);
  Excluir();
  return section;
}

function Excluir() {
  const lixeira = document.querySelectorAll("#lixeira");

  lixeira.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const id = event.target.parentNode.parentNode.id;

      const elemento = event.target.parentNode.parentNode;
      insertedValues.forEach((element, i) => {
        if (element.id == id) {
          insertedValues.splice(i, 1);
        }
      });

      const valor = document.getElementById("valorTotal");
      const valorTotal = insertedValues.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      );
      valor.innerText = ` R$ ${valorTotal}`;
      elemento.remove();
    });
  });
}
Excluir();
