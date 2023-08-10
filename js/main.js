$(document).ready(function() {

    // ----------- Contact -----------
    // 送出表單
    $('#submit').on('click', function(e) {
        // 驗證
        if ($('#contact__mail').val().search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) != -1 
            && $('#contact__name').val() != null
            && $('#contact__type').val() != null 
            && $('#contact__content').val() != null) {     
            console.log("驗證成功");
            e.preventDefault(); // 停止預設動作

            var contact__name = $('#contact__name').val() || '未填寫';
            var contact__mail = $('#contact__mail').val() || '未填寫';
            var contact__type = $('#contact__type').val() || '未填寫';
            var contact__content = $('#contact__content').val() || '未填寫';

            // 傳送至表單
            var data = {
                'entry.681131525': contact__name,
                'entry.1888045655': contact__mail,
                'entry.1372111573': contact__type,
                'entry.1154967890': contact__content
            };
            $.ajax({
                type: 'POST',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSf-xk_4wp6ZSXo0jyVovmw0uFM6crHb1f0pufsDwbskuolMZw/formResponse',
                data: data,
                contentType: 'application/json',
                dataType: 'jsonp',
                async:false,
                complete: function(data) {
                    console.log("表單傳送成功");

                    var yes = alert('訊息傳送成功');
                    if (yes) {
                        window.location.reload();
                    } else {
                        window.location.reload();
                    }
                }
            });
        } else {
            console.log("驗證失敗");
            // alert('請確實填寫欄位');
        }
    });   
})