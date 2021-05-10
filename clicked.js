window.onload = () => {
    let divA = document.getElementById("btn")
    let count = 0

    divA.addEventListener("click", addTextA)


    function addTextA (){

        let elements = document.getElementById('dropped').children;

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block'
        }
        count++
        if (count >= 2){
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none'
            }
            count = 0;
        }
    }
}