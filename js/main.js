// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function(){
//     fetch('https://646a084c03bb12ac209836a9.mockapi.io/cards', {
//         method : 'POST',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify({
//             FullName : document.querySelector('#FullName').value,
//             Image: document.querySelector('#Image').value,
//             Price: document.querySelector('#Price').value
//         })
//     }).then(res=>{
//         if (res.ok) {
//             successAlert('Müvəffəqiyyətlə əlavə olundu!')
//             document.querySelector('#FullName').value = '';
//             document.querySelector('#Image').value = '';
//             document.querySelector('#Price').value = '';
//         }
//         else{
//             errorAlert('Bir xəta baş verdi!')
//         }
//     })
//     .catch(()=>errorAlert('Bir xəta baş verdi!'))
// })