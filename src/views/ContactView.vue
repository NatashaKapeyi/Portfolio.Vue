<template>
    <div class="container ">
        <h1 class="display-1 pt-4 ">Contact me</h1>
        <div class="row pt-5 pb-2">
            <div class="col pb-5">
                <h2 class=" text-start pt-3">Lets talk business</h2>
                <h3 class="text-start pl-2"> Lets connect
            <a class="btn btn-outline-light btn-floating m-1"  role="button"
              href="https://www.facebook.com/zish.kapeyi/?locale=da_DK&_rdr"><i class="bi bi-facebook"></i></a>


            <a class="btn btn-outline-light btn-floating m-1"   role="button"
              href="https://github.com/NatashaKapeyi"><i class="bi bi-github"></i></a>

              


            <a class="btn btn-outline-light btn-floating m-1" role="button"
              href="https://www.instagram.com/natasha_kapeyi/"><i class="bi bi-instagram"></i></a>
                </h3>
            </div>
            <form action="https://formspree.io/f/mrgnbpeo" method="POST" class="w-50 text-start fw-bold">

<div class="col pt-2  ">

  <label for="firstname" class="form-label">Leave a message</label>
  <input type="text" placeholder="Enter your name" name="firstname" class="form-control" id="firstname" required>
</div>

<div class="mb-3 ">
  <label for="lastname" class="form-label"></label>
  <input type="text" placeholder="Enter your surname" name="lastname" class="form-control" id="lastname" required>
</div>

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label"></label>
  <input type="email" class="form-control" name="email" placeholder="Enter your email" id="exampleInputEmail1"
    required>
</div>

<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn ">Submit</button>
</form>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h2{
font-size: 91px;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) ;

}

p{
    text-align: justify;
    font-size: 20px;
    font-weight: bold;
}

.btn{
    color: #433030;
    background-color: white;
    font-weight: bold;
}

h3{
    font-size: 40px;
}

@media screen and (max-width: 390px) {
  h2{
    font-size: 60px;
  }
}

</style>