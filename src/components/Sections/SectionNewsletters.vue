<template>
  <div class="newsletter">

    <h2><strong>Subscribe </strong>Newsletters</h2>

    <p>Enter your email address to register our newsletter subscription delivered on a regular basis!</p>

    <div class="email-bar">

        <input type="text" placeholder="Enter your email">
        <button>Subscribe</button>

    </div>

  </div>
</template>

<script>
export default {
    name: 'SectionNewsletters',
}
</script>

<style lang="scss" scoped>

.newsletter{

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  .email-bar{
    width: 30%;
    height: 4.375rem;
    display: flex;

    input{
      width: 70%;
      background-color: #f8f8f8;
      border: none;
    }

    input::placeholder{
      padding-left: .625rem;
    }

    button{
      width: 30%;
      color: white;
      background-color: #20ad96;
      border: none;
      border-top-right-radius: .3125rem;
      border-bottom-right-radius: .3125rem;
    }


  }


  h2{
    font-size: 1.875rem;
    strong{
      color: #20ad96;
    }
  }

  p{
    color: gray;
    width: 30%;
    text-align: center;
    margin-bottom: 1.875rem;
  }
}

</style>