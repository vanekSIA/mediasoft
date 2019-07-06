function speech() {
  alert('Я не понимат! :( Следуй инструкции!\ Выход: 0');
}


while (operation != 0) {
    var operation = prompt("Êàêîå äåéñòâèå âû õîòèòå âûïîëíèòü?\n1: Ñëîæåíèå\n2: Âû÷èòàíèå\n3: Óìíîæåíèå\n4: Äåëåíèå\n5: Âîçâåäåíèå â ñòåïåíü\n6: Êâàäðàòíûé êîðåíü èç\n0: Âûõîä ");

    if (operation > 0 && operation < 6) {

        let num1 = parseInt(prompt("Ââåäèòå ïåðâîå ÷èñëî.", ""));

        let num2 = parseInt(prompt("Ââåäèòå âòîðîå ÷èñëî.", ""));


        if (operation == 1) alert("Ñóììà ðàâíà " + (num1 + num2));

        if (operation == 2) alert("Ðàçíîñòü ðàâíà " + (num1 - num2));

        if (operation == 3) alert("Ïðîèçâåäåíèå ðàâíî " + (num1 * num2));

        if (operation == 4) alert("Ðåçóëüòàò äåëåíèÿ " + (num1 / num2));

        if (operation == 5) alert("Ðåçóëüòàò âîçâåäåíèÿ â ñòåïåíü " + (num1 ** num2));

    } else if (operation == 6) {
        let num3 = parseInt(prompt("Ââåäèòå ÷èñëî.", ""))
        alert("Êâàäðàòíûé êîðåíü ðàâåí " + Math.sqrt(num3))

    } else if (operation != 0) speech()
}
