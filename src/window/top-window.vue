<template>
    <view class="content">

        

        <div class="flex" style="display:flex;">
       
            <navigator class="uni-list-cell-navigate  " url="/component/view">
    	       <div class=""  type="default">Home</div>
    	     </navigator>
             <navigator class="uni-list-cell-navigate  " url="/component/about">
    	       <div  class="" type="default">About</div>
    	     </navigator>
             <navigator class="uni-list-cell-navigate  " url="/component/contact">
    	       <div  class="" type="default">Contact</div>
    	     </navigator>
             <navigator class="uni-list-cell-navigate  " url="/component/signup">
    	       <div  class="" type="default">Signup</div>
    	     </navigator>
            </div>
    </view>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    onLoad() {

    },
    methods: {

    }
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    height: 60px;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
