setTimeout(function () {
    document.querySelector('body').style.opacity = '1'
},20)

// code
if (document.querySelector('.hljs')) {
    hljs.highlightAll();
}

// copy
if (document.querySelector('.copy')) {
    var clipboard = new Clipboard('.copy');
}

$('.copy').click(function () {
    $(this).addClass('copy_active')
    setTimeout(() => {
        $(this).removeClass('copy_active')
    }, 2000)
    alert_text({
        text: '复制成功',
        class: 'correct'
    })
})

var public_text = '';
public_text += `<div class="alert_text animated fadeInUp_">
                    <p></p>
                </div>`

function alert_text(e) {
    $('html').append(public_text)
    if ($(e).is('.correct')) {
        $('.alert_text').addClass('correct').removeClass('error')
    }else if ($(e).is('.error')) {
        $('.alert_text').addClass('error').removeClass('correct')
    }
    var obj = $(e).find('.txt').text()
    var background = $(e).attr('data-background')
    var color = $(e).attr('data-color')
    if (obj !== '') {
        $('.alert_text p').text(obj)
    }else {
        $('.alert_text p').text(e.text)
        $('.alert_text').addClass(e.class)
    }
    $('.alert_text').each(function (index,ele) {
        var top = index * 60 + 300

        if (obj !== '') {
            $(ele).css({
                'top': top + 'px',
                'background-color': background,
            })
            $(ele).find('p').css({
                'color': color
            })
        }else {
            $(ele).css({
                'top': top + 'px',
                'background-color': e.background,
            })
            $(ele).find('p').css({
                'color': e.color
            })
        }

        setTimeout(function () {
            $(ele).removeClass('fadeInUp_').addClass('fadeOutDown_')
            setTimeout(function () {
                $(ele).remove()
            },800)
        },2000)
    })
    setInterval(function () {
        $('.alert_text').each(function (index,ele) {
            var top = index * 60 + 300
            $(ele).css({
                'top': top + 'px',
            })
        })
    },2800)
}