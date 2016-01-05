function Router (routes) {
  this.routes = routes

  window.addEventListener('popstate', function (event) {
    console.log(event)
    this.route()
  }.bind(this))

  document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      if (event.target.href.startsWith(window.location.origin)) {
        event.preventDefault()
        console.log(event)
        history.pushState(null, '', event.target.attributes.href.value)
        this.route()
      }
    }
  }.bind(this))
  this.route()
}

Router.prototype.route = function () {
  Array.from(document.querySelectorAll('section'))
    .forEach(function (section) {
      section.style.display = 'none'
    })

    Object.keys(this.routes).forEach(function (key) {
      if (this.route[key] === window.location.pathname) {
        var handler = this.route[key]
        document.title = handler.title
        document.querySelector(handler.element)
          .style.display = 'block'
      }
    })
}

module.exports = Router
