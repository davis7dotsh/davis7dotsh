<svelte:head>
	<title>Executor privacy policy</title>
	<meta
		name="description"
		content="How Executor on Nexus accesses, uses, stores, and shares Google account data."
	/>
	<link rel="canonical" href="https://www.davis7.sh/executor/privacy" />
</svelte:head>

<h1>Privacy policy</h1>
<p>
	Effective September 7, 2026. This policy covers Executor on Nexus, a private integration gateway
	operated by Ben Davis. Contact: <a href="mailto:me@davis7.sh">me@davis7.sh</a>.
</p>
<h2>Data accessed</h2>
<p>
	When an account is connected, Executor receives the account's basic profile information and OAuth
	tokens. Depending on the permissions granted and the tools invoked, it can access Gmail messages
	and settings, Google Drive files and metadata, Google Calendar calendars and events, and YouTube
	channel and Analytics data, including revenue reports.
</p>
<h2>How data is used</h2>
<p>
	Data is used to carry out the owner's requested workflows: managing email, files, and calendars,
	and reviewing channel performance. Google user data is not sold or used for advertising. Google
	user data is not used to develop, improve, or train generalized AI or machine-learning models.
</p>
<p>
	Executor on Nexus's use and transfer of information received from Google APIs will adhere to the <a
		href="https://developers.google.com/terms/api-services-user-data-policy"
		>Google API Services User Data Policy</a
	>, including its Limited Use requirements.
</p>
<h2>Sharing and AI clients</h2>
<p>
	Executor returns requested data to clients the owner authorizes. If an authorized client uses an
	external AI or automation provider, the data needed for that workflow may be sent to that
	provider. The owner must configure those services consistently with this policy, including the
	restriction on generalized model training. Data is otherwise shared only as needed to provide the
	requested functionality, for security purposes, or when required by law.
</p>
<h2>Storage and security</h2>
<p>
	OAuth credentials are stored in Executor's encrypted credential store on the owner's
	infrastructure. Access to the instance requires its private network and application access
	controls. Tool results can also be retained in the owner's workflow outputs, execution records,
	client histories, or backups. Those copies have their own retention settings.
</p>
<h2>Retention, revocation, and deletion</h2>
<p>
	Credentials are retained while a connection is in use. The owner can remove a connection in
	Executor and revoke its Google access at <a href="https://myaccount.google.com/connections"
		>Google Account connections</a
	>. Revoking access prevents further authorized API access; it does not automatically erase
	previously saved outputs, histories, or backups.
</p>
<p>
	To request deletion of retained data or ask about a particular copy, contact <a
		href="mailto:me@davis7.sh">me@davis7.sh</a
	>. Deletion includes identifying relevant workflow and client storage; backup copies may remain
	until those backups expire or are removed.
</p>
<h2>These public pages</h2>
<p>
	The information pages on davis7.sh are hosted on Vercel and use the site's web analytics. Visiting
	these pages does not grant access to a Google account or expose connected account contents.
	Hosting and analytics may process ordinary visit information, such as the requested page and
	browser or device information.
</p>
<h2>Changes</h2>
<p>
	Updates to these practices will be reflected here with a revised effective date. New permissions
	require authorization through the relevant provider.
</p>
