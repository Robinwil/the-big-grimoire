<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
  
    let ready = false;
  
    onMount(() => {
      ready = true;
    });
  </script>
  
  <svelte:head>
    <title>The Grimwore of Magic Items and Monsters</title>
  </svelte:head>
  
  {#if ready}
    <section class="hero is-fullheight" transition:fade="{{ duration: 500 }}">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <h1 class="title is-1">Welcome to The Grimwore</h1>
              <h2 class="subtitle is-3">Explore the Mystical World of Magic Items and Monsters</h2>
              <p class="is-size-5">
                Delve into the enchanting realm of The Grimwore, where ancient artifacts and fearsome creatures await. Discover the secrets of powerful magic items and unravel the mysteries of legendary monsters.
              </p>
              <div class="buttons">
                <a href="/magic-items" class="button button1 is-primary is-large">Explore Magic Items</a>
                <a href="/monsters" class="button button2 is-link is-large">Discover Monsters</a>
              </div>
            </div>
            <div class="column is-6">
              <figure class="image">
                <img src="\hero-image.webp" alt="Hero" class="hero-image">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="section featured-section">
      <div class="container">
        <h2 class="title is-2">Featured Magic Items</h2>
        <div class="columns is-multiline">
          <!-- Add featured magic items as individual cards -->
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="/magic-item-1.jpg" alt="Magic Item 1">
                </figure>
              </div>
              <div class="card-content">
                <p class="card-title title is-4">Magic Item 1</p>
                <p class="subtitle is-6">Description of Magic Item 1</p>
              </div>
            </div>
          </div>
          <!-- Add more featured magic items -->
        </div>
      </div>
    </section>
  
    <section class="section monsters-section">
      <div class="container">
        <h2 class="title is-2">Fearsome Monsters</h2>
        <div class="columns is-multiline">
          <!-- Add fearsome monsters as individual cards -->
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="/monster-1.jpg" alt="Monster 1">
                </figure>
              </div>
              <div class="card-content">
                <p class="card-title title is-4">Monster 1</p>
                <p class="subtitle is-6">Description of Monster 1</p>
              </div>
            </div>
          </div>
          <!-- Add more fearsome monsters -->
        </div>
      </div>
    </section>
  {/if}
  
  <style>

    .card-title {
      position: absolute;

      bottom: 3rem;
      left: 1.3rem;

    }

    .is-size-5 {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .hero {
      background-color: #1a1a1a;
      color: #f5f5f5;
    }
  
    .hero-image {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .title,
    .subtitle {
      color: #f5f5f5;
    }
  
    .buttons .button {
      margin-right: 1rem;
    }
    .button1 {
      background-color: #d4af37;
    }
    .button2 {
      background-color: #b34f44;
    }
    .section {
      background-color: #2a2a2a;
      color: #f5f5f5;
      padding: 3rem 1.5rem;
    }
  
    .section .title {
      color: #d4af37;
      margin-bottom: 2rem;
    }
  
    .featured-section,
    .monsters-section {
      background-color: #1a1a1a;
    }
  
    .card {
      background-color: #2a2a2a;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
  
    .card:hover {
      transform: translateY(-5px);
    }
  
    .card-content {
      padding: 1.5rem;
    }
  
    .card-content .title {
      color: #f5f5f5;
      margin-bottom: 0.5rem;
    }
  
    .card-content .subtitle {
      color: #d4af37;
    }
  </style>