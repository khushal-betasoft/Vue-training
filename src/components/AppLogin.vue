<template>
    <v-form ref="form" width="250px" class="pa-md-4 mx-lg-auto" @submit.prevent="onSubmit">

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :counter="8" :rules="passwordRules" label="Password" required
            type="password"></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" type="submit">
            Login
        </v-btn>
        <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
        </v-btn>

    </v-form>
</template>

<script>
import Swal from 'sweetalert2'
import UserMixin from './Mixins/UserMixin';
export default {
    name: "AppLogin",
    mixins: [UserMixin],
    methods: {
        onSubmit() {
            const temp = this.$refs.form.validate()
            if (!temp)
                return;

            console.log(`Email: ${this.email} Password: ${this.password}`);
            Swal.fire('Form Submitted Successfully')
        },
        reset() {
            this.$refs.form.reset()
        },

    },
}
</script>

<style>
.v-application .pa-md-4 {
    padding: 16px !important;
    width: 516px;
    margin: auto;
}
</style>