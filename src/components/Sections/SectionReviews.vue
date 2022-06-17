<template>
  <section class="reviews">

    <h4>People are praising MaxCoach</h4>

    <h2>What make the love us?</h2>

    <div class="reviews__container">


        <div class="reviews__container__card op-30">

            <h5>It's a choice of quality for people with special needs</h5>

            <p>I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.</p>

            <div class="profile">
                <img src="../../assets/img/testimonial-avata-03.jpg" alt="">

                <div class="user">
                    <h5>FLORENCE THEMES</h5>
                    <p>/Multimedia Admin</p>
                </div>
            </div>

        </div>

        <div class="reviews__container__card">

            <h5>High level of efficency and scientific teaching methods</h5>

            <p>I am free to learn at my own peace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>

            <div class="profile">
                <img src="../../assets/img/testimonial-avata-02.jpg" alt="">

                <div class="user">
                    <h5>MINA HOLLACE</h5>
                    <p>/Freelancer</p>
                </div>
            </div>

        </div>

        <div class="reviews__container__card op-30">

            <h5>Professional team of specialists and passionate mentors at reach</h5>

            <p>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</p>

            <div class="profile">
                <img src="../../assets/img/testimonial-avata-04.jpg" alt="">

                <div class="user">
                    <h5>MADLEY PONDOR</h5>
                    <p>/IT Specialist</p>
                </div>
            </div>

        </div>

    </div>

  </section>
</template>

<script>
export default {
    name: 'SectionReviews'

}
</script>

<style lang='scss' scoped>

    .reviews{

        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f8f8f8;

    
        h4{
            color: #20ad96;
            margin-bottom: 0;

        }

        h2{
            font-size: 1.875rem;
            margin-bottom: 3.125rem;
        }

        &__container{

            display: flex;
            width: 90%;
            gap: 1.875rem;


            &__card{

                width: calc(33.3% - 30px);
                background-color: white;
                padding: 1.25rem;
                h5{
                    font-size: 1.0625rem;
                }

                p{
                    font-size: .875rem;
                    line-height: 1.4375rem;
                    color: gray;
                }

                .profile{
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;

                    img{
                        margin-top: .625rem;
                        border-radius: 50%;
                        width: 4.375rem;
                        height: 4.375rem;
                    }

                }

                .user{
                    h5{
                        margin-bottom: 0;
                    }

                }

            }

            .op-30{
                opacity: 30%;
            }

        }

    }

</style>