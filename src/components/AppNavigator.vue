<template>
    <v-card class="overflow-hidden">
        <v-app-bar absolute color="indigo darken-2" dark >
            <!-- shrink-on-scroll prominent scroll-target="#scrolling-techniques" -->
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <!-- <v-btn rounded color="primary" dark>
                Rounded Button
            </v-btn> -->
            <router-link to="/">
                <v-toolbar-title dark class ="mr-5" style="cursor:pointer;text-decoration: none;">Developer Junction</v-toolbar-title>
            </router-link>

            <router-link to="/about">
                <v-btn rounded class="mx-5" color="primary" dark elevation="10">
                    About
                </v-btn>
            </router-link>

            <v-spacer></v-spacer>
            <router-link to="/register">
                <v-btn rounded color="primary" class="mx-5" dark elevation="10">
                    Registration
                </v-btn>
            </router-link>
            
        </v-app-bar>
        <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="600">
            <v-container style="height: 60px;"></v-container>
        </v-sheet>
    </v-card>
</template>