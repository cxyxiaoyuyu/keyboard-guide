//1 initial Data
let { keys, hash } = initialData()

// 2 create Element
generateElement()

// 3 add Listener
addListener()

//1 initial data
function initialData() {
  var keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ]
  var hash = {
    'q': 'www.qq.com',
    'w': 'weibo.com', 
    'e': 'ele.me', 
    'r': 'renren.com', 
    't': 'tianya.com', 
    'y': 'youtube.com', 
    'u': 'uc.com', 
    'i': 'iqiyi.com',
    'o': 'opera.com', 
    'p': undefined, 
    'a': 'acfun.tv', 
    's': 'www.sohu.com', 
    'z': 'zhihu.com', 
    'm': 'www.mcdonalds.com.cn'
  }
  // get from localStorage
  var hashInLocalStorage = JSON.parse(localStorage.getItem('sites') || 'null')
  if (hashInLocalStorage)
    hash = hashInLocalStorage

  return { keys, hash }
}

// 2 create element
function generateElement() {
  for (var i = 0; i < keys.length; i++) {
    div = createElement('div', { 'className': 'row' })
    main.appendChild(div)

    for (var j = 0; j < keys[i].length; j++) {
      span = createElement('span', { 'textContent': keys[i][j], 'className': 'text' })

      // 创建显示网站icon的img标签
      img = createElement('img', { 'src': 'http://' + hash[keys[i][j]] + '/favicon.ico' })
      img.onerror = function (ev) {
        ev.target.src = "./dot.png"
      }

      // 创建编辑网页地址的editButton 标签
      let editButton = createElement('button', { 'textContent': 'Edit', 'id': keys[i][j] })
      editButton.onclick = function (ev) {     // 添加编辑事件
        let id = ev.target.id 
        let input_site = prompt('Give me a website')
        hash[id] = input_site
        // 将网页地址添加到 前兄弟节点 img 上
        ev.target.previousSibling.src = 'http://' + input_site + '/favicon.ico'
        localStorage.setItem('sites', JSON.stringify(hash))
      }

      // 将img span button 放入kbd 标签中
      kbd = createElement('kbd', { 'className': 'key' })
      kbd.appendChild(span)
      kbd.appendChild(img)
      kbd.appendChild(editButton)

      div.appendChild(kbd)
    }
  }
}

// 3 add Listener
function addListener() {
  document.onkeypress = function (ev) {
    window.open('http://' + hash[ev.key])
  }
}

function createElement(tagName, attributes) {
  tag = document.createElement(tagName)
  Object.assign(tag,attributes)
  // for (var key in attributes) {
  //   tag[key] = attributes[key]
  // }
  return tag
}