<template>
    <v-form ref="form" width="250px" class="pa-md-4 mx-lg-auto" @submit.prevent="onSubmit">

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :counter="8" :rules="passwordRules" label="Password" required
            type="password"></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" type="submit">
            Login
        </v-btn>
        <v-btn color="error" class="mr-4" @click="reset()">
            Reset Form
        </v-btn>

    </v-form>
</template>

<script>
import Swal from 'sweetalert2'
import UserMixin from './Mixins/UserMixin';
import middleware from '../Middleware/Auth'
// import axios from 'axios'
export default {
    name: "AppLogin",
    mixins: [UserMixin],
    middleware: [middleware],
    methods: {
        onSubmit() {
            const temp = this.$refs.form.validate()
            if (temp) {
                localStorage.setItem('isLogin', true);
                Swal.fire("success", `Successfully Logged In`, "success")
                window.location.href = 'http://localhost:8080/#/about';
                location.reload();
                // const data = {
                //     fields: {},
                //     conditions: {
                //         email: this.email,
                //         password: this.password,
                //     },
                //     action: 'getUser'
                // }
                // axios.post("/index.php", data).then(({ data }) => {
                //     console.log(data);
                //     if (data.status) {
                //         Swal.fire("Success", `User Id: ${data.id}Login Successfully`, "success");
                //         this.$refs.form.reset();
                //     }
                //     else {
                //        
                //     }
                // })
                //     .catch(({ response, message }) => {
                //         Swal.fire("Error", response && response.data ? response.data.message : message, 'error');
                //     });
            }
            else {
                return false;
            }
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