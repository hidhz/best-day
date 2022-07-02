async function klik() {
   await swal.fire({
       title: 'Hai Sayang❤️',
       text: 'Selamat Ulang Tahun Mbak Mifta, Jangan lupa traktirannya ya haha',
       imageUrl: 'https://feeldreams.github.io/gumush.gif',
    })
    return location.href = "https://tentangmj.netlify.app/"
}
AOS.init();

gsap.from(".container h4", {duration: 1.5, x:-300, opacity: 0, scale: 0.5});
gsap.from(".hr", {duration: 1.5, opacity: 0, scale: 0.5});
gsap.from("#happy", {duration: 1.5, opacity: 0, scale: 0.5});
gsap.from("#birthday", {duration: 1.5, x: 300, opacity: 0, scale: 0.5, ease: "slow"});
gsap.from("#nama", {duration: 1.5, y: 300, opacity: 0, scale: 0.5});
gsap.from(".img-foto", {duration: 1.5, opacity: 0, scale: 0.5});
gsap.from(".img-gif", {duration: 1, y: -300, opacity: 0, scale: 0});
gsap.from(".gambar svg", {duration: 1.5, opacity: 20, scale: 0.5});


// jam
setInterval(() => {
    let time = new Date().toLocaleString('en-US', {timeZone: "Asia/Jakarta"})
    time = new Date(time);
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if(sec < 10){
        sec = '0' + time.getSeconds();
    }
    if(min < 10){
        min = '0' + time.getMinutes();
    }
    if(hour < 10){
        hour = '0' + time.getHours();
    }
    document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec
}, 500);

// tanggal
let arrBulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
let arrHari = ["Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"];
let date = new Date()
let hari = date.getDay();
let bulan = date.getMonth();
let tanggal = date.getDate();
let tahun = date.getFullYear();


document.getElementById('date').innerHTML = `${arrHari[hari]},${tanggal} ${arrBulan[bulan]} ${tahun}`;

