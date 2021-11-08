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
            ins.innerHTML = "[you@yourpc]$ pacman -Sy NetworkManager";
        }, 500);
    });
}