<script>
    import Navbar from "../../Navbar.svelte";
    import Footer from "../../Footer.svelte";
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
    background-color: #f5f5f5;
    }

    /* Styling the scrollbar thumb */
    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    /* Styling the scrollbar thumb on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
  
    main {
      flex: 1;
      padding: 2rem 0;
    }
  
    .container {
      max-width: 960px;
      margin: 0 auto;
      background-color: #fff;
      padding: 2rem;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }
  </style>