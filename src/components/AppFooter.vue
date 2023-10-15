<template>
    <v-footer
      dark
      padless
      color="indigo darken-2"
    >
      <v-card
        flat
        tile
        class="indigo darken-2 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          Thank You for visiting our website. If you have any kind of question, just contact us through the above sources. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem magni soluta facere possimus amet nobis delectus molestias unde commodi odio, maiores iure ad nesciunt totam fuga temporibus nemo. Est.
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Khushal Sharma</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>