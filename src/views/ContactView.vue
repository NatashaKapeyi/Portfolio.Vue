<template>
  <div class="container-fluid">
    <h1 class="display-1 pt-5">Contact me</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <img src="https://i.ibb.co/MpLv8p9/data-2-OOs-C96s-QQL3f-O6bhn-BZ5dcz-XC0d-Ul-NIFXq-RPh-R-W3-BV7-Lg0-Ua-EPh9-HYl-EIYB5zj-FKY5p-AXS0jsj9.png" alt="location" loading="lazy">
        </div>
        <h1 class="text-start pt-3">Reach Me:</h1>
        <h3 class="text-start">
          <a class="social-link " href="https://www.facebook.com/zish.kapeyi/?locale=da_DK&_rdr" target="_blank"><i class="bi bi-facebook"></i></a>
          <a class="social-link" href="https://github.com/NatashaKapeyi" target="_blank"><i class="bi bi-github"></i></a>
          <a class="social-link" href="https://www.instagram.com/natasha_kapeyi/" target="_blank"><i class="bi bi-instagram"></i></a>
        </h3>
        <h6 class="location text-start"><i class="bi bi-geo-alt text-black"></i> Gugulethu</h6>
        <h6 class="number text-start">
          <i class="bi bi-telephone"></i>
          <a href="tel:+27810696733" class="text-black text-decoration-none">+27 8106 96733</a>
        </h6>
        <h6 class="email text-start">
          <i class="bi bi-envelope"></i>
          <a href="mailto:natashazikhona7@gmail.com" class="text-black text-decoration-none">natashazikhona7@gmail.com</a>
        </h6>
      </div>

      <div class="col-lg-6">
        <div class="form-container">
          <form action="https://formspree.io/f/mrgnbpeo" method="POST" class="text-start fw-bold">
            <div class="mb-3">
              <label for="firstname" class="form-label">First Name</label>
              <input type="text" placeholder="Enter your first name" name="firstname" class="form-control" id="firstname" required>
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">Last Name</label>
              <input type="text" placeholder="Enter your last name" name="lastname" class="form-control" id="lastname" required>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" name="email" placeholder="Enter your email" id="exampleInputEmail1" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control form-control-message" name="message" id="message" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.social-link {
  color: #433030;
  font-size: 24px;
  margin-right: 10px;
}

.social-link:hover {
  color: #000;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 0; /* Set border-radius to 0 to make the box square */
  box-sizing: border-box;
}

.form-control-message {
  resize: vertical;
  min-height: 100px;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #433030;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #000;
}
 .col-lg-6 {
    padding: 20px;
  }

  .social-link {
    font-size: 24px;
    margin-right: 10px;
    color: #433030;
  }

  .social-link:hover {
    color: #000;
  }

  .location,
  .number,
  .email {
    margin-bottom: 10px;
  }

  .location i,
  .number i,
  .email i {
    margin-right: 5px;
  }

  .email a,
  .number a {
    color: #000;
    text-decoration: none;
  }

  .email a:hover,
  .number a:hover {
    text-decoration: underline;
  }
  .text-start {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  }
</style>