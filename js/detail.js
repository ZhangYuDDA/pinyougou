window.addEventListener('load', function () {
    var productPic = this.document.querySelector('.product_pic');
    var bigpic = document.querySelector('.bigpic');
    var mask = document.querySelector('.mask');
    var biggerPic = document.querySelector('.biggerPic');
    bigpic.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        biggerPic.style.display = 'block';
    })
    bigpic.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        biggerPic.style.display = 'none';
    })
    bigpic.addEventListener('mousemove', function (e) {
        var x = e.pageX - productPic.offsetLeft;
        var y = e.pageY - productPic.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = bigpic.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = bigpic.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = bigpic.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //大图片移动距离 = 遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
        var biggerImg = document.querySelector('.biggerImg');
        var biggerImgMax = biggerImg.offsetWidth - biggerPic.offsetWidth;

        var biggerX = maskX * biggerImgMax / maskMax;
        var biggerY = maskY * biggerImgMax / maskMax;
        biggerImg.style.left = -biggerX + 'px';
        biggerImg.style.top = -biggerY + 'px';

    })
})