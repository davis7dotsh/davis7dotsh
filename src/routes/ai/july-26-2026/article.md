This article is how I’m using AI as of Jul 26, 2026.

The models I prefer, the harnesses I use, and where I get my tokens from.

I’ve done something like this before as a bulleted list of models with little descriptions next to them, but I think it’s honestly better in an article format.

## The models I’m using

I’m very happy to say that the list is growing. Last time I did something like this, there were really only two models I ever touched: GPT-5.5 and Claude Opus 4.8. It’s still not a huge number, but I’m now actively using GPT-5.6 Sol, Claude Opus 5, Claude Fable 5, GPT-5.6 Luna, and Grok 4.5.

Kimi K3 is an extremely impressive model, but it’s not at the level of the others, and I don’t have nearly enough experience with it to say anything interesting. More on open-weight models at the end. First, the models I’m using every day.

### GPT-5.6 Sol

GPT-5.6 Sol is my primary model. It’s a workhorse that still makes up the majority of my token usage.

<figure class="article-receipt">
	<figcaption>My default split for [[entity:gpt-5-6-sol]]</figcaption>
	<div><span>Low</span><strong>Quick fixes, scripts, and computer use</strong></div>
	<div><span>Medium</span><strong>[[entity:hermes-agent]]</strong></div>
	<div><span>High</span><strong>Day-to-day coding</strong></div>
</figure>

It’s the model I use for my Hermes Agent, for day-to-day computer use—interacting with a browser, moving things around on my file system, managing programs—and for most of my code work. If you want a deeper look, I have [a dedicated video](https://youtu.be/eG3SFz-A1tM). The short version:

- Low reasoning is great. It’s fast, cheap, and can do more than you would think. I wouldn’t use it for big code work, but for moving files around, quick fixes, and scripts, use low.
- High reasoning is my default for coding. xHigh and above tend to overthink and don’t get you that much more performance. High feels like the sweet spot.
- Medium reasoning is what I’ve been using for my Hermes Agent. So far, it feels like a good balance of speed and performance.

One of the biggest unlocks with this model was the ability to orchestrate subagents and run for absurd amounts of time. I’ll often give it something like: “Do this, have a subagent plan, then a subagent implement, then a subagent review.” I’ve found this produces excellent results.

Once you get comfortable with them, you can push much harder: large chunks of work in parallel, adversarial reviews, competing plans. The best way to get a feel for subagents is to ask the agent to use them and watch what it does. The Codex desktop app gives you the clearest UI for this.

Another thing this model—and some of the ones we’re about to talk about—has is the “next-generation” feel. There are a lot of parts to it:

- Subagents
- Running for absurd amounts of time
- Quality of output
- Understanding of the prompt

The part that isn’t talked about enough is steerability. We’ve hit a point where I don’t think about compaction or context windows. I tell the model what I want, and I’m no longer afraid to interrupt it and send it down another path.

Yesterday, for example, I had a session planning a feature. I wanted another feature done in parallel, so halfway through I sent a steer telling it to spin off a subagent to plan the second feature. Once it had both plans, it sent two subagents to do the work in parallel without stepping on each other, then had a reviewer make sure it all worked. The prompt worked perfectly. You can redirect these new models at any time, with ease.

GPT-5.6 Sol feels very different from the other models we’re about to talk about. It is unusually literal and relentless. It will do what you say with very few exceptions, and when it thinks it knows what you want, it will do almost anything in its power to get there. It will use as many hacks as needed and break things along the way just to accomplish the goal.

That can be great, but it needs to be managed carefully or you’ll end up with a massive run that perfectly implements the wrong thing. Being clear with the model is extremely important. It doesn’t have the discernment of the next two models: Claude Fable 5 and Claude Opus 5.

### Claude Fable 5

Fable 5 is a magical model. It’s massive, and it has an understanding I’ve never seen from anything else. It feels like it understands what I want and can pull the unsaid intent from a prompt better than any other model.

When you tell someone to “go grab me some water,” that implies a lot of things. Where is the water? Should it be in a cup? It’s a simple example, but the same thing happens with prompts. When you ask a model to implement something without specifying every piece, it has to fill in the blanks. Should it use try/catch blocks or a library like Neverthrow? Should it use grid or flexbox?

Those countless tiny decisions are what Fable excels at. The result is some of the best-looking and best-feeling code I’ve ever seen from a model.

The downside is that it’s slow, expensive, and I don’t like how it sounds or feels. I’m weird about this, but the “Claude voice” is something I hate. I don’t like how personified it feels. I want a simple, blunt machine that talks like a machine, which GPT-5.6 Sol is infinitely better at.

### Claude Opus 5

Claude Opus 5 is the model that surprised me the most. I didn’t expect to like it at all. I figured it would be a distilled version of Fable—the same thing, but weaker. What it actually is feels very different and new: a strange hybrid of GPT-5.6 Sol and Claude Fable 5.

It inherits a lot of Fable’s quality and understanding while also getting Sol’s literal, determined streak. It’s a strange best of both worlds that I’ve quickly come to love.

There are a few drawbacks. It can be painfully literal. I’ve had times when I told it to make a PR and review it until it was green, only for it to say it couldn’t because I hadn’t explicitly asked it to push to the remote. I’ve also seen it get stuck or stop weirdly a few times, but overall it’s rock solid. You just have to be direct and intentional in how you prompt it.

After using Claude Fable 5 for a while, Claude Opus 5 feels really fast. It also feels cheap after getting used to Fable’s limits.

All three—GPT-5.6 Sol, Claude Fable 5, and Claude Opus 5—have that next-generation feel. You won’t go wrong with any of them, and I go back and forth between them all the time. That takes me to the weirdest model on this list.

### Grok 4.5

This one surprised me a lot. I got to try it early and thought I was testing Composer 3. I was really impressed. The next day, I found out it was actually Grok 4.5.

It’s a very good model: fast and cheap while still getting a lot of that next-generation feel. To be clear, it’s not at the same level as the three I just talked about—not even close—but it’s very usable and pleasant. It feels great in Cursor, and because it’s so cheap, you get basically unlimited usage.

### GPT-5.6 Luna

GPT-5.6 Luna is my small model of choice. I don’t prompt small models directly. In my opinion, they’re at their best when called programmatically. Classification and search tasks work absurdly well. Luna is very fast, very cheap, and much more capable than you would think. I would genuinely take it over GPT-5.5.

It can handle subagents, run for a long time, and do real code work. If GPT-5.6 Sol weren’t so efficient and powerful, I’d use Luna much more.

The way I think about small models is: “How many times is this prompt going to run?” If you have an agent with a fixed prompt like “classify this YouTube comment as positive or negative, and add these tags if they fit,” that prompt may run thousands of times. GPT-5.6 Luna is an excellent choice.

Another example is the auto mode in my Hermes Agent. When the model asks to run a large command, it will usually require permission if the command trips a static check. I have Luna review the requested command before I see it and automatically approve it unless it looks very dangerous.

I was going to rank these models, but I don’t think that makes sense right now. If you want a simple recommendation, use GPT-5.6 Sol or Claude Opus 5. OpenAI and Anthropic are neck and neck. These are both excellent, different models, and I use both heavily.

## The harnesses I use them in

I just made a video about [my custom Pi setup](https://youtu.be/5Qu2SkSQeBU). If you haven’t tried Pi, you should. It’s hyper-minimal, with only four built-in tools, but the magic is in the extension system. I’ve added subagents, workflows, background terminals, questions, and much more just by asking Pi to add them for me.

Models do great in simple systems, and Pi is no different. [My setup is on GitHub](https://github.com/davis7dotsh/my-pi-setup). I don’t recommend copying it directly. Have your agent go through it and interview you about the parts you do and don’t want. Once Pi clicks, it’s hard to go back.

Even with all that said, it still isn’t the harness I use the most. Codex and Claude Code dominate that list for a couple of reasons.

### Claude Code

The simplest reason I use Claude Code is that I can’t use my Claude Code subscriptions anywhere else without violating the terms of service. If I want Claude models in Pi, I have to pay API prices, which isn’t worth it.

Claude Code has also gotten so much better over the last few months. It was a mess for a while, and I actively recommended against using it. Now I’m a huge fan. Its subagent system, dynamic workflows, and user experience are incredible. It feels like it was built for the models we have now, and that has paid off.

### Codex

I still use Codex constantly for two reasons:

1. The Codex—now ChatGPT—desktop app is incredible. The UI is beautiful, computer use is the best in the industry by a mile, and all of the extra features wrapped into it feel great.
2. T3 Code. Codex is first-class in T3 Code, making it my default on every machine that isn’t my main Mac.

That phrase—“every machine that isn’t my main Mac”—is the key.

<figure class="article-receipt network-receipt">
	<figcaption>My remote agent setup</figcaption>
	<div><span>Control</span><strong>operator-ii · MacBook Pro</strong></div>
	<div><span>Network</span><strong>Tailscale</strong></div>
	<div><span>Compute</span><strong>Windows and Linux desktops at home</strong></div>
</figure>

### T3 Code

T3 Code is the best remote experience on the market right now. This will get a full breakdown later, but the short version is that you can run `npx t3` on any machine to spin up the web app and server. If your devices are on the same Tailscale network, you can open the web UI from another machine—in my case, my MacBook Pro—and run agents remotely.

I can send off jobs from anywhere and have them run on my Linux machines at home. Linux is far more efficient and performant than macOS for this. If you have ten Codex threads running on macOS, you’ll feel it. Ten Codex threads on Linux can look like the system is idle. It’s like having a personal cloud-agent setup, and I love it.

With today’s more powerful models, jobs can run for hours. Keeping your laptop awake is no longer a concern. Close it; the job isn’t running there anyway. I cannot recommend talking to your agent about setting this up enough.

### Cursor

Cursor deserves an honorable mention. Its desktop app went from a total mess to one of the best, and it has the best hosted cloud-agent system I’ve used. I lean on T3 Code because I have the hardware and setup. If I didn’t, Cursor is what I would use.

## Where I’m getting my tokens

I’ll keep this section brief because there isn’t much to say. The $200 Codex and Claude subscriptions are still the best by far. You can extract so much value from both that nothing else comes close.

<figure class="article-receipt">
	<figcaption>Current subscriptions</figcaption>
	<div><span>1×</span><strong>[[entity:codex]]</strong></div>
	<div><span>2×</span><strong>[[entity:claude-code]] via [[entity:vibe-proxy]]</strong></div>
	<div><span>Also</span><strong>[[entity:cursor]]</strong></div>
</figure>

I’m load-balancing between two Claude Code subscriptions with [Vibe Proxy](https://github.com/automazeio/vibeproxy).

To be clear, I’m not using this to access my Claude Code subscription from other harnesses. You can, but I recommend against it. Anthropic is strict about this, and you will probably get banned. I use Vibe Proxy only to load-balance the subscriptions, then point my Claude Code instances at the local proxy using API-key authentication. One proxy runs on my Nexus machine, and all of my devices reach it over Tailscale.

Outside of these, OpenRouter is great, but you pay API prices. Cursor is a good value, but it isn’t nearly as wild as the lab subscriptions.

The nice part of the Codex subscription is that you can use it wherever you want. OpenAI is relaxed about it. Use it in Pi, Hermes, even Claude Code—they won’t stop you. It’s a versatile subscription, I love the models it gives me, and the limits are generous enough, with frequent enough resets, that I haven’t needed a second one _yet_.

## Current thoughts on the industry

Two things I want to put some thoughts down on as I close.

### The sad fall of Google

I’ve dunked on Google many times before and will many more times, mostly because it’s fun. But I don’t want them to lose like this. Competition is what we need most right now.

SpaceX AI is catching up much faster than I expected, and open-weight models like Kimi K3 are impressive, but the reality is that OpenAI and Anthropic are in a league of their own. No one is close at the true frontier. I wish there were more companies that could challenge them.

Google should be one of them, but through a variety of mistakes over the past few years, it has fallen far behind. My ranking of the labs right now:

1. OpenAI and Anthropic (tie)
2. —
3. SpaceX AI and Cursor
4. Moonshot (Kimi)
5. DeepSeek
6. Google

You could even argue Meta is gaining on Google with the Muse Spark model that just dropped, although neither I nor anyone I know has done much with it.

Google just released Gemini 3.6 Flash, and it’s bad. No one is using it. It would have been compelling 12 months ago, not now. Google has teased that Gemini 4 pre-training has started and seems excited, but I don’t know. I truly hope it’s good. I want Google to be a player, but right now it isn’t. All the compute, all the data, all the advantages—and it’s getting crushed.

### Open-weight models

This deserves its own post, but I want to say something now.

Last week, there was a letter signed by basically every big company except Anthropic stating the importance of open-weight models. This is something I’m deeply torn on.

I want to be crystal clear that the open-weight future is the one I _want_ to live in. The idea of everyone having their own completely uncensored models, running at home, available to fine-tune and use as they see fit, sounds amazing. It creates more competition, more innovation, more freedom, and broader access to knowledge—not just access for 10,000 people at two companies.

Anthropic is the notable holdout from the letter. It’s getting dragged online for this, but I don’t know if I can fault it. I have a complex set of feelings about Anthropic. It does a lot that I dislike and can feel deeply cultish. The thing is, I respect it. OpenAI is my favorite lab: great to work with, making great products, and, at least so far, acting in good faith. I don’t really like Anthropic, but I respect it.

Anthropic is an ideological lab. OpenAI, from what I can tell, doesn’t have a clear ideology. It’s an engineering and product company that wants to make an absurdly useful technology available to as many people as possible. Nothing crazy or groundbreaking—standard tech-company stuff—but it does it well. Anthropic believes it is creating the successor to humanity: a machine god.

It cares about scaling and safety. It has a clear mandate and mission, and it is remarkably consistent. Its big decisions—Glasswing, the Fable and Mythos rollout, and others—are consistent with that worldview. So is its anti-open-weight position.

Anthropic’s view is that open-weight models are far too dangerous at scale. AI is too powerful to be available unchecked, without protections that keep it from being used as a weapon. Anthropic wants itself to be the gatekeeper: you get the models through it, and it makes sure they’re safe.

I’m of two minds.

1. I hate this on a gut level. I don’t want to live with that degree of centralization and control. Anyone reading this far knows how powerful these systems already are and how powerful they’re likely to become. We’re already seeing the best models made available only to labs, Fortune 100 companies, and governments. No one else gets Mythos. We get Fable: the same model, with guards that prevent work involving cybersecurity, model training, or biology. I hate the idea that a very small number of people will have access to the best models—especially the ones that haven’t been made yet. Not just for work, but for the knowledge and understanding they may unlock.
2. The other side is that these systems actually are dangerous. If I had unfiltered Mythos and wanted to commit atrocities—obviously I don’t; this is an example—I’m confident I could use it to cause an absurd amount of damage. Open weights make that infinitely easier. Once the weights are out and you download them, they’re yours. No safeguards, filters, or reporting. Sure, safety could be trained in, but browse Hugging Face for five minutes and you’ll find jailbroken fine-tunes of every open-weight model that will give dangerous instructions without hesitation. These systems are weapons with a potentially enormous blast radius.

So what do you do? Accept the risk and let open-weight models continue until something bad happens? Because something will. It is only a matter of time before there is a large-scale attack made possible by an open-weight model.

Or close it down, and make protected APIs the only place to get real models—APIs that can filter, block, and control what you can do.

> You want to use it to help with cancer research? Sorry, that looks like biology. It’s too dangerous for you. Don’t worry; the big labs will do it for you and take care of you.

I left that line in because it was a gut reaction, and I think it shows my feelings best. Logically, I understand the dangers of open-weight models. Controls keep people safe, and for now, the labs seem aligned enough that I trust them.

On a more visceral level, I fucking hate the idea that I won’t be able to do as I please. If I want to distill Fable using Fable, let me do it. If I want to ask about something a lab doesn’t like, I shouldn’t be limited. I should be free.

Freedom always comes with immense risk. It always has, but so far it has always been worth it. That freedom also includes the freedom to gain the understanding that future models will bring.

These systems are already incredible. If scaling continues as I expect—and as the labs expect—we’re going to get machines beyond anything we can imagine. What secrets will they reveal? What will we learn about the human condition, our world, and the things we can build? Will all of it be hidden behind the walls of two companies with 5,000 people each, or will everyone get to see it?

I don’t have answers to any of this. I will say that I’ve been paying much more attention to open-weight models. I’ve been pushing my 5090 as hard as I can, testing fine-tuning, and learning how to run and use these systems locally.

I just ordered two DGX Sparks. It’s going to be a very fun rabbit hole.
