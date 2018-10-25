var keys = [
['q','w','e','r','t','y','u','i','o','p'],
['a','s','d','f','g','h','j','k','l'],
['z','x','c','v','b','n','m']
]
var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'}

var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
console.log(hashInLocalStorage)
if(hashInLocalStorage)
    hash = hashInLocalStorage

for(var i=0;i<keys.length;i++){
    div = document.createElement('div')
    div.className = 'row'
    main.appendChild(div)
    for(var j=0;j<keys[i].length;j++){
        kbd = document.createElement('kbd')
        span = document.createElement('span')
        span.textContent = keys[i][j]
        span.className = 'text'
        kbd.appendChild(span)
        kbd.className = 'key'
        button= document.createElement('button')
        button.textContent = 'Edit'
        button.id = keys[i][j]
        button.onclick = function(ev){
            id = ev.target.id
            input_site = prompt('Give me a website')
            hash[id] = input_site
            console.log(ev.target.previousSibling)
            ev.target.previousSibling.src= 'http://'+input_site+'/favicon.ico'
            localStorage.setItem('zzz',JSON.stringify(hash))
            console.log(localStorage)

        }
        img = document.createElement('img')
        img.alt = ''
        img.src = 'http://'+hash[keys[i][j]] + '/favicon.ico'
        kbd.appendChild(img)
        kbd.appendChild(button)
        div.appendChild(kbd)
    }
}


document.onkeypress = function(ev){
    key = ev.key
    website = hash[key]
    window.open('http://'+website)
}



