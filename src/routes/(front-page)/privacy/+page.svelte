<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    let ready = false;
    
    onMount(() => {
      ready = true;
    });
    </script>
    
    <svelte:head>
      <title>Privacy Policy - The Grimwore</title>
    </svelte:head>
    
    {#if ready}
      <section class="hero is-fullheight" transition:fade="{{ duration: 1000 }}">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-8 is-offset-2">
                <h1 class="title is-1">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-3">Information We Collect</h2>
                  <p>
                    We may collect personal information such as your name, email address, and other contact details when you sign up for our newsletter or contact us directly. We also collect non-personal information, such as your IP address and browser details, for analytical purposes.
                  </p>
                </div>
              </div>
            </div>
    
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-3">Use of Information</h2>
                  <p>
                    We use the personal information you provide to respond to your inquiries, send you newsletters (if you have subscribed), and improve our services. We may also use non-personal information to analyze website traffic and optimize our content.
                  </p>
                </div>
              </div>
            </div>
    
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-3">Data Security</h2>
                  <p>
                    We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, misuse, or alteration. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>
    
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-3">Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of those sites before providing any personal information.
                  </p>
                </div>
              </div>
            </div>
    
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-3">Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We recommend that you review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/if}
    
    <style>
      .hero {
        background-image: url('hero-image.png');
        background-size: cover;
        background-position: center;
        color: #f5f5f5;
      }
    
      .title,
      .subtitle {
        color: #f5f5f5;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
    
      .section {
        background-color: #1a1a1a;
        color: #f5f5f5;
        padding: 3rem 1.5rem;
      }
    
      .card {
        background-color: #2a2a2a;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
        color: #f5f5f59c;
      }
    
      .card:hover {
        transform: translateY(-5px);
      }
    
      .card-content {
        padding: 1.5rem;
      }
    
      .card-content .title {
        color: #d4af37;
        margin-bottom: 1rem;
      }
    </style>