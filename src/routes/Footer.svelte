<footer class="site-footer">
	<div class="page-width footer-grid">
		<div>
			<p class="eyebrow">Keep the lantern lit</p>
			<p class="footer-title">The Big Grimoire</p>
			<p class="footer-copy">A small, growing archive for people who still leave room for wonder.</p>
		</div>

		<nav aria-label="Footer navigation">
			<a href="/about">About the archive</a>
			<a href="/contact">Contact the scribe</a>
			<a href="/privacy">Privacy notes</a>
		</nav>

		<div class="footer-links">
			<a href="https://github.com/Robinwil/the-big-grimoire" target="_blank" rel="noopener noreferrer">
				GitHub<span class="sr-only"> (opens in a new tab)</span>
			</a>
			<a href="https://robinwil.com" target="_blank" rel="noopener noreferrer">
				Robinwil<span class="sr-only"> (opens in a new tab)</span>
			</a>
		</div>
	</div>
	<p class="copyright">© {new Date().getFullYear()} The Big Grimoire. Made for curious minds.</p>
</footer>

<style>
	.site-footer {
		border-top: 1px solid rgba(215, 173, 74, 0.18);
		background: #121116;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr;
		gap: 2rem;
		padding-block: 3rem;
	}

	.footer-title {
		margin-bottom: 0.35rem;
		font-family: var(--font-display);
		font-size: 1.5rem;
	}

	.footer-copy {
		max-width: 22rem;
		margin-bottom: 0;
		color: var(--parchment-muted);
		font-size: 0.9rem;
	}

	.footer-grid nav,
	.footer-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.6rem;
		padding-top: 0.2rem;
	}

	.footer-grid a {
		color: var(--parchment-muted);
		font-size: 0.92rem;
		text-decoration: none;
	}

	.footer-grid a:hover {
		color: var(--gold-bright);
	}

	.copyright {
		padding: 1rem;
		border-top: 1px solid rgba(215, 173, 74, 0.12);
		margin: 0;
		color: #8f8779;
		font-size: 0.78rem;
		text-align: center;
	}

	@media (max-width: 650px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
