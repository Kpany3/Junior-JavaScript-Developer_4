var item = document.getElementsByClassName('item');
for (let i = 0; i < 64; i++) {
    item[i].onclick = clickChess;
}


function clickChess() {
    const rowChees = [1, 2, 3, 4, 5, 6, 7, 8];
    const cellChees = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < 64; i++) {
        item[i].removeAttribute('style');
    }
    var id = this.id;
    var rowIndex = rowChees.indexOf(+id.split('')[1]);//порядковый номер цифры в массиве
    var cellIndex = cellChees.indexOf(id.split('')[0]);//порядковый номер буквы в массиве
    this.style.backgroundColor = '#004271';
    var probablyMove = []; //массив с возможными ходами

    //далее возможные изменения индексов на доске относительно начало хода, по вертикали на 1 и 2 пункта, и по горизонтали тоже 1 и 2 пункта
    var rowIndexUp1 = rowIndex + 1;

    var rowIndexUp2 = rowIndex + 2;
    var rowIndexDown1 = rowIndex - 1;
    var rowIndexDown2 = rowIndex - 2;
    var cellIndexUp1 = cellIndex + 1;
    var cellIndexUp2 = cellIndex + 2;
    var cellIndexDown1 = cellIndex - 1;
    var cellIndexDown2 = cellIndex - 2;

    if (rowChees[rowIndexUp2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (cellChees[cellIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp1] + rowChees[rowIndexUp2]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexUp1] + rowChees[rowIndexUp2]).style.backgroundColor='green';
        }
        if (cellChees[cellIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown1] + rowChees[rowIndexUp2]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexDown1] + rowChees[rowIndexUp2]).style.backgroundColor='green';
        }
    }

    if (rowChees[rowIndexDown2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (cellChees[cellIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp1] + rowChees[rowIndexDown2]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexUp1] + rowChees[rowIndexDown2]).style.backgroundColor='green';
        }
        if (cellChees[cellIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown1] + rowChees[rowIndexDown2]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexDown1] + rowChees[rowIndexDown2]).style.backgroundColor='green';

        }
    }

    if (cellChees[cellIndexUp2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (rowChees[rowIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp2] + rowChees[rowIndexUp1]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexUp2] + rowChees[rowIndexUp1]).style.backgroundColor='green';

        }
        if (rowChees[rowIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp2] + rowChees[rowIndexDown1]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexUp2] + rowChees[rowIndexDown1]).style.backgroundColor='green';

        }
    }

    if (cellChees[cellIndexDown2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (rowChees[rowIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown2] + rowChees[rowIndexUp1]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexDown2] + rowChees[rowIndexUp1]).style.backgroundColor='green';

        }
        if (rowChees[rowIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown2] + rowChees[rowIndexDown1]);//вставляем в массив возможный ход
            document.getElementById(cellChees[cellIndexDown2] + rowChees[rowIndexDown1]).style.backgroundColor='green';

        }
    }
    document.getElementById('result').innerHTML = probablyMove;//вывод результата в блок


}
