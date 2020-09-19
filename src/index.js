import x from './x.js'
import png from './assets/1.png' //png放到assets中，通过import获取png路径
console.log(png)//打印出png，发现png为路径，得出JS自动会找到png路径

const div = document.getElementById('app')
console.log('div')
console.log(div)
//把png路径放到HTML中
div.innerHTML = ` 
   <img src="${png}"> 
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
   const promise = import('./lazy') //因为是监听函数（异步函数），需要promise设置成功和失败情况
   promise.then((module) => {
      const fn = module.default //调用lazy.dafaule默认值——打印出值
      fn()
   }, () => {
      console.log('模块加载错误')
   })
}
div.appendChild(button)