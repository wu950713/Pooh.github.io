/*動態特效*/
document.addEventListener('DOMContentLoaded', () => {
    
    const animateTraitBars = () => {
        const items = document.querySelectorAll('.trait-bar-item');

        items.forEach(item => {
            const ratio = item.getAttribute('data-ratio'); 
            
            const barContainer = document.createElement('div');
            barContainer.classList.add('trait-bar');
            
            const barFill = document.createElement('div');
            barFill.classList.add('trait-bar-fill');
            
            const percentageDisplay = document.createElement('span');
            percentageDisplay.classList.add('trait-percentage');
            percentageDisplay.textContent = `${ratio}%`; 
            
            barContainer.appendChild(barFill);
            item.appendChild(barContainer);
            
            barFill.appendChild(percentageDisplay); 

            setTimeout(() => {
                barFill.style.width = `${ratio}%`; 
            }, 50); 
        });
    };

    animateTraitBars();
});
