<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Executor on Nexus</title>
	<meta
		name="description"
		content="Ben Davis's private integration gateway for his connected accounts and personal workflows."
	/>
	<link rel="canonical" href="https://www.davis7.sh/executor" />
</svelte:head>

<h1>Executor on Nexus</h1>
<p>
	Executor on Nexus is Ben Davis's private, self-hosted integration gateway. It connects his
	accounts to the tools and AI assistants he chooses for personal productivity and content work.
</p>
<h2>Connected Google services</h2>
<ul>
	<li>
		<strong>Gmail:</strong> read and manage messages, compose and send email, and manage basic email settings.
	</li>
	<li><strong>Google Drive:</strong> find, read, create, edit, and delete files.</li>
	<li><strong>Google Calendar:</strong> read and manage calendars and events.</li>
	<li>
		<strong>YouTube:</strong> read channel information and Analytics reports, including revenue reports.
		The YouTube integration does not upload, edit, or delete videos.
	</li>
</ul>
<p>
	Google sign-in links each account to a saved connection. Access is limited to the permissions
	granted by that account. Some Gmail, Drive, and Calendar permissions include destructive actions,
	so connected assistants should only perform actions the owner intends.
</p>
<h2>Personal use</h2>
<p>
	This instance is operated by Ben Davis for his own accounts. It is not a public signup service.
	The application remains on a private network; these public pages explain its purpose and data
	practices.
</p>
<p>
	Read the <a href={resolve('/executor/privacy')}>privacy policy</a> and
	<a href={resolve('/executor/terms')}>terms of use</a>. For questions or access requests, contact
	<a href="mailto:me@davis7.sh">me@davis7.sh</a>.
</p>
