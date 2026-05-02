const btn = document.getElementById('buttonChange');
const textChange = document.getElementById('changeMessage');

btn.onclick = function() {
    textChange.textContent = "The text has been changed!";
};
