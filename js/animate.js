function animate(obj, target, callback) {
    //先清除定时器，保证一个元素只有一个定时器，多个定时器会使速度加快
    clearInterval(obj.timer);
    //不同元素指定不同定时器
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        //步长取整  
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //添加回调函数
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        //缓动动画   步长值 = （目标值 - 当前位置 ） / 10(可为其他值)
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}