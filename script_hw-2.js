function speech() {
  alert('� �� �������! :( ������ ����������!\ �����: 0');
}


while (operation != 0) {
    var operation = prompt("����� �������� �� ������ ���������?\n1: ��������\n2: ���������\n3: ���������\n4: �������\n5: ���������� � �������\n6: ���������� ������ ��\n0: ����� ");

    if (operation > 0 && operation < 6) {

        let num1 = parseInt(prompt("������� ������ �����.", ""));

        let num2 = parseInt(prompt("������� ������ �����.", ""));


        if (operation == 1) alert("����� ����� " + (num1 + num2));

        if (operation == 2) alert("�������� ����� " + (num1 - num2));

        if (operation == 3) alert("������������ ����� " + (num1 * num2));

        if (operation == 4) alert("��������� ������� " + (num1 / num2));

        if (operation == 5) alert("��������� ���������� � ������� " + (num1 ** num2));

    } else if (operation == 6) {
        let num3 = parseInt(prompt("������� �����.", ""))
        alert("���������� ������ ����� " + Math.sqrt(num3))

    } else if (operation != 0) speech()
}