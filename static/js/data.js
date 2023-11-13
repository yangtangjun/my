var data = [
    {
        title: "Thorns.",
    },
]

var link = document.createElement('link');
link.rel = 'shortcut icon'
link.href = 'https://yangtangjun.github.io/my/favicon/favicon.ico'
document.querySelector('head').appendChild(link)


var header = '';


header += `<div class="header">
        <div class="left">
            <a href="index.html" class="logo">
                Yang Tang Jun
            </a>
            <a href="https://beian.miit.gov.cn/" target="_blank" class="link"></a>
        </div>
        
        <div class="right">
            <ul>
                <li>
                    <a href="style.html">
                        CSS
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <a href="style.html#anchor">信息窗口</a>
                        <a href="style.html#anchor2">隐藏</a>
                        <a href="style.html#anchor3">字体</a>
                        <a href="style.html#anchor4">svg</a>
                    </div>
                </li>
                <li>
                    <a href="javascript.html">
                        JS
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <div class="hide_list">
                            <a href="javascript.html#anchor">jquery 网络地址</a>
                            <a href="javascript.html#anchor2">预加载img</a>
                            <a href="javascript.html#anchor3">鼠标移入,移出事件</a>
                            <a href="javascript.html#anchor4">slideToggle,slideUp</a>
                            <a href="javascript.html#anchor6">input,键盘事件</a>
                            <a href="javascript.html#anchor7">网页可视区域,鼠标滚轮事件</a>
                            <a href="javascript.html#anchor8">本地存储</a>
                            <a href="javascript.html#anchor9">prepend</a>
                            <a href="javascript.html#anchor10">video,animationend</a>
                            <a href="javascript.html#anchor11">离线监听</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="swiper.html">
                        Swiper
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <div class="hide_list">
                            <a href="swiper.html#anchor">初始化</a>
                            <a href="swiper.html#anchor2">自动播放</a>
                            <a href="swiper.html#anchor3">分页器</a>
                            <a href="swiper.html#anchor4">走马灯</a>
                            <a href="swiper.html#anchor5">响应式</a>
                            <a href="swiper.html#anchor6">双向绑定</a>
                            <a href="swiper.html#anchor7">Swiper切换效果</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="scroll.html">
                        Smooth
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <div class="hide_list">
                            <a href="scroll.html#anchor">初始化</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="locomotive.html">
                        Locomotive
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <div class="hide_list">
                            <a href="locomotive.html#anchor">初始化</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="map.html">
                        Map Api
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <div class="hide_list">
                            <a href="map.html#anchor">百度地图</a>
                            <a href="map.html#anchor2">谷歌地图</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="plugIn.html">
                        Plug In
                        <div class="iconfont icon-youjiantou_huaban"></div>
                    </a>
                    <div class="level">
                        <div class="hide_list">
                            <a href="plugIn.html#anchor">fancybox</a>
                            <a href="plugIn.html#anchor2">fullPage</a>
                            <a href="plugIn.html#anchor3">鼠标跟随1</a>
                            <a href="plugIn.html#anchor4">鼠标跟随2</a>
                            <a href="plugIn.html#anchor5">CountUp</a>
                            <a href="plugIn.html#anchor6">Video_Alert</a>
                            <a href="plugIn.html#anchor7">Text_Alert</a>
                            <a href="plugIn.html#anchor8">Down_Pull</a>
                            <a href="plugIn.html#anchor9">Scroll</a>
                        </div>
                    </div>
                </li>
            </ul>
            <a href="search.html" class="iconfont icon-sousuo search"></a>
        </div>
    </div>`;

document.querySelector('title').innerHTML = data[0].title;
var dom = document.querySelector('header');
if (dom) {
    var id = dom.getAttribute('id');
    document.querySelector('header').innerHTML = header;
    if (id) {document.querySelectorAll('.header li')[id].classList.add('on')}
}
