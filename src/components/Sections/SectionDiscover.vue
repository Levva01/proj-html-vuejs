<template>
  <section class="discover">

    <h4>Let's Dream Big Together</h4>

    <h2>Explore How can I help you</h2>

    <div class="discover__container">

        <div class="discover__container__card">
            <img src="../../assets/img/home-business-service-slide-01-480x298.jpg" alt="">
            <h3>Consultative Training</h3>
            <p>With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
            <hr>
            <div>Discover now <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right-long" /></div>
        </div>

        
        <div class="discover__container__card">
            <img src="../../assets/img/home-business-service-slide-02-480x298.jpg" alt="">
            <h3>Consultative Training</h3>
            <p>With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
            <hr>
            <div>Discover now <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right-long" /></div>
        </div>

        
        <div class="discover__container__card">
            <img src="../../assets/img/home-business-service-slide-03-480x298.jpg" alt="">
            <h3>Consultative Training</h3>
            <p>With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
            <hr>
            <div>Discover now <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right-long" /></div>
        </div>


    </div>

  </section>
</template>

<script>
export default {
    name: 'SectionDiscover',

}
</script>

<style lang="scss" scoped>

    .discover{
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f8f8f8;
        padding-top: 5rem;
        padding-bottom: 5rem;

        h4{
            color: #20ad96;
        }

        
        h2{
            margin-top: .4375rem;
            margin-bottom: 1.875rem;
            font-size: 1.875rem;
        }

        &__container{
            width: 70%;
            display: flex;
            gap: 2.5rem;

            &__card{
                width: calc(100% / 3 - 1.25rem);
                text-align: center;
                border-radius: 5px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                

                
                img{
                    width: 100%;
                    border-radius: .3125rem;
                };

                p{
                    color: gray;
                    font-size: small;
                    padding: 0 .625rem;
                }

                hr{
                    color: lightgray;
                    background-color: lightgray;
                    height: .0313rem;
                    border: none;
                }

                div{
                    color: #20ad96;
                    padding: .9375rem 0;

                    .arrow{
                        font-size: 12px;

                    }
                }
            }


        }
    }

</style>