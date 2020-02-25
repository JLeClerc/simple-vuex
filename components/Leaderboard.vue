<template>
  <ul>
    <li
      v-for="LeaderboardEntry in LeaderboardEntries"
    >
      <slot name="LeaderboardEntry" v-bind:LeaderboardEntry="LeaderboardEntry">
        <!-- default content -->
        name: "{{ LeaderboardEntry.name }}" score: "{{ LeaderboardEntry.score }}"
      </slot>
    </li>
  </ul>
</template>