<template>
    <div>
        <h1 class="block font-bold m-4 text-center text-2xl">List of Users</h1>

        <NuxtLink to="/" class="p-4 bg-green-100 hover:bg-green-300/50 hover:active:bg-green-300 transition shadow m-4 block rounded-md">
            Go to Index
        </NuxtLink>

        <ul class="m-4 mt-6 bg-gray-50 rounded shadow p-4 font-mono border border-gray-200">
            <li v-for="user in users" :key="user.id">
                <span>ID: {{ user.id }}</span> - 
                <span>username: {{ user.username }}</span> - 
                <span>email: {{ user.email }}</span> - 
                <span>password: {{ user.password }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    const { data: users } = await useFetch('/api/users')
</script>
