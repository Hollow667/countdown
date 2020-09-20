
function hitungMundur(){
    var y = setInterval(function(){ 

        var hour = document.getElementById('jam');
        var days = document.getElementById('hari');
        var seconds = document.getElementById('detik');
        var minute = document.getElementById('menit');


        var ultah = new Date('2 Oct 2020');
        var Sekarang = new Date();
        var hasil = ultah-Sekarang;

        var hari = Math.floor(hasil/(1000*3600*24)); // 1000/second(detik)/hour
        var jam = Math.floor((hasil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var menit = Math.floor(hasil % (1000*3600)/(1000*60));
        var detik = Math.floor((hasil % (1000 * 60)) / 1000);
        //console.log(hari,jam,detik);

        hour.innerHTML = jam;
        days.innerHTML = hari;
        seconds.innerHTML = detik
        minute.innerHTML = menit;

        if(detik < 0){
            
            clearInterval(y);
            //console.log('udah');
            document.getElementById('konten').innerHTML = '<h1>Happy Birthday!</h1>'
        }

    },1000) // timeout

}
hitungMundur();