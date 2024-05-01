<script>
    import Navbar from "../Navbar.svelte";
    import Footer from "../Footer.svelte";
  </script>
  
  <div class="layout">
    <Navbar />
  
    <main class="section">
      <div class="container">
        <slot />
      </div>
    </main>
  
    <Footer />
  </div>
  
  <style>

    /* Styling the scrollbar track */
    ::-webkit-scrollbar-track {
    background-color: #1a1a1a;
    }

    /* Styling the scrollbar thumb */
    ::-webkit-scrollbar-thumb {
        background-color: #1a1a1a;
        border-radius: 5px;
    }

    /* Styling the scrollbar thumb on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #1a1a1a;
    }

    .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #1a1a1a;
    }
  
    main {
      flex: 1;
      padding: 2rem 0;
    }
  
    .container {
      max-width: auto;
      padding: 1rem;

    box-shadow: 0 4px 6px #d4af37, 0 0 0 2px #d4af37;
    }
  </style>