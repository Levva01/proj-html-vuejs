<template>
    <section class="video">


        <div class="video__left">

            <div class="video__left__container">
                <img src="../../assets/img/icon-youtube-play.png" alt="">
            </div>

        </div>

        
        <div class="video__right">

            <h2>To Thrive In business Today, You'll need a Good Plan</h2>

            <h4 class="active-color"><font-awesome-icon icon="fa-solid fa-circle-chevron-up" /> How can we help?</h4>

            <p>How many courses you've been on, using however many techniques and methods. Unless you've come to realize the value of mindset, then you've yet to understand how success comes.</p>
            <p>With everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.</p>

            <hr>

            <h4><font-awesome-icon icon="fa-solid fa-circle-chevron-down" /> Why would I need a business COACH?</h4>
            
            <hr>

            <h4><font-awesome-icon icon="fa-solid fa-circle-chevron-down" /> What is one-on-one coaching?</h4>

            <hr>

        </div>


    </section>
</template>

<script>
export default {
    name: 'SectionVideo',
}
</script>

<style lang="scss" scoped>

.video{

    display: flex;
    background-color: #323043;
    padding: 5rem 0;
    align-items: center;
    color: white;

    &__left{
        width: 50%;
        display: flex;
        justify-content: center;
        &__container{
            width: 60%;
            height: 18.75rem;
            background-repeat: no-repeat;
            background-size: cover;

            display: flex;
            justify-content: center;
            align-items: center;
            background-position: center;

            img{
                width: 70px;

            }

            background-image: url("../../assets/img/home-business-video-poster-670x450.jpg");
        }
    }

    &__right{
        width: 25%;

        .active-color{
            color: #20ad96;
        }

        hr{
            border: none;
            height: .0313rem;
            background-color: lightgray;
        }

        h2{
            font-size: 1.875rem;
        }

        p{
            font-size: small;
        }

    }

}

</style>