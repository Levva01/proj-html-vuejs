<template>
  <section class="jumbo">

    <div class="jumbo__text">

        <div class="text-container">    
            <h3>New Challenges, New Skills</h3>
            <h1>BUILD YOUR OWN LIFE COACHING BUSINESS</h1>
            <p>Whole-Life Business Coaching for committed entrepreneurs</p>
            <button>Get started today</button>
        </div>

    </div>

    <div class="jumbo__img">
        <img src="../../assets/img/home-business-hero-avatar.png" alt="Max Coach">
    </div>

  </section>
</template>

<script>
export default {
    name: 'SectionJumbo'
}
</script>

<style lang="scss" scoped>

    .jumbo{
        background-color: #eff2f6;
        background-image: url("../../assets/img/home-business-hero-global-image.png");
        height: 31.25rem;
        background-repeat: no-repeat;
        background-size: 31.25rem;
        background-position-x: 70%;
        display: flex;

        &__text{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .text-container{
                width: 18.75rem;

                h3{
                    color: #20ad96;
                }

                h1{
                    font-size: 2.0625rem;
                }

                p{
                    color: gray;
                    font-size: small;
                    margin-bottom: 20px;
                    
                }

                button{
                    background-color: #20ad96;
                    color: white;
                    border: none;
                    padding: .625rem;
                    border-radius: .3125rem;
                }
            }
        }

        
        &__img{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;

            img{
                height: 28.125rem;
            }
        }

    }

</style>