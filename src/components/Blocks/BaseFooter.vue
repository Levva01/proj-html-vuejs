<template>
  <footer class="footer">

    <div class="footer-container">
      
     <div class="left-col">
        <h5>Address</h5>
        <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
        <p>+1(305)547-9909 (9am-5pm EST, Monday-Friday)</p>

        <div class="icons">

          <font-awesome-icon icon="fa-brands fa-facebook-square" />
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <font-awesome-icon icon="fa-brands fa-linkedin" />


        </div>
      </div>

      <div class="right-col">

        <div class="explore">
          <h5>Explore</h5>

          <ul class="ul-explore">
            <li>Start here</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Success story</li>
            <li>Courses</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div class="information">

          <h5>information</h5>
          <ul>

            <li>Membership</li>
            <li>Purchase Guide</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>

          </ul>

        </div>

        
      </div> 
      
      
    </div>    

    

    
      <p class="rights">C 2020 Maxcoach. All Rights Reserved </p>

  </footer>
</template>

<script>
export default {
    name: 'BaseFooter',
}
</script>

<style lang="scss" scoped>

  footer{
    
    padding: 5rem 0;
    color: white;
    background-color: #171621;

    .footer-container{
      display: flex;
    }

    li, p, .icons{
      color: gray;
      list-style: none;
    }

    .icons{
      display: flex;
      gap: 20px;
      font-size: 1.25rem;
    }

    ul{
      padding-left: 0;
      line-height: 2.5rem;
    }

    .ul-explore{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 8.125rem;

      li{
        margin-right: 3.75rem;
      }
    }


    .left-col{
      width: 50%;
      display: flex;
      flex-direction: column;
      padding-left: 12.5rem;


    }

    .right-col{
      width: 50%;
      display: flex;
      gap: 9.375rem;

    }

    .rights{
      text-align: center;
      margin-top: 40px;
    }


  }

</style>