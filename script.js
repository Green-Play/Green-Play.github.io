function drawMaze(mazeFile, startingX, startingY){

    // ���������� ������ (���� �������)
    clearTimeout(timer);

    // ���������� ����������� ������
    dx = 0;
    dy = 0;
function processKey(e) {
    // ���� ������ ��������� � ��������, ������������� ���
    dx = 0;
    dy = 0;

    // ���� ������ ������� �����, �������� ��������� �����
    if (e.keyCode == 38) {
        dy = -1;
    }

    // ���� ������ ������� ����, �������� ��������� ����
    if (e.keyCode == 40) {
        dy = 1;
    }

    // ���� ������ ������� �����, �������� ��������� �����
    if (e.keyCode == 37) {
        dx = -1;
    }

    // ���� ������ ������� ������, �������� ��������� ������
    if (e.keyCode == 39) {
        dx = 1;
    }
}
function drawFrame() {

    // ��������� ���� ������ ���� ������ ��������
    if (dx != 0 || dy != 0) {
        // ����������� ����������� ������ ������ ������
        context.beginPath();
        context.fillStyle = "rgb(254,244,207)";
        context.rect(x, y, 15, 15);
        context.fill()

        // ��������� ���������� ������, �������� �����������
        x += dx;
        y += dy;

        // �������� ������������ �� �������� ���������
        // (���������� ���. �������)
        if (checkForCollision()) {
            x -= dx;
            y -= dy;
            dx = 0;
            dy = 0;
        }

        // �������������� ������
        var imgFace = document.getElementById("face");
        context.drawImage(imgFace, x, y);

        // ��������� ����� �� ������������ �� ������.
        // ���� �����, �� ������� ���������
        if (y > (canvas.height - 17)) {
            alert("�� �������!");
            return;
        }
    }

    // ������ ��������� ���� ����� 10 �����������
    timer = setTimeout(drawFrame, 10);
}
function checkForCollision() {
    // ���������� ��� ������� � ����������� �� ����
    var imgData = context.getImageData(x-1, y-1, 15+2, 15+2);
    var pixels = imgData.data;

    // �������� ������ ��� ������ �������
    for (var i = 0; n = pixels.length, i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i+1];
        var blue = pixels[i+2];
        var alpha = pixels[i+3];

        // ������� �� ������� ������� ����� �����, ��� ��������� �� ������������
        if (red == 0 && green == 0 && blue == 0) {
          return true;
        }
        // ������� �� ������� ������ ����� �����, ��� ��������� �� ������������
        if (red == 169 && green == 169 && blue == 169) {
          return true;
        }
    }
    // ������������ �� ����
    return false;
}
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    drawMaze("maze.png", 268, 5);
    window.onkeydown = processKey;
    var x = 0;
    var y = 0;
    var timer;
  
