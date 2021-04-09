<template>
  <div id="demo6">
    <h1>Demo6 Form input and V model</h1>

    <!-- <form v-on:submit="submit"> -->
    <form v-on:submit.prevent="submit">
      <!-- first name -->
      <div>
        <label for="first_name">First name</label>
        <input
          type="text"
          name="first_name"
          v-model.trim="applicant.first_name"
        />
      </div>

      <!-- last name -->

      <div>
        <label for="last_name">Last name</label>
        <input
          type="text"
          name="last_name"
          v-model.trim="applicant.last_name"
        />
      </div>

      <!-- sex -->

      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
      </div>

      <div>
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <!-- Age -->
      <div>
        <label for="Age">Age: </label>
        <input type="number" v-model.number="applicant.age" />
      </div>

      <!-- courses -->
      <div>
        <select name="courses" v-model="applicant.course">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vuejs">Vue</option>
        </select>
      </div>

      <button type="submit">Submit</button>
      <button type="button" @click.exact="clear" @click.alt="useDefalt">Clear</button>
    </form>

    <div style="margin-top: 16px; color: red">
      # Spy {{ JSON.stringify(applicant) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "angular",
      },
    };
  },
  methods: {
    submit() {
      //ไม่ให้ form reload
      ///event.preventDefault();

      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "angular",
      };
    },
    useDefalt() {
      this.applicant = {
        first_name: "ABC",
        last_name: "DEF",
        sex: "male",
        age: 10,
        course: "angular",
      };
    },
  },
};
</script>

<style>
</style>