// Easily add your items here! Just include an 'image' property if you want to show a project screenshot!

const creations = [
    { 
        title: "Fernwood", 
        description: "A tycoon-style building game built with custom mechanics and architecture.", 
        image: "https://placehold.co/600x400/ffcce0/555?text=Fernwood" 
    },
    { 
        title: "Meowzers' Studio", 
        description: "Game dev and community entity featuring custom tools and brand assets.", 
        image: "" // Leave blank if you don't want an image
    }
];

const contributions = [
    { 
        title: "Necesse Modding", 
        description: "Custom lighting level modifier scripts and combat loadout enhancements.",
        image: "" 
    },
    { 
        title: "Discord Bot", 
        description: "Backend Python infrastructure with Pillow-rendered level cards.",
        image: "" 
    }
];

function renderItems(containerId, data) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card';
        
        // Conditionally render image if provided
        let imageHtml = item.image ? `<img src="${item.image}" alt="${item.title}">` : '';
        
        div.innerHTML = `
            ${imageHtml}
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderItems('creations-container', creations);
    renderItems('contributions-container', contributions);
});
