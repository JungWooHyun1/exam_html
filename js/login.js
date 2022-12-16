        const id = document.getElementById('id');
            const pw = document.getElementById('pw');        
            const handleLogin = () => {
                if(id.value === '') {
                    alert('아이디를 입력하세요');
                    id.focus();
                    return false;
                }

                if(pw.value === '') {
                    alert('암호를 입력하세요');
                    pw.focus();
                    return false;
                }

                alert('유효성 통과');
                location.href="/main.html";
        
        }