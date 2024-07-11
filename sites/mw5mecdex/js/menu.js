{
    let menudiv = document.getElementById("menu");
    let menutext = '';
    menutext += '<h2>MAIN MENU</h2>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./index.html" class="button">\Home</a> </li>';
    menutext += '<li> <a href="./credits.html" class="button">\Credits</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>LIGHT MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./lm_raven_runngun.html" class="button">\RVN-1X-RunNGun</a> </li>';
    menutext += '<li> <a href="./lm_urban_scootandshoot.html" class="button">\UM-SA1-ScootandShoot</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>MEDIUM MECHS</h3>';
    menutext += '<h3>HEAVY MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./hm_archer_whyowepaistthbl.html" class="button">\ARCHER-ARC-2P-WHILE YOUR WERE PARTYING I STUDIED THE BLADE</a> </li>';
    menutext += '<li> <a href="./hm_jagermech_pompom.html" class="button">\JAGERMECH-JM6-S-POM POM</a> </li>';
    menutext += '<li> <a href="./hm_marauder_splat.html" class="button">\MARAUDER-MAD-3M-SPLAT</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>ASSUALT MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./am_kingcrab_mg.html" class="button">\KINGCRAB-KGC-000-UNKOWN MG</a> </li>';
    menutext += '<li> <a href="./am_stalker_eye.html" class="button">\STALKER-STK-4N-EYE</a> </li>';
    menutext += '<li> <a href="./am_stalker_sauron.html" class="button">\STALKER-STK-4N-SAURON</a> </li>';
    menutext += '</ul>';
    menudiv.innerHTML = menutext;
}