var app = new Vue({
  el: '#app',
  data: {
    text: "",
    todos: JSON.parse(localStorage.list || "[]")
  },
  methods: {
    addvalue: function(){
      this.todos.push(this.text)
      this.saveTodo()
      this.text = ""
    },
    removeTodo(key) {
      this.todos.splice(key, 1);
      this.saveTodo()
    },
    saveTodo() {
      const jsonText = JSON.stringify(this.todos)
      localStorage.list = jsonText
    }
  }
})