const id = document.getElementById('id');
        const pw = document.getElementById('pw');
        const pw1 = document.getElementById('pw1');
        const name = document.getElementById('name');
        const number1 = document.getElementById('number1');
        const number2 = document.getElementById('number2');
        const number3 = document.getElementById('number3');
        const age = document.getElementById('age');

        let idcheck = 0;
        
            const handleJoin = () => {
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
                if(pw1.value === '') {
                    alert('암호를 확인하세요');
                    pw1.focus();
                    return false;
                }
                if(name.value === '') {
                    alert('이름을 입력하세요');
                    name.focus();
                    return false;
                }
                if(number1.value === '') {
                    alert('번호를 입력하세요');
                    number1.focus();
                    return false;
                }
                if(number2.value === '') {
                    alert('번호를 입력하세요');
                    number2.focus();
                    return false;
                }
                if(number3.value === '') {
                    alert('번호를 입력하세요');
                    number3.focus();
                    return false;
                }
                    
                if(age.value === '') {
                    alert('나이를 입력하세요');
                    age.focus();
                    return false;
                }

                alert('유효성 통과');
                location.href="/main.html";
        }
