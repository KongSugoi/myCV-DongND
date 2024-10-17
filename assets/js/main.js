// lăn chuột
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// chữ tự viết lại 
$(document).ready(function(){

    //hiệu ứng chữ 
    new Typed('#type-it', {
        strings: ['là sinh viên An Toàn Thông Tin.', 'là Hacker Mũ Trắng.'],
        typeSpeed: 40, // tốc độ viết chữ 
        loop: true,  // Lặp lại các chuỗi
        backSpeed: 40,  // Tốc độ xóa chữ
        backDelay: 2000,
    });
});

// gửi tin nhắn
                const botToken = '7728235757:AAHWD3iMyfWhKQRKB9roo7_TNQ306djxsbA'; 
                const chatId = '1947154081'; 
            
                document.getElementById('contactForm').addEventListener('submit', function(e) {
                    e.preventDefault(); // Ngăn không cho form reload trang
            
                    // Lấy dữ liệu từ form
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const number = document.getElementById('number').value;
                    const message = document.getElementById('message').value;
            
                    // Ghép các thông tin thành một thông điệp gửi đi
                    const fullMessage = `Tên: ${name}\nEmail: ${email}\nSố điện thoại: ${number}\nLời nhắn: ${message}`;
            
                    // Gửi yêu cầu đến Telegram API
                    const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage`;
            
                    fetch(telegramAPI, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: fullMessage,
                        }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.ok) {
                            alert('Lời nhắn đã được gửi thành công!');
                            document.getElementById('contactForm').reset(); // Xóa dữ liệu trong form sau khi gửi thành công
                        } else {
                            alert('Có lỗi xảy ra khi gửi lời nhắn.');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Có lỗi xảy ra khi gửi lời nhắn.');
                    });
                });