let times = new Date();
let h = times.getHours();
let m = times.getMinutes();

document.getElementById('hour').innerHTML = h + ':' + m;
document.getElementById('button').addEventListener('click', () => {
  document.getElementById('radio').classList.add('active');
});
function cancel() {
  document.getElementById('radio').classList.remove('active');
}
