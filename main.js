/*
 * Console.log
 */

console.log(
    "Welcome to my website!"
);

/*
 * mouseover effect
 */

function mouseOverInstall() {
    var ins = document.getElementById('hover-to-change');
    ins.addEventListener('mouseover', function() {
        ins.innerHTML = "Install は大成功でした！";
        setTimeout(function() {
            ins.innerHTML = "[you@your-pc]$ pacman -Sy NetworkManager";
        }, 500);
    });
}