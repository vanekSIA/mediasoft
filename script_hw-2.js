function speech() {
  alert('Я не понимат! :( Следуй инструкции!\ Выход: 0');
}


while (operation != 0) {
    var operation = prompt("Какое действие вы хотите выполнить?\n1: Сложение\n2: Вычитание\n3: Умножение\n4: Деление\n5: Возведение в степень\n6: Квадратный корень из\n0: Выход ");

    if (operation > 0 && operation < 6) {

        let num1 = parseInt(prompt("Введите первое число.", ""));

        let num2 = parseInt(prompt("Введите второе число.", ""));


        if (operation == 1) alert("Сумма равна " + (num1 + num2));

        if (operation == 2) alert("Разность равна " + (num1 - num2));

        if (operation == 3) alert("Произведение равно " + (num1 * num2));

        if (operation == 4) alert("Результат деления " + (num1 / num2));

        if (operation == 5) alert("Результат возведения в степень " + (num1 ** num2));

    } else if (operation == 6) {
        let num3 = parseInt(prompt("Введите число.", ""))
        alert("Квадратный корень равен " + Math.sqrt(num3))

    } else if (operation != 0) speech()
}