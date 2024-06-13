<script>
	import { Preview, Logo } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Logo />
</Preview>

<!-- src 
:::::::::::::::::::::::::::::::: -->
<Preview name="src ">
	<Logo src="/icon.svg" />
</Preview>

<!-- href 
:::::::::::::::::::::::::::::::: -->
<Preview name="href ">
	<Logo href="/" />
</Preview>

<!-- src + href 
:::::::::::::::::::::::::::::::: -->
<Preview name="src + href">
	<Logo src="/icon.svg" href="/" />
</Preview>
