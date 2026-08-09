<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meowzers' Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <style>
        :root {
            --pastel-pink: #ffcce0;
            --pastel-blue: #cce0ff;
            --pastel-yellow: #fff3cc;
            --text-color: #555;
            --bg-color: #fffaf0;
        }
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background-color: var(--bg-color); color: var(--text-color); margin: 0; padding: 20px; text-align: center; }
        .card { background: white; border-radius: 20px; padding: 20px; margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; width: 300px; border: 2px solid var(--pastel-pink); vertical-align: top; text-align: left; }
        .card img { border-radius: 10px; width: 100%; height: 160px; object-fit: cover; border: none; margin-bottom: 10px; }
        .grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
        h1, h2 { color: #ff99bb; }
        .profile-pic { border-radius: 50%; width: 120px; height: 120px; object-fit: cover; border: 3px solid var(--pastel-blue); }
    </style>
</head>
<body>

    <section id="about">
        <h1>Hi! I'm <span id="username">Meowzers</span> (Benjamin Smith)</h1>
        <img src="https://cdn.discordapp.com/avatars/269904483235004418/95c3651e2e09909d7af6d5b1351e9a9c.webp?size=1024" alt="Profile Picture" class="profile-pic">
        <div id="skills">
            <h2>My Skills</h2>
            <p>Coding Guru, Luau, Python, Blender, AutoCAD</p>
        </div>
        <div id="contact">
            <h2>Contact</h2>
            <p>Reach out to me on Discord or GitHub!</p>
        </div>
    </section>

    <section id="creations">
        <h2>My Creations</h2>
        <div class="grid" id="creations-container"></div>
    </section>

    <section id="contributions">
        <h2>My Contributions</h2>
        <div class="grid" id="contributions-container"></div>
    </section>

    <script src="script.js"></script>
</body>
</html>
