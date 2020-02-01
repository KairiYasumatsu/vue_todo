var app = new Vue({
  el: '#app',
  data: {
    edittext: "",
    editkey: "",
    text: "",
    edit: false,
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
      this.edit = true
      this.editkey = (key)
    },
    editvalue(){
      this.todos[this.editkey] = this.edittext
     this.saveTodo()
     this.edittext = ""
     this.edit = false
    },
    saveTodo() {
      const jsonText = JSON.stringify(this.todos)
      localStorage.list = jsonText
    }
  }
})