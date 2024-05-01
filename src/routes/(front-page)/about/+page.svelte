<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    let ready = false;
    
    onMount(() => {
      ready = true;
    });
    </script>
    
    <svelte:head>
      <title>About - The Grimwore</title>
    </svelte:head>
    
    {#if ready}
      <section class="hero is-fullheight" transition:fade="{{ duration: 1000 }}">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-6">
                <h1 class="title is-1">The Grimwore</h1>
                <h2 class="subtitle is-3">A Comprehensive Guide to Magic and Mystery</h2>
                <p>
                  Step into the realm of "The Grimwore of Magic Items and Monsters", where ancient lore and mystical wonders await. Immerse yourself in a world of enchanted artifacts and fearsome creatures, meticulously documented and beautifully illustrated for your exploration.
                </p>
              </div>
              <div class="column is-6">
                <figure class="image">
                  <img src="/grimwore-illustration.webp" alt="Grimwore Illustration" class="grimwore-illustration">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="section about-section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure class="image">
                <img src="/ancient-tome.webp" alt="Ancient Tome" class="ancient-tome">
              </figure>
            </div>
            <div class="column is-6">
              <h2 class="title is-2">The Grimwore: A Legendary Compendium</h2>
              <p>
                The Grimwore is a legendary compendium, a repository of knowledge that has been passed down through generations of scholars and adventurers. Its pages hold the secrets of powerful magic items and the lore of fearsome monsters, meticulously chronicled and preserved for those brave enough to seek them out.
              </p>
              <p>
                Within these hallowed pages, you will find detailed descriptions of enchanted weapons, mystical artifacts, and wondrous relics, each imbued with incredible powers that defy the boundaries of reality. Dive deep into the tales of their creation, their legendary owners, and the epic quests that have been undertaken to possess them.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      <section class="section creatures-section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <h2 class="title is-2">Beasts of Legend and Lore</h2>
              <p>
                Beyond the realm of enchanted artifacts lies a world teeming with creatures of myth and legend. The Grimwore catalogues these extraordinary beings, from majestic dragons to cunning tricksters, each with their own unique abilities and place in the tapestry of fantasy.
              </p>
              <p>
                Unravel the mysteries surrounding their origins, habitats, and the ancient tales that have shaped their legends. Discover their strengths, weaknesses, and the strategies required to confront or evade them, should you ever cross paths with these formidable beings.
              </p>
            </div>
            <div class="column is-6">
              <figure class="image">
                <img src="/fearsome-creature.webp" alt="Fearsome Creature" class="fearsome-creature">
              </figure>
            </div>
          </div>
        </div>
      </section>
    
      <section class="section explore-section">
        <div class="container">
          <h2 class="title is-2">Explore the Wonders of The Grimwore</h2>
          <p>
            Whether you seek the power of ancient relics or the wisdom to confront the most fearsome of beasts, "The Grimwore of Magic Items and Monsters" is your gateway to a world of enchantment and peril. Embark on a journey through its pages, and let your imagination soar among the realms of magic and myth.
          </p>
          <div class="buttons">
            <a href="/magic-items" class="button button1 is-primary is-large">Explore Magic Items</a>
            <a href="/monsters" class="button button2 is-link is-large">Discover Monsters</a>
          </div>
        </div>
      </section>
    {/if}
    
    <style>
      .hero {
        background-color: #000000d1; 
        color: #fff; 
        background-image: url('/ancient-parchment.webp');
        background-blend-mode: darken; 
        background-size: cover; 
        background-repeat: no-repeat; 
        background-position: center; 
    }
      .title,
      .subtitle {
        color: #d4af37;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
    
      .grimwore-illustration {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    
      .section {
        background-color: #1a1a1a;
        color: #f5f5f5;
        
        padding: 3rem 1.5rem;
      }
    
      .about-section,
      .creatures-section {
        background-color: #575850;
      }
    
      .ancient-tome,
      .fearsome-creature {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    
      .section .title {
        color: #d4af37;
        margin-bottom: 2rem;
      }
    
      .buttons .button {
        margin-top: 2rem;
        margin-right: 1rem;
        margin-bottom: 10rem;
      }

      .button1 {
      background-color: #d4af37;
    }
    .button2 {
      background-color: #b34f44;
    }
    </style>