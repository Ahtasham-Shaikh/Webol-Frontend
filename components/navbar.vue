<template>
    <nav class="bg-gray-800 p-4">
        <ul class="flex items-center space-x-12 justify-center">
            <li>
                <a href="#">
                    <img src="@/assets/logo.png" alt="Logo" class="h-10 w-auto" />
                </a>
            </li>
            <li>
                <NuxtLink :to="'/shows'" class="text-white hover:text-gray-300 font-semibold">Shows</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="'/movies'" class="text-white hover:text-gray-300 font-semibold">Movies</NuxtLink>
            </li>
        </ul>
    </nav>
</template>