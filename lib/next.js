class Router {
  constructor () {

  }
  routes () {
    
  }
}

function Router () {
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
}

Router.prototype.route = function () {
  Array.from(document.querySelectorAll('section'))
    .forEach(function (section) {
      section.style.display = 'none'
    })

  switch (window.location.pathname) {
    case '/about':
      document.title = 'About Us'
      document.querySelector('#about')
        .style.display = 'block'
      break
    case '/shop':
      document.title = 'SG50 Shop'
      document.querySelector('#products')
        .style.display = 'block'
      break
    case '/':
      document.title = 'Homepage'
      document.querySelector('#landing')
        .style.display = 'block'
      break
    default:
      document.querySelector('#error404').style.display = 'block'
  }
}

module.exports = Router
