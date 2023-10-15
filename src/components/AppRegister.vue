<template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      width="250px"
      class="pa-md-4 mx-lg-auto"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="name"
        :counter="20"
        
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="password"
        :counter="8"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="cpassword"
        :counter="8"
        :rules="cpasswordRules"
        label="Confirm Password"
        required
        type="password"
      ></v-text-field>
  
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="I have checked all these"
        required
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
       
        type="submit"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

    </v-form>
  </template>

<script>
import Swal from 'sweetalert2'
export default {
  data: () => ({
    valid: true,
    name: '',
    password:'1212',
    cpassword:'',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 8) || 'Length of Password must be of 8',
    ],
    cpasswordRules: [
      v => !!v || 'Confirm Password is required',
  ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    onSubmit () {
         
        this.$refs.form.validate()
        Swal.fire('Thank You')
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>