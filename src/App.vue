<template>
  <div id="app">
    <!-- keep-alive allows the components listed to cache. Back button does not reload everything -->
    <keep-alive include="CMS">
      <router-view/>
    </keep-alive>
  </div>
</template>
