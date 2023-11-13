function inverteix(text){
    let newText = ""
    let longTexto = text.length -1
    for (let i = longTexto; i >= 0; i--){
        newText += text[i]
    }

    return newText
}

console.log(inverteix("hola"));
