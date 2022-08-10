const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.scroll-navigation')
console.log(windowHeight);

function reset() {
    for (var i = 0; i < navigation.children.length; i++) {
        navigation.children[i].classList.remove('selected');
    }
}
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    sections.forEach(function(section, i) {
        if (section.offsetTop < scrollTop + windowHeight/2 && 
        scrollTop < section.offsetTop + windowHeight/2 ) {
            reset();
            navigation.children[i].classList.add('selected');
        }
    });
});

document.querySelectorAll('.scroll-navigation li').forEach(function(item, i) {
    item.addEventListener('click', function() {
        window.scrollTo({
            top: i * windowHeight,
            behavior: 'smooth' 
        })
    })
});