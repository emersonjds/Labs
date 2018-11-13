// O que revolucionou o desenvolvimento web foi o AJAX (Asynchronous JavaScript And XML). Isso porque sempre que precisávamos de uma atualização na página, mesmo que fosse para atualizar um dado, a página inteira tinha que ser recarregada, vindo o HTML inteiro montado no servidor.

// O AJAX faz uma requisição para o servidor sem travar o que o navegador está executando, e ao invés de receber uma página inteira vinda do servidor, recebíamos apenas os dados a serem atualizados. Esses dados vinham em XML e nós então, com JavaScript, atualizávamos apenas um pedaço específico da página.

// Por serem apenas os dados sendo trafegados, a velocidade era mais rápida, e como não havia recarregamento da página, passava a impressão de uma aplicação mais parecida com as aplicações Desktop.

// Hoje em dia o nome AJAX não faz tanto sentido, já que a maioria dos sistemas usam JSON ao invés de XML. Porém, a ideia de código assíncrono ainda é muito usada.

// A ideia de código assíncrono é que nós não estaremos executando uma linha depois da outra. Podemos chamar uma função, ir para outro ponto do código e voltar para a função apenas quando necessário. Acontece que não sabemos quando isso irá ocorrer. Isso caracteriza um código assíncrono.

// Um exemplo bem simples é o “setTimeout()”:
console.log("First Message");
setTimeout(() => {
  console.log("Second")
}, 2000);
console.log("Third Message");
// A terceira mensagem será impressa primeiro, pois a segunda será executada após 2 segundos. Veja que saímos do fluxo comum, e isso é um código assíncrono.

// Quando trabalhamos com códigos assíncronos, precisamos passar uma função que será executada quando o fluxo de execução voltar. No nosso exemplo, a segunda mensagem é executada dentro de uma função. Essa função que é executada é chamada de callback.
