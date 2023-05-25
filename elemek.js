
function tabla() {
    const tomb = [];
    let feher = "feher";
    let fekete = "fekete"
    let mezo = false;
    for (let index = 0; index < 9; index++) {
        mezo = !mezo;
        if (mezo == ture){
            tomb.push(`<div class=${fekete} id="${index}"></div>`)
        }else{
            tomb.push(`<div class=${feher} id="${index}"></div>`)
        }
    }
}
