<script>
	import { Button } from '$lib'
  export const socials = [
    { "id": "1", "view": "", "name": "facebook", "url": "https://www.facebook.com/TheScavengerBot/" },
    { "id": "2", "view": "", "name": "twitter", "url":  "https://twitter.com/BotScavenger" },
    { "id": "3", "view": "", "name": "youtube", "url":  "https://www.youtube.com/channel/UCcJgoV7LHcx4OVsgzG2mHLw" },
    { "id": "4", "view": "", "name": "discord", "url":  "https://discord.gg/6Ys7gEr", "size": "40", "box": "0 0 26 26" },
    { "id": "5", "name": "github", "url": "https://github.com/oneezy/monorepo" }
  ]
</script>

<div class="socials flex items-center justify-center gap-2">
	{#each socials as social}
    <Button
      button="icon"
      icon="{social.name}"
      size="42"
      href={social.url}
      target="_blank" rel="noreferrer"
      aria-label={social.title} />
	{/each}
</div>
