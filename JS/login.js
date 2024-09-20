
document.getElementById('login-button').addEventListener('click',function(event){
      
      event.preventDefault();
      // const phoneNumber = document.getElementById('phone-number').value;
      
      const pinNumber = document.getElementById('pin-number').value;
      console.log(pinNumber);
      if(pinNumber === '1234'){
          window.location.href = './home.html';
      }
      else{
        alert('your mobile number or pin number is incorrect !');
      }
})

const car = {
  model : 'tesla'
};
console.log(car.owner = "Elon");
