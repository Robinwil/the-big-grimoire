<script>
	import { resolve } from '$app/paths';

	let menuOpen = false;

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header">
	<nav class="nav-bar page-width" aria-label="Primary navigation">
		<a class="brand" href={resolve('/')} onclick={closeMenu}>
			<img src="/favicon.webp" alt="" width="48" height="48" />
			<span>
				<strong>The Big Grimoire</strong>
				<small>Field notes for the curious</small>
			</span>
		</a>

		<button
			class="menu-toggle"
			type="button"
			aria-controls="site-navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="sr-only">Toggle navigation</span>
			<span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
		</button>

		<div id="site-navigation" class="nav-links" class:open={menuOpen}>
			<a href={resolve('/magic-items')} onclick={closeMenu}>Magic items</a>
			<a href={resolve('/monsters')} onclick={closeMenu}>Monsters</a>
			<a href={resolve('/about')} onclick={closeMenu}>About</a>
			<a href={resolve('/docks')} onclick={closeMenu}>Field notes</a>
		</div>

		<form class="search-form" action="/search" method="get" role="search">
			<label class="sr-only" for="site-search">Search the grimoire</label>
			<input
				id="site-search"
				name="q"
				type="search"
				placeholder="Search entries"
				autocomplete="off"
			/>
			<button type="submit" aria-label="Search the grimoire">⌕</button>
		</form>
	</nav>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		border-bottom: 1px solid rgba(215, 173, 74, 0.2);
		background: rgba(23, 21, 26, 0.94);
		backdrop-filter: blur(14px);
	}

	.nav-bar {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 1.5rem;
		min-height: 5.2rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		color: var(--parchment);
		text-decoration: none;
	}

	.brand img {
		width: 2.9rem;
		height: 2.9rem;
		border: 1px solid var(--line);
		border-radius: 0.55rem;
		object-fit: cover;
	}

	.brand strong,
	.brand small {
		display: block;
	}

	.brand strong {
		font-family: var(--font-display);
		font-size: 1.05rem;
	}

	.brand small {
		margin-top: 0.1rem;
		color: var(--parchment-muted);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.nav-links {
		display: flex;
		justify-content: flex-end;
		gap: 0.2rem;
	}

	.nav-links a {
		padding: 0.55rem 0.7rem;
		border-radius: 0.35rem;
		color: var(--parchment-muted);
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
	}

	.nav-links a:hover {
		background: rgba(215, 173, 74, 0.1);
		color: var(--gold-bright);
	}

	.search-form {
		display: flex;
		align-items: center;
		border: 1px solid rgba(215, 173, 74, 0.35);
		border-radius: 0.4rem;
		background: var(--ink-soft);
	}

	.search-form input {
		width: 9.5rem;
		padding: 0.55rem 0.7rem;
		border: 0;
		outline: 0;
		background: transparent;
		color: var(--parchment);
		font-size: 0.88rem;
	}

	.search-form input::placeholder {
		color: #a69b89;
	}

	.search-form button,
	.menu-toggle {
		border: 0;
		background: transparent;
		color: var(--gold-bright);
		cursor: pointer;
	}

	.search-form button {
		padding: 0.45rem 0.65rem;
		font-size: 1.2rem;
		line-height: 1;
	}

	.menu-toggle {
		display: none;
		padding: 0.4rem;
		font-size: 1.5rem;
		line-height: 1;
	}

	@media (max-width: 900px) {
		.nav-bar {
			grid-template-columns: 1fr auto;
			gap: 0.75rem;
		}

		.menu-toggle {
			display: block;
		}

		.nav-links {
			display: none;
			grid-column: 1 / -1;
			flex-direction: column;
			align-items: stretch;
			padding-bottom: 0.5rem;
		}

		.nav-links.open {
			display: flex;
		}

		.nav-links a {
			padding: 0.75rem;
		}

		.search-form {
			grid-column: 1 / -1;
			grid-row: 3;
			margin-bottom: 0.75rem;
		}

		.search-form input {
			width: 100%;
		}
	}
</style>
