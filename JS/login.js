
document.getElementById('login-button').addEventListener('click',function(event){
      
      event.preventDefault();
      const phoneNumber = document.getElementById('phone-number').value;
      const pinNumber = document.getElementById('pin-number').value;
      
      if(pinNumber === '1234'){
          window.location.href = './home.html';
      }
      else{
        alert('your mobile number or pin number is incorrect !');
      }
})