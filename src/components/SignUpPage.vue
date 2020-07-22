<template>
<div>
  <h1 class='title'>Create new accont</h1>
  <div class="signUpForm">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Your First Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.firstName" required placeholder="Enter first name"></b-form-input>

        <div class="error" v-if="!$v.form.firstName.required">Field is required</div>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.lastName" required placeholder="Enter last name"></b-form-input>
        <div class="error" v-if="!$v.form.lastName.required">Field is required</div>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Email address:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        <div class="error" v-if="!$v.form.email.required">Field is required</div>
        <div class="error" v-if="!$v.form.email.email">Field must contain @</div>
      </b-form-group>
      <b-form-group>
        <label for="text-password">Password</label>

        <b-input type="password" id="text-password" v-model="form.password"  placeholder="Password"></b-input>
        <div class="error" v-if="!$v.form.password.required">Field is required</div>
        <div class="error" v-if="!$v.form.password.minLength">Field must contain min 6 marks</div>
      </b-form-group>

      <b-form-group>
        <label for="text-password">Repeat password</label>

        <b-input type="password" id="text-password-repeat" v-model="form.repeatPassword"  placeholder="Repeat password"></b-input>
        <div class="error" v-if="!$v.form.repeatPassword.required">Field is required</div>
        <div
          class="error"
          v-if="!$v.form.repeatPassword.sameAsPassword"
        >This field must be the same as password</div>
      </b-form-group>

      <b-button type="submit" variant="light" class='submitBtn'>Submit</b-button>

      <b-button type="reset" variant="light" class='resetBtn'>Reset</b-button>
    </b-form>
  </div>
</div>
</template>

<script>
import backendLink from '../../../backendLink'
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    checkData () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return false
      } else {
        return true
      }
    },
    async onSubmit (evt) {
      debugger
      evt.preventDefault()
      const correctData = await this.checkData()
      if (correctData) {
        axios({
          method: 'post',
          url: backendLink + '/users/signup',
          // headers: { 'Content-Type': 'application/json' },
          data: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            email: this.form.email,
            password: this.form.password
          }
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this.formfirstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.password = ''
      this.form.repeatPassword = ''
    }
  }
}
</script>

<style scoped>
.title{
  color:#4fc08d;
  font-weight: bold;
  margin-top: 5%;
}
.signUpForm {
  width: 60%;
  text-align: center;
  margin: 5% auto;
  background-color: rgb(218, 218, 218);
  padding: 3%;
}
.error{
  color:red;
  font-size: 0.7em;
  font-weight: lighter;
}
.submitBtn{
  background-color:#4fc08d ;
  color: white;
  font-weight: bold;
  border-color: #4fc08d;
}
.submitBtn:hover{
  background-color:white ;
  color: #4fc08d;
}
.resetBtn{
  background-color:#2c3e50 ;
  color: white;
  font-weight: bold;
  border-color: #2c3e50;
}
.resetBtn:hover{
  background-color:white ;
  color: #2c3e50;
}
@media (min-width: 320px) and (max-width: 767px) {
  .signUpForm {
    width: 90%;
  }
}
</style>
