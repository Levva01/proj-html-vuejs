<template>
  <section class="services">

    <h4>Let's Dream Big Together</h4>
    <h2>Explore How can I help you</h2>

    <div class="services__container">

        <div class="services__container__card first">

            <div class="price">$40.00</div>
            <p>Learning to Write as a Professional Author</p>

        </div>

        <div class="services__container__card second">
            
            <div class="price">Free</div>
            <p>Customer-centrice Info-Tech Strategies</p>

        </div>

        <div class="services__container__card third">

            <div class="price">$19.00</div>
            <p>Open Programming Courses for Everyone: Python</p>

        </div>

        <div class="services__container__card fourth">

            <div class="price">$26.00</div>
            <p>Academic Listening and Note-taking</p>
            
        </div>

    </div>

    <p class="take-control">Take the control of their life back and start doing things to make their dream come true. <strong>View all courses <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></strong></p>


  </section>
</template>

<script>
export default {
    name: 'SectionServices',
}
</script>

<style lang="scss" scoped>

    .services{
        padding: 5rem 0;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;

        .take-control{
            width: 30%;
            margin-top: 2.5rem;
            font-size: small;
            line-height: 1.25rem;
        }

        h4{
            color: #20ad96;
        }
        
        h2{
            margin-top: .4375rem;
            margin-bottom: 1.875rem;
            font-size: 1.875rem;
        }


        &__container{
            display: flex;
            width: 80%;
            gap: 1.25rem;
            justify-content: center;


            &__card{
                width: calc(100% / 4 );
                height: 21.875rem;
                background-size: 100%;
                background-repeat: no-repeat;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                .price{
                    color: #20ad96;
                    font-weight: bold;
                    font-size: 1.5625rem;
                    padding: 1.25rem;
                    padding-bottom: 0;
                
                }

                p{
                    color: white;
                    font-size: 1.0625rem;
                    padding: 1.25rem;
                    padding-top: 0;
                }
            }

            .first{
                background-image: url("../../assets/img/home-business-service-slide-02-480x298.jpg");
            }

            .second{
                background-image: url("../../assets/img/stock-full-hd-03-443x600.jpg");
            }

            .third{
                background-image: url("../../assets/img/stock-full-hd-04-443x600.jpg");
            }

            .fourth{
                background-image: url("../../assets/img/stock-full-hd-06-443x600.jpg");
            }
        }
    }


</style>