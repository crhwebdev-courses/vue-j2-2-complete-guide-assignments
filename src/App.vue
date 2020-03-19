<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <form action="">
            <div>
              <label for="">Full Name</label>
              <input type="text" id="full-name" v-model="userData.fullName" />
            </div>
            <div>
              <label for="">Email</label>
              <input type="text" id="email" v-model="userData.email" />
            </div>
            <div>
              <label for="">Password</label>
              <input
                type="password"
                id="password"
                v-model="userData.password"
              />
            </div>
            <div>
              <div>Store In Database?</div>
              <input
                type="radio"
                id="yes"
                name="yes"
                value="yes"
                checked
                v-model="storeInDatabase"
              />
              <label for="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="no"
                value="no"
                v-model="storeInDatabase"
              />
              <label for="no">No</label>
            </div>
          </form>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ storeInDatabase }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        fullName: "",
        email: "",
        password: ""
      },
      storeInDatabase: "yes"
    };
  }
};
</script>

<style></style>
