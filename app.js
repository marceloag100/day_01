var app = new Vue({
  el: '#app',
  data: {
    task: null,
    todos: []
  },
  methods: {
    addTask: function (task) {
      var date = moment().format('YYYY/MM/DD HH:mm:ss')
      if (task) {
        var newTask = {
          task: task,
          createdAt: date
        }
        this.todos.push(newTask)
        this.task = ''
        date = null
      }
    },
    deleteTask: function (t) {
      this.todos.splice(t, 1)
    }
  },
  filters: {
    fromNow (date) {
      return moment(date, 'YYYY/MM/DD HH:mm:ss').fromNow()
    }
  },
  created () {
    this.interval = setInterval(() => this.$forceUpdate(), 5000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
})
