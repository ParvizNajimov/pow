let intr = prompt('any numbers')
document.write(`<b>КАЛЬКУЛЯТОР</b> <br>`)
for(let i = 1; i <=50; i++) {
    document.write(` ${intr} * ${i} = ${intr * i}<br>`)
}
document.write(`<b>СТЕПЕНЬ</b> <br>`)
for(let i = 1; i <=10; i++) {
    
    document.write(` ${intr} * ${i} = ${ Math.pow(intr, i)}<br>`)
}