<template>

    
    <view class="signup-page">

            <view class="flex justify-center">
              <img class="logo" src="../static/logo.png" alt="" />
            </view>
        <form @submit="submitForm">
            <input type="text" v-model="formData.username" placeholder="Username" required>
            <input type="email" v-model="formData.email" placeholder="Email" required>
            <div class="password-input">
               
                <span @click="showPassword = !showPassword" class="password-toggle">
                    {{ showPassword ? 'Hide' : 'Show' }}
                </span>
           
             <input class="inputfrm"  v-model="formData.password" :type="showPassword ? 'text' : 'password'"
                        placeholder="Password" required>
                          </div>
                        
            <input  v-model="formData.confirmPassword" type="password"
                placeholder="Confirm Password" required>
               
            <button type="submit" @click="submitForm">Sign Up</button>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            showPassword: false,
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();

            // Basic form validation
            if (
                !this.formData.username ||
                !this.formData.email ||
                !this.formData.password ||
                !this.formData.confirmPassword
            ) {
                uni.showToast({
                    title: 'All fields are required',
                    icon: 'none',
                });
                return;
            }

            if (this.formData.password !== this.formData.confirmPassword) {
                uni.showToast({
                    title: 'Passwords do not match',
                    icon: 'none',
                });
                return;
            }

            // You can now handle form submission here, e.g., make an API request
            // and navigate to a success page or show an error message.
        },
    },
};
</script>

<style>
.signup-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:2%;
}

form {
    width: 80%;
    max-width: 300px;
}



.password-input {
    position: relative;
    
}

.password-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #007aff;
}



input { border-radius: 5px;
         padding: 10px 20px;
         border: 2px solid #D0D0D0; 
         margin-bottom: 10px; 
        }

.inputfrm {
    display: block;
    width:85%;
    font-size: 16px;
    line-height: 1.4em;
    height: 1.4em;
    min-height: 1.4em;
    overflow: hidden;
    border-radius: 5px; padding: 10px 20px; border: 2px solid #D0D0D0; margin-bottom: 10px;
}
button { 
      background-color: #007aff;
      color: #fff;
      width: 100%; 
      border: none;
      cursor: pointer;
     }
</style>
