//document.onclick = hideMenu;
document.oncontextmenu = rightClick;

// function hideMenu() {
//     document.getElementById("contextMenu")
//         .style.display = "none"
// }

function rightClick(e) {
    e.preventDefault();
    console.log('Right click')

}

document.addEventListener('keydown', e => {
    if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
        // Prevent the Save dialog to open
        e.preventDefault();
        // Place your code here
        console.log('CTRL + A');
    }
});

document.addEventListener('keydown', e => {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        // Prevent the Save dialog to open
        e.preventDefault();
        // Place your code here
        console.log('CTRL + S');
    }
});