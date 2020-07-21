<template>
<div class='signUpForm'>
<b-form @submit="onSubmit" @reset="onReset">
  <b-form-group id="input-group-1" label="Your First Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Email address:"
        label-for="input-3"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

    <label for="text-password">Password</label>
    <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.password"></b-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>

    <label for="text-password">Repeat password</label>
    <b-input type="password" id="text-password-repeat" aria-describedby="password-help-block" v-model="form.repeatPassword"></b-input>
    <b-form-text id="password-help-block-repeat">
    </b-form-text>
 
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
       </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            firstName:'',
            lastName:'',
          email: '',
          password: '',
          repeatPassword:''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.formfirstName= ''
        this.form.lastName= ''
        this.form.email = ''
        this.form.password=''
        this.form.repeatPassword=''
      }
    }
  }
</script>

<style scoped>
.signUpForm{
    width:60%;
    text-align:center;
    margin:10% auto
}
@media (min-width: 320px) and (max-width: 767px) {
.signUpForm{
    width:90%;
}
}
</style>
