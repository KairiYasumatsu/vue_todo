var app = new Vue({
  el: '#app',
  data: {
    edittext: "",
    editkey: -1,
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
    editshow(key){
      this.edittext = this.todos[key]
      this.editkey = key
    },
    editvalue(){
      this.todos[this.editkey] = this.edittext
     this.saveTodo()
     this.edittext = ""
     this.editkey = -1
    },
    saveTodo() {
      const jsonText = JSON.stringify(this.todos)
      localStorage.list = jsonText
    }
  }
})