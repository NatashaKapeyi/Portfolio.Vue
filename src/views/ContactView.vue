<template>
  <div class="container-fluid">
    <h1 class="display-1 pt-5">Contact me</h1>
    <div class="row justify-content-center">
      <div class="col-lg-4 mb-5">
        <div class="form-container">
          <form action="https://formspree.io/f/mrgnbpeo" method="POST" class="text-start fw-bold">
            <div class="mb-3">
              <label for="firstname" class="form-label">First Name</label>
              <input type="text" placeholder="Enter your first name" name="firstname" class="form-control"
                id="firstname" required />
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">Last Name</label>
              <input type="text" placeholder="Enter your last name" name="lastname" class="form-control" id="lastname"
                required />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" name="email" placeholder="Enter your email"
                id="exampleInputEmail1" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control form-control-message" name="message" id="message"
                placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-4">Send</button>
          </form>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="col">
          <!-- <h1 class="text-start pt-3">Reach Me:</h1> -->
          <div class="social-grouped">
            <div class="row">
              <h6 class="text-justify mb-5">
                If you have a question, a suggestion, I will appreciate hearing from you! Please don't hesitate to get
                in touch using platforms and form below. I'm looking forward to connecting with you!
              </h6>
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <a class="social-link" href="https://github.com/NatashaKapeyi" target="_blank"><i
                        class="bi bi-github"></i></a>
                    <a class="social-link"
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      target="_blank"><i class="bi bi-linkedin"></i></a>
                  </div>
                  <div class="col">

                    <h6 class="fw-bold">My socials</h6>
                  </div>
                </div>


                <div class="row justify-content-center">
                  <div class="col-12">
                    <a href="https://maps.app.goo.gl/DrJcsVq955FtBa3k9" target="_blank" rel="noopener noreferrer"
                      aria-label="Location on Google Maps" class="text-decoration-none social-link"><i
                        class="bi bi-geo-alt"></i></a>
                  </div>
                  <h6 class="location fw-bold">Gugulethu</h6>
                </div>
              </div>
              <div class="col-6 mb-5">

                <div class="row">
                  <div class="col-12">
                    <a href="tel:+27810696733" class="text-decoration-none social-link"><i
                        class="bi bi-telephone"></i></a>
                  </div>
                  <div class="col">
                    <h6 class="number fw-bold">+27 8106 96733</h6>
                  </div>
                </div>


                <div class="row mb-4">
                  <div class="col-12">
                    <a href="mailto:natashazikhona7@gmail.com" class="text-decoration-none social-link"><i
                        class="bi bi-envelope"></i></a>
                  </div>
                  <div class="col">
                    <h6 class="email fw-bold word-break">natashazikhona7@gmail.com</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3064809421644!2d18.562321975513555!3d-33.984660773182526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44e3e402e651%3A0x8f31e35492aeb024!2sGugulethu%20Mall!5e0!3m2!1sen!2sza!4v1712906305862!5m2!1sen!2sza"
            width="600" height="215" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
}



.form-container {
  max-width: 400px;
  height: 100%;
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
  border-radius: 0;
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
  color: #ffffff;
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
.number a,
.location a {
  color: #433030;
  font-weight: bold;
}



.text-start {
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

@media (max-width: 991px) {
  .form-container {
    max-width: 100%;
  }
}


@media (max-width: 576px) {
  .form-container {
    padding: 10px;
    max-width: 100%;
  }
}

.word-break {
  word-break: break-all;
}

.text-justify {
  text-align: justify;
}
</style>
