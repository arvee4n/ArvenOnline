// components.js - HTML Component Library for Arven Online

// Define your reusable components
const Components = {
    // Header component with banner
    header: `
      <div class="header">
        <img src="/media/misc/banner/tribalWhite.png" width="800px"/>
      </div>
      <style>* {cursor: url(https://cur.cursors-4u.net/cursors/cur-11/cur1054.cur), auto !important;}</style><a href="https://www.cursors-4u.com/cursor/2012/02/11/chrome-pointer.html" target="_blank" title="Chrome Pointer"><img src="https://cur.cursors-4u.net/cursor.png" alt="Chrome Pointer" style="position:absolute; top: 0px; right: 0px;"/></a>
    `,
    
    // Left Column component
    leftColumn: `
      <div class="section-header"><img src="/media/misc/pixels/profile.gif"><strong> Profile </strong><img src="/media/misc/pixels/profile.gif"></div>
      <div class="profile-picture">
        <img src="/media/misc/pfp.jpg" alt="Profile Picture">
      </div>
      <div class="about">
        <p><strong>Name:</strong> Ryan</p>
        <p><strong>Age:</strong> 17</p>
        <p><strong>Location:</strong> California</p>
        <p><strong>Status:</strong> Might buy some more RAM...</p>
      </div>
      
      <div class="section-header"><img src="/media/misc/pixels/headphones.gif"><strong> Currently Playing </strong><img src="/media/misc/pixels/headphones.gif"></div>
      <div id="lastfm" class="box">
        <img id="lastfm-cover" aria-hidden="true">
        <div id="lastfm-track"></div>
        <div id="lastfm-artist">Nothing's Playing</div>
      </div>
  
      <div class="section-header"><img src="/media/misc/pixels/chainrt.gif"style="max-height:20px;"><Strong> Links </Strong><img src="/media/misc/pixels/chainrt.gif" style="max-height:20px;"></div>
      <div class="about">
        <p><a href="https://pcpartpicker.com/list/7379qR">Current PC Specs</a></p>
        <a href="https://spacehey.com/arveecom"><img src="/media/misc/buttons/spacehey.jpg"></a>
        <a href="https://steamcommunity.com/id/rv4n/"><img src="/media/misc/buttons/steam.gif"></a>
        <a href="https://www.last.fm/user/arvee4n"><img src="/media/misc/buttons/lastfm.png"></a>
        <a href="https://open.spotify.com/user/6yahfuxy2yzmtklsjca1aiw1n?si=bbb3032a27ce4cb6"><img src="/media/misc/buttons/spotify.gif"></a>
        <a href="https://www.youtube.com/@Arvee4n"><img src="/media/misc/buttons/ytbutton.gif"></a>
        <a href="https://www.instagram.com/rsandrxmeda/"><img src="/media/misc/buttons/instagam.webp"></a>
      </div>
      
      <div class="section-header"><img src="/media/misc/pixels/warning.webp"><strong> Embed My Button! </strong><img src="/media/misc/pixels/warning.webp" style="max-width:20px;"></div>
      <div class="about">
        <p><a href="https://arvenonline.me/"><img src="/media/misc/buttons/arvenButton.gif" alt"button"style="text-align: center; display: block; margin-left: auto; margin-right: auto;"></a></p>
        <textarea style="width: calc(100% - 8px);" readonly=""><a href="https://arvenonline.me/"><img src="https://arvenonline.me/media/misc/buttons/arvenButton.gif"></a></textarea>
      </div>
      
      <div class="section-header"><img src="/media/misc/pixels/teeth.gif" style="max-height:20px;"><strong> Live Chat </strong><img src="/media/misc/pixels/teeth.gif" style="max-height:20px;"></div>
      <iframe src='https://iframe.chat/embed?chat=arvenChat' id='chattable' frameborder='none' style="height: 800px; width: 215px;"></iframe>
    `,
    
    // Right Column component
    rightColumn: `
      <div class="section-header"><img src="/media/misc/pixels/compass.gif" style="max-height:20px;"><strong> Navigate </strong><img src="/media/misc/pixels/compass.gif" style="max-height:20px;"></div>
      <ul class="navigate">
        <details open="">
          <summary>
            <a href="/index.html">Home</a>
          </summary>
          <ul>
            <summary><a href="/blog/blog.html">Blog</a></summary>
            <summary><a href="/collections/vinyl.html">Music Collection</a></summary>
            <details>
              <summary><a href="/shrines/shrines.html">Shrines</a></summary>
              <ul>
                <summary><a href="/shrines/minecraft/minecraft.html">Minecraft</a></summary>
              </ul>
              <ul>
                <summary><a href="/shrines/webfishing/webfishing.html">Webfishing</a></summary>
              </ul>
              <ul>
                <summary><a href="/shrines/rdr2/rdr2.html">Red Dead Redemption II</a></summary>
              </ul>
            </details>
            <summary><a href="/sitemap/sitemap.html">Sitemap</a></summary>
          </ul>
        </details>
      </ul>
      
      <div class="section-header"><img src="/media/misc/pixels/computer.gif"style="max-height:20px;"><strong> Cool Pages </strong><img src="/media/misc/pixels/computer.gif"style="max-height:20px;"></div>
      <div class="about">
        <a href="https://kidwiththechemicalz.neocities.org/"><img src="https://kidwiththechemicalz.neocities.org/88x31.gif"></a>
        <a href="https://twelvemen.neocities.org/index.html"><img src="https://twelvemen.neocities.org/12men.gif"></a>
        <a href="https://shinyexe.neocities.org"><img src="https://shinyexe.neocities.org/sprites/mybutton1.gif"></a>
        <a href="https://iframe.chat/"><img src="https://iframe.chat/chattable-alt.gif" title="Add a stream chat to your website free with Chattable" alt="Chattable" /></a>
        <a href="https://www.instagram.com/wearwojo/"><img src="/media/misc/buttons/wojo.webp"</a>
        <a href="https://projectcomte.com/"><img src="/media/misc/buttons/comte.webp"</a>
        <a href ="https://www.instagram.com/fumi.wrld/"><img src="/media/misc/buttons/fumi.webp"></a>
      </div>
      
      <div class="section-header"><img src="/media/misc/pixels/starblink.gif" style="max-height:20px;"><strong> Blinkies </strong><img src="/media/misc/pixels/starblink.gif" style="max-height:20px;"></div>
      <div class="blinkies">
        <img src="/media/misc/blinkies/construction.gif">
        <img src="/media/misc/blinkies/madeByHumans.gif">
        <img src="/media/misc/blinkies/pirate-club.gif">
        <img src="/media/misc/blinkies/ipod.gif">
        <img src="/media/misc/blinkies/mp3.gif">
        <img src="/media/misc/blinkies/avril-lavigne.gif">
        <img src="/media/misc/blinkies/contagptv.gif">
        <img src="/media/misc/blinkies/deftones.gif">
        <img src="/media/misc/blinkies/korn.gif">
        <img src="/media/misc/blinkies/ptv.gif">
        <img src="/media/misc/blinkies/aliceinchains.gif">
        <img src="/media/misc/blinkies/gothboyclique.gif">
        <img src="/media/misc/blinkies/smashingpumpkin.gif">
        <img src="/media/misc/blinkies/linkinpark.gif">
        <img src="/media/misc/blinkies/soad.gif">
        <img src="/media/misc/blinkies/radiohead.gif">
        <img src="/media/misc/blinkies/paramore.gif">
        <img src="/media/misc/blinkies/hellboy.gif">
        <img src="/media/misc/blinkies/mcr.gif">
        <img src="/media/misc/blinkies/playstation.gif">
        <img src="/media/misc/blinkies//metalgear.gif">
        <img src="/media/misc/blinkies/red-dead-redemption.gif">
        <img src="/media/misc/blinkies/supernatural.gif">
      </div>
    `,
    
    // Footer component
    footer: `
      <div class="footerL">
        <a href="https://tamanotchi.world/18893c"><img src="https://tamanotchi.world/i/18893" alt="It's tamaNOTchi! Click to feed!"></a>
      </div>
      <div class="footerR">
        <img src="https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif" alt="Magneton">
      </div>
    `
  };
  
  // Component injector function
  function injectComponents() {
    // Find all elements with data-component attribute
    const componentPlaceholders = document.querySelectorAll('[data-component]');
    
    // Replace each placeholder with the corresponding component
    componentPlaceholders.forEach(placeholder => {
      const componentName = placeholder.getAttribute('data-component');
      if (Components[componentName]) {
        placeholder.innerHTML = Components[componentName];
      } else {
        console.error(`Component "${componentName}" not found in the library`);
      }
    });
  }
  
  // Run the injector when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    
    // Initialize LastFM script if it exists on the page
    if (typeof initializeLastFm === 'function') {
      initializeLastFm();
    }
  });