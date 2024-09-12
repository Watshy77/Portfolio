function createDropdownMenu() {
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', () => {
        const dropdownMenu = document.querySelector('.dropdown-menu');

        if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'flex';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createDropdownMenu();

    emailjs.init("7JJ67XVtoOoUF5GD9");

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'service_x2h6xzn';
        const templateID = 'template_mwmadbj';

        emailjs.sendForm(serviceID, templateID, this)
            .then(function () {
                Swal.fire({
                    icon: 'success',
                    title: 'Message envoyé!',
                    text: 'Votre message a été envoyé avec succès.',
                    background: '#f2f2f2',
                    customClass: {
                        popup: 'osu-popup',
                        title: 'osu-title',
                        content: 'osu-content',
                    }
                });
            }, function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Échec de l\'envoi',
                    text: 'Échec de l\'envoi du message: ' + JSON.stringify(error),
                    background: '#f2f2f2',
                    customClass: {
                        popup: 'osu-popup',
                        title: 'osu-title',
                        content: 'osu-content',
                    }
                });
            });
    });
});