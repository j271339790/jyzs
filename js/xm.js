
onload = function () {
//drop-down开始
    var logouldiv = document.getElementsByClassName("logoul")[0].getElementsByTagName("div")[0];
    var logoul = document.getElementsByClassName("logoul")[0];
    var droplis = document.getElementsByClassName("logoul")[0].
        getElementsByTagName("div")[0].
        getElementsByClassName("dropli");
    var droplunbos = document.getElementsByClassName("nextnav")[0].
        getElementsByClassName("droplunbo");

    logouldiv.onmouseenter = dropShow;
    logouldiv.onmouseleave = dropHidden;

    function dropShow(e) {
        for (var i = 0; i < droplunbos.length; i++) {
            droplunbos[i].style.height = 226 + "px";
            droplunbos[i].style.borderTop = "1px solid #eee";
        }
        //if (e.target.nodeName.toLowerCase() == "li") {   //去掉this子元素里的 #text
        //    console.log(e.target.nodeName)
        //}
    }

    function dropHidden() {
        for (var i = 0; i < droplunbos.length; i++) {
            droplunbos[i].style.height = 0 + "px";
        }
    }

    for (var i = 0; i < droplis.length; i++) {
        droplis[i].onmouseover = function () {
            var index = this.dataset.index;
            for (var i = 0; i < droplunbos.length; i++) {
                if (i == index) {
                    //droplunbos[index].style.display = "block";
                    droplunbos[index].style.zIndex = 5;
                } else {
                    //droplunbos[index].style.display = "none";
                    droplunbos[i].style.zIndex = -1;
                }
            }
        }
    }

//轮播图开始
    var pageObj = {
        next: 1,
        pre: 4,
        now: 0,
        auto: true
    };
    var imgs = document.getElementsByClassName("lunbo")[0].getElementsByClassName("luboimg");
    var lis = document.getElementsByClassName("lunbo")[0].
        getElementsByClassName("lunboul")[0].
        getElementsByTagName("li");
    var divCon = document.getElementsByClassName("lunbo")[0];
//控制自动轮播
    divCon.onmouseover = function () {
        pageObj.auto = false;
    };
    divCon.onmouseout = function () {
        pageObj.auto = true;
    };
    setInterval(function () {
        if (pageObj.auto) {
            bofang(pageObj.next)
        }
    }, 3000);

    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = lunbo;
    }
    function lunbo(e) {
        var li = this;
        var lunboIndex = li.dataset.index;
        bofang(lunboIndex);
    }

//左右按键
    var navc1 = document.getElementsByClassName("left")[0];
    var navc2 = document.getElementsByClassName("right")[0];
    navc1.onclick = prePage;
    navc2.onclick = nextPage;

    function prePage(e) {
        var lunboIndex = pageObj.pre;
        bofang(lunboIndex);
    }

    function nextPage(e) {
        var lunboIndex = pageObj.next;
        bofang(lunboIndex);
    }

    function bofang(lunboIndex) {
        var lunboIndex = lunboIndex;
        var imgs = document.getElementsByClassName("lunbo")[0].getElementsByClassName("lunboimg");
        var lis = document.getElementsByClassName("lunbo")[0].
            getElementsByClassName("lunboul")[0].
            getElementsByTagName("li");
        for (var i = 0; i < imgs.length; i++) {
            if (i == lunboIndex) {
                imgs[lunboIndex].className = "lunboimg activeimg";
                lis[lunboIndex].className = "activeli";
                updatePage(lunboIndex);
            } else {
                imgs[i].className = "lunboimg";
                lis[i].className = "";
            }
        }
    }

//更新页码
    function updatePage(pageIndex) {
        var lunboIndex = pageIndex;
        pageObj.now = lunboIndex;
        if (lunboIndex == 4) {
            pageObj.next = 0;
        } else {
            pageObj.next = Number(lunboIndex) + 1;
        }
        if (lunboIndex == 0) {
            pageObj.pre = 4;
        } else {
            pageObj.pre = lunboIndex - 1;
        }
    }

//轮播图结束

//lihidden开始
    var lihiddens = document.getElementsByClassName("lunbo")[0].
        getElementsByClassName("lunboleft")[0].getElementsByTagName("li");
    var divhiddens = document.getElementsByClassName("lunbo")[0].
        getElementsByClassName("lunboleft")[0].getElementsByClassName("lihidden");
    var lunboleft = document.getElementsByClassName("lunbo")[0].
        getElementsByClassName("lunboleft")[0];
    for (var i = 0; i < lihiddens.length; i++) {
        lihiddens[i].onmouseover = divShow;

        lunboleft.onmouseout = function () {
            for (i = 0; i < divhiddens.length; i++) {
                divhiddens[i].className = "lihidden";
            }
        }
    }

    function divShow() {
        var index = this.dataset.index;
        for (i = 0; i < divhiddens.length; i++) {
            if (i == index) {
                divhiddens[index].onmouseover = function () {
                    divhiddens[index].className = "lihidden liactive";
                };
                divhiddens[index].className = "lihidden liactive";
            } else {
                divhiddens[i].className = "lihidden";
            }
        }
    }

//lihidden结束

//star开始
    function starslunbo(index) {
        var star = document.getElementsByClassName("star");
        var starul = star[index].getElementsByClassName("starul")[0];
        var leftbtn = star[index].getElementsByClassName("leftbtn")[0];
        var rightbtn = star[index].getElementsByClassName("rightbtn")[0];
        var btn = star[index].getElementsByClassName("btn")[0];
        var autos = true;
        starul.style.left = 0 + "px";
        leftbtn.onclick = starlunbo;
        rightbtn.onclick = starlunbo;
        function starlunbo() {
            if (starul.style.left == 0 + "px") {
                starul.style.left = -1290 + "px";
                rightbtn.className = "rightbtn btnactive iconfont";
                leftbtn.className = "leftbtn iconfont";
            } else {
                starul.style.left = 0 + "px";
                leftbtn.className = "leftbtn btnactive iconfont";
                rightbtn.className = "rightbtn iconfont";
            }
            if (this == leftbtn) {
                this.onclick = null;
                rightbtn.onclick = starlunbo;
            } else if (this == rightbtn) {
                this.onclick = null;
                leftbtn.onclick = starlunbo;
            }
        }

        setInterval(function () {
            if (autos) {
                starlunbo()
            }
        }, 3000);

        btn.onmouseover = function () {
            autos = false;
        };
        btn.onmouseout = function () {
            autos = true;
        };
        starul.onmouseover = function () {
            autos = false;
        };
        starul.onmouseout = function () {
            autos = true;
        };
    }

    starslunbo(0);
    starslunbo(1);

//star结束

//滑动门开始
    function huadongmen(index) {
        var slidelis = document.getElementsByClassName("slidedoor")[index].getElementsByClassName("slideli");
        var slidespan = document.getElementsByClassName("slideul")[index].getElementsByTagName("span");
        var slidedivs = document.getElementsByClassName("slidedivs")[index].getElementsByClassName("doorul");
        for (i = 0; i < slidelis.length; i++) {
            var lis = slidelis[i];
            lis.onmouseover = function () {
                var index = this.dataset.index;
                //console.log(index)
                for (var i = 0; i < slidedivs.length; i++) {
                    if (i == index) {
                        slidedivs[index].className = "doorul active1";
                        slidespan[index].className = "spanactive";

                    } else {
                        slidedivs[i].className = "doorul";
                        slidespan[i].className = "";

                    }
                }
            }
        }
    }

    huadongmen(0);
    huadongmen(1);
    huadongmen(2);
//滑动门结束

//内容轮播开始
    function neirong(index) {
        var pageObjmd = {
            next: 1,
            pre: 3,
            now: 0
        };
        var imgsmd = document.getElementsByClassName("li")[index].getElementsByClassName("lunboneirong");
        var lismd = document.getElementsByClassName("li")[index].getElementsByTagName("li");

        for (var i = 0; i < lismd.length; i++) {
            lismd[i].onclick = lunbomd;
        }
        function lunbomd(e) {
            var li = this;
            var lunboIndex = li.dataset.index;
            bofangmd(lunboIndex);
        }

        //左右按键
        var navcmd1 = document.getElementsByClassName("neirongleft")[index];
        var navcmd2 = document.getElementsByClassName("neirongright")[index];
        navcmd1.onclick = prePagemd;
        navcmd2.onclick = nextPagemd;

        function prePagemd(e) {
            var lunboIndex = pageObjmd.pre;
            bofangmd(lunboIndex);
        }

        function nextPagemd(e) {
            var lunboIndex = pageObjmd.next;
            bofangmd(lunboIndex);
        }

        function bofangmd(lunboIndex) {
            var lunboIndex = lunboIndex;
            //var imgsmd = document.getElementsByClassName("li")[0].getElementsByClassName("lunboneirong");
            //var lismd = document.getElementsByClassName("li")[0].getElementsByTagName("li");
            for (var i = 0; i < imgsmd.length; i++) {
                if (i == lunboIndex) {
                    imgsmd[lunboIndex].className = "lunboneirong active";
                    lismd[lunboIndex].className = "boxactive";
                    updatePagemd(lunboIndex);
                } else {
                    imgsmd[i].className = "lunboneirong";
                    lismd[i].className = "";
                }
            }
        }

        //更新页码
        function updatePagemd(pageIndex) {
            var lunboIndex = pageIndex;
            pageObjmd.now = lunboIndex;
            if (lunboIndex == 3) {
                pageObjmd.next = 0;
            } else {
                pageObjmd.next = Number(lunboIndex) + 1;
            }
            if (lunboIndex == 0) {
                pageObjmd.pre = 3;
            } else {
                pageObjmd.pre = lunboIndex - 1;
            }
        }

    }

    neirong(0);
    neirong(1);
    neirong(2);
    neirong(3);

//内容轮播结束

}
;




