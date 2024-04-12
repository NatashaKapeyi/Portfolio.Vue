<template>
  <div class="container-fluid p-5">
    <h1 class="display-1 pt-5">Contact me</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3064809421644!2d18.562321975513555!3d-33.984660773182526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44e3e402e651%3A0x8f31e35492aeb024!2sGugulethu%20Mall!5e0!3m2!1sen!2sza!4v1712906305862!5m2!1sen!2sza" width="600" height="515" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
          <div class="col">
            <h1 class="text-start pt-3">Reach Me:</h1>
        <h3 class="text-start">
          <a class="social-link " href="https://www.facebook.com/zish.kapeyi/?locale=da_DK&_rdr" target="_blank"><i class="bi bi-facebook"></i></a>
          <a class="social-link" href="https://github.com/NatashaKapeyi" target="_blank"><i class="bi bi-github"></i></a>
          <a class="social-link" href="https://www.instagram.com/natasha_kapeyi/" target="_blank"><i class="bi bi-instagram"></i></a>
        </h3>
        <h6 class="location text-start">
    <a href="https://maps.app.goo.gl/DrJcsVq955FtBa3k9" target="_blank" rel="noopener noreferrer" aria-label="Location on Google Maps" class="text-decoration-none">
        <i class="bi bi-geo-alt"></i> Gugulethu
    </a>
    </h6>
        <h6 class="number text-start">
          <i class="bi bi-telephone"></i>
          <a href="tel:+27810696733" class="text-decoration-none">+27 8106 96733</a>
        </h6>
        <h6 class="email text-start">
          <i class="bi bi-envelope"></i>
          <a href="mailto:natashazikhona7@gmail.com" class=" text-decoration-none">natashazikhona7@gmail.com</a>
        </h6>
      </div>
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
  .number a, .location a {
    color: #433030;
  font-weight: bold;

  }

  .email a:hover,
  .number a:hover {
    text-decoration: underline;
  }
  .text-start {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 991gpx) {
    .form-container {
        max-width: 100%;
    }}

@media (max-width: 576px) {
    .form-container {
        padding: 10px; /* Further reduce padding on very small screens */
        max-width: 100%; /* Allow the form to take up the full width of the screen */
    }
}
  
</style>