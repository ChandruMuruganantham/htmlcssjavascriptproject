function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clear()
{
    document.getElementById("result").value =''
}