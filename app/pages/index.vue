<template>
    <div>
        <h1 class="block font-bold m-4 text-center text-2xl">Home</h1>

        <NuxtLink prefetch to="/users" class="p-4 bg-blue-100 hover:bg-blue-300/50 transition hover:active:bg-blue-300 shadow m-4 block rounded-md">
            Go to Users (NuxtLink)
        </NuxtLink>

        <a href="/users" class="p-4 bg-yellow-100 hover:bg-yellow-300/50 transition hover:active:bg-yellow-300 shadow m-4 block rounded-md">
            Go to Users Faster (a tag)
        </a>
    </div>
</template>
