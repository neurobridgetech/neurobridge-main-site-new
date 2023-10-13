/*
Accordion - Code Embed
*/
const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = 'none'; //Hides all accordion contents
});

accordionIconsClosed.forEach((icon) => {
    icon.style.display = 'flex';
});

accordionIconsOpen.forEach((icon) => {
    icon.style.display = 'none';
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener('click', () => {
        if (accordionContents[index].style.display === 'flex') {
            // If the accordion is already open, close it
            accordionContents[index].style.display = 'none';
            accordionIconsClosed[index].style.display = 'flex';
            accordionIconsOpen[index].style.display = 'none';
        } else {
            // If the accordion is closed, open it
            accordionContents.forEach((accordionContent) => {
                accordionContent.style.display = 'none'; //Hides all accordion contents
            });

            accordionIconsClosed.forEach((accordionIcon) => {
                accordionIcon.style.display = 'flex'; // Resets all icon transforms to 0deg (default)
            });

            accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = 'none';
            });

            accordionContents[index].style.display = 'flex'; // Shows accordion content
            accordionIconsClosed[index].style.display = 'none'; // Rotates accordion icon 180deg
            accordionIconsOpen[index].style.display = 'flex';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // get the element with the 'scroll-top' data-role
    const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

    // when the element is clicked
    scrollTopBtn.addEventListener('click', function () {
        // smoothly scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener('click', () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
        true
    );
};

document.addEventListener('DOMContentLoaded', function () {
    const runMobileMenuCodeEmbed = () => {
        // Mobile menu
        const mobileMenu = document.querySelector('#mobile-menu')

        // Buttons
        const closeButton = document.querySelector('#close-mobile-menu')
        const openButton = document.querySelector('#open-mobile-menu')

        // On openButton click, set the mobileMenu position left to -100vw
        openButton && openButton.addEventListener('click', function () {
            mobileMenu.style.transform = 'translateX(0%)'
        })

        // On closeButton click, set the mobileMenu position to 0vw
        closeButton && closeButton.addEventListener('click', function () {
            mobileMenu.style.transform = 'translateX(100%)'
        })

        // Add event listener to all links in the mobile menu
        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {
                // On link click, close the mobile menu
                mobileMenu.style.transform = 'translateX(100%)'
            })
        })
    }


    runMobileMenuCodeEmbed()
    listenForUrlChangesMobileMenu()
});
