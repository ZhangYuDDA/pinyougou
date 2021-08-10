window.addEventListener('load', function () {
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            //手动按按钮
            next.click();
        }, 3000)
    })
    var uls = focus.children[1];
    var bar = document.querySelector('.bar');
    var barUL = bar.querySelector('ul');

    for (var i = 0; i < uls.children.length; i++) {
        var li = document.createElement('li');
        //给每个li添加索引号
        li.setAttribute('index', i);
        barUL.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < barUL.children.length; i++) {
                barUL.children[i].className = '';
            }
            this.className = 'current_select';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            //轮播图ul移动，移动距离为 索引号*图片长度

            animate(uls, -index * focusWidth);
        })
    }
    barUL.children[0].className = 'current_select';
    //克隆第一张图到最后,参数true表示深拷贝，会克隆子节点
    var first = uls.children[0].cloneNode(true);
    uls.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    next.addEventListener('click', function () {
        //节流阀
        if (flag) {
            flag = false;
            //无缝滚动
            if (num == uls.children.length - 1) {
                uls.style.left = 0;
                num = 0;
            }
            num++;
            circle++;
            if (circle == uls.children.length - 1) {
                circle = 0;
            }
            animate(uls, -num * focusWidth, function () {
                flag = true;
            });
            for (var i = 0; i < barUL.children.length; i++) {
                barUL.children[i].className = '';
            }
            barUL.children[circle].className = 'current_select';
        }

    })
    prev.addEventListener('click', function () {

        if (flag) {
            flag = false;
            //无缝滚动
            if (num == 0) {
                num = uls.children.length - 1;
                uls.style.left = -num * focusWidth + 'px';
            }
            num--;
            circle--;
            if (circle < 0) {
                circle = barUL.children.length - 1;
            }
            animate(uls, -num * focusWidth, function () {
                flag = true;
            });
            for (var i = 0; i < barUL.children.length; i++) {
                barUL.children[i].className = '';
            }
            barUL.children[circle].className = 'current_select';
        }
    })

    //自动播放
    var timer = setInterval(function () {
        //手动按按钮
        next.click();
    }, 3000);
})