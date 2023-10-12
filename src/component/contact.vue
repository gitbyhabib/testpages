<template>
  <view>
    <view class="uni-flex uni-column">
      <h2>Contact Us</h2>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </view>

    <view class="uni-flex uni-row contact-page">
      <view class="flex-item uni-center">
        <h2>Contact Information</h2>
        <p>Address: 123 Main Street</p>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </view>

      <view class="flex-item uni-center">
        <div class="map">
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            style="border: 0"
            src="https://www.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University+of+Oxford&amp;t&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowfullscreen
          ></iframe>
        </div>
      </view>
    </view>
  </view>
</template>



<script>
export default {
  data() {
    return {
      // Add data or methods as needed
    };
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.contact-page {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
textarea {
  border-radius: 5px;
  padding: 10px 20px;
  border: 2px solid #d0d0d0;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.map {
  flex: 1;
  min-width: 800px;
}

/* Add specific styling for your map container here */
</style>
