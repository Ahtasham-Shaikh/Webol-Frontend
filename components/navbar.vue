<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md p-4">
  <ul class="flex items-center space-x-12 justify-center">
    <li>
      <a href="#">
        <img src="@/assets/logo.png" alt="Logo" class="h-10 w-auto" />
      </a>
    </li>
    <li>
      <NuxtLink to="/shows" class="text-white hover:text-gray-300 font-semibold">
        Shows
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/movies" class="text-white hover:text-gray-300 font-semibold">
        Movies
      </NuxtLink>
    </li>
  </ul>
</nav>

</template>