document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionContents = document.querySelectorAll('.accordion-content');


    if (accordionButtons.length > 0 && accordionContents.length > 0) {
        accordionButtons[0].classList.add('active');
        accordionContents[0].classList.add('active');
    }

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent; 
            let targetContent = null;

       
            accordionContents.forEach(content => {
                if (content.dataset.tab === buttonText) {
                    targetContent = content;
                }
            });

          
            accordionButtons.forEach(btn => btn.classList.remove('active'));
            accordionContents.forEach(content => content.classList.remove('active'));

           
            button.classList.add('active');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});