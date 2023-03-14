    const block = document.getElementById('block');
    let startX, startY, startWidth, startHeight;

    block.onmousedown = function (event) {
      startWidth = block.offsetWidth;
      startHeight = block.offsetHeight;
      startX = event.clientX;
      startY = event.clientY;
      document.onmousemove = function (event) {
        block.style.width = startWidth + event.clientX - startX + 'px';
        block.style.height = startHeight + event.clientY - startY + 'px';
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };