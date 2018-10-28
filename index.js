
//1 initial Data
keys = initialData().keys
hash = initialData().hash

// 2 create Element
generateElement()

// 3 add Listener
addListener()



//1 initial data
function initialData(){
    var keys = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]
    var hash = {'q': 'www.qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'www.sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'}
    // get from localStorage
    var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
    if(hashInLocalStorage)
        hash = hashInLocalStorage

    return {
        'keys': keys,
        'hash': hash
    }
}

function createElement(tagName,attributes){
    tag = document.createElement(tagName)
    for(var key in attributes){
        tag[key] = attributes[key]
    }
    return tag
}
// 2 create element
function generateElement(){
    for(var i=0;i<keys.length;i++){
        div = createElement('div',{'className':'row'})
        main.appendChild(div)

        for(var j=0;j<keys[i].length;j++){
            span = createElement('span',{'textContent':keys[i][j],'className':'text'})
            button = createElement('button',{'textContent':'Edit','id':keys[i][j]})
            button.onclick = function(ev){
                id = ev.target.id
                input_site = prompt('Give me a website')
                hash[id] = input_site
                console.log(ev.target.previousSibling)
                ev.target.previousSibling.src= 'http://'+input_site+'/favicon.ico'
                localStorage.setItem('zzz',JSON.stringify(hash))
                console.log(localStorage)

            }

            img = createElement('img',{'src':'http://'+hash[keys[i][j]]+'/favicon.ico'})
            img.onerror = function(ev){
                ev.target.src="./dot.png"
            }

            kbd = createElement('kbd',{'className':'key'})

            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)
            div.appendChild(kbd)
        }
    }
}

// 3 add Listener
function addListener(){
    document.onkeypress = function(ev){
        key = ev.key
        website = hash[key]
        window.open('http://'+website)
    }
}

