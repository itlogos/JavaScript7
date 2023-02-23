function customFunction() {
    let elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Текст :" + (i + 1);
    }

    let countOfItems = elements.length;
    window.alert(countOfItems  + " елементів списку отримали якесь значення");
}