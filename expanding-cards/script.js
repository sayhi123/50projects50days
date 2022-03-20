const panels = document.querySelectorAll('.panel')##返回文档中匹配指定 CSS 选择器的所有元素

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
