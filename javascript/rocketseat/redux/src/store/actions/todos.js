export const addTodo = text => ({
  type: "ADD_TODO",
  payload: { text }
});
// dentro do dispatch ficam informações a respeito do que os reducers irao ouvir
// type é obrigatorio, como se fosse um id, a ação que esta sendo feita
// um padrao utilizado no redux para actions é que todo valor passado na action , deve estar dentro de um objeto payload
