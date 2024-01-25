window.onload = function() {
    let twitterLink = document.querySelector('.blog-sidebar .list-unstyled li a[href*="twitter"]');
    if (twitterLink) {
        twitterLink.parentElement.remove();
    }
}; //non riesco a farlo funzionare

document.querySelectorAll('.jumbotron .lead.mb-0 a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previene il comportamento di default del link
        this.closest('.jumbotron').remove(); // Rimuove l'elemento genitore jumbotron
    });
});


document.querySelectorAll('.blog-post-meta a').forEach(authorLink => {
    authorLink.addEventListener('mouseover', function() {
        alert('Autore: ' + this.textContent);
    });
});
