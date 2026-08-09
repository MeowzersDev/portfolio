
Gemini
New chat
Search chats
Daily brief
Images
Videos
Library
New notebook
Peregrino
Fernwood
Cutesie Portfolio Site Generator
Google Apps Script API Update Fix
where is the key for this room in project zomboid knox vault
Terrain Mesh Vertex Control Points
Update Spreadsheet With API Data
Diagram Tools For Coding Projects
Fixing Weld Constraints in Roblox Script
School Supplies: Needed vs. Nice
Understanding GitHub Portfolio Pages
Fixing Tree "Teleporting" Visual Glitch
Chopping UI Mechanics Ideas
How to Import OBJ Files in Blender
Improving Roblox Avatar Rig Structure
ProfileStore: First Load and Save Events
Fix Lua Default Parameter Syntax
Customizing Roblox Studio Scale Handles
Course Start Date Inquiry
Scale Multiple Roblox Parts One Axis
Dual Boot Fedora, Windows, Shared Data
Lua Module Init Question
Connect Menu Visibility Changed Event
Admin UI Redesign For Roblox
Necesse Brightness Mod Request
Necesse Cryo Queen Best Loadouts
Delete Dimension Text in AutoCAD
Game Development Platform Inquiry
Necesse Money Farming Strategy
Map Improvements for Lumber Tycoon
Necesse Progression After Defeating Reaper
Combine Script Features For Item Update
Furnace Evolution Image Generation
Excalidraw, Twitch, and Python
Conversation with Gemini
make me a cutesie portfolio site i can use on github, give me an html file and a js file, where i can easily create new instances of creations and apps ive touched and like my contritbution to stuff the format should be:

about me: username, pfp, skills, contact information etc

creations

various contributions

Your files are ready! I've created a cutesie, easy-to-update portfolio structure.

Your portfolio files are ready:

HTML icon
portfolio
 HTML 
Open
JS icon
script
 JS 
Open
How to use this:
Updating Content: Open script.js. You will see two arrays: creations and contributions. To add a new project, just add a new line inside the appropriate array following the { title: "...", description: "..." }, format.

Customization: I included some basic CSS in the <style> block in portfolio.html. Feel free to change the colors in the :root variables to whatever pastel theme you prefer!

GitHub Pages: To host this on GitHub, just upload these files to a repository named username.github.io (or a repo with the name of your choice), enable "GitHub Pages" in the repository settings, and your portfolio will be live.




Gemini is AI and can make mistakes.

// Easily add your items here!

const creations = [
    { title: "Fernwood", description: "A tycoon-style building game." },
    { title: "Meowzers' Studio", description: "Game dev and community entity." }
];

const contributions = [
    { title: "Necesse Modding", description: "Custom lighting scripts." },
    { title: "Discord Bot", description: "Backend Python infrastructure." }
];

function renderItems(containerId, data) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderItems('creations-container', creations);
    renderItems('contributions-container', contributions);
});
script.js
Displaying script.js.
