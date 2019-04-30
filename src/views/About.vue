<template>
  <div class="about">
    <h1>Here comes the register</h1>
    <table class="tableMargin">
      <thead>
        <tr class="thMargin">
          <th v-for="key in columns" :key="key">{{key | capitalize}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tdMargin" v-for="user in users" :key="user.id">
          <td v-for="key in columns" :key="key">{{ user[key] }}</td>
        </tr>
      </tbody>
    </table>
    <label for="input">Please type in the monthly wage</label>
    <input name="input" type="text" v-model="amount" placeholder="Default amount is $1000">
    <button v-on:click="onCalculate(amount)">Calculate</button>
    <button v-on:click="onClear">Clear</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      users: [
        { name: "Isabella", id: 1, workHour: "full", salary: null },
        { name: "Leonardo", id: 2, workHour: "half", salary: null },
        { name: "Andrea", id: 3, workHour: "full", salary: null }
      ],
      columns: ["name", "id", "workHour", "salary"]
    };
  },
  methods: {
    onCalculate(amount) {
      var wage = 500;
      this.users.forEach(user => {
        if (amount) {
          user.salary = user.workHour == "full" ? amount * 12 : amount * 6;
        } else {
          user.salary = user.workHour == "full" ? wage * 12 : wage * 6;
        }
      });
    },
    onClear() {
      this.users.forEach(user => {
        user.salary = null;
      });
    }
  }
};
</script>

<style>
.tableMargin {
  margin: 20px 50px;
}

.thMargin {
  padding: 10px 10px;
}

.tdMargin {
  padding: 10px 10px;
}
</style>