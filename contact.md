---
layout: default
title: "Contact Us"
description: "Get in touch with Erkin Systems — Orange County's trusted managed IT services provider. Call, email, or fill out our form to schedule a free consultation."
permalink: /contact/
---

<section class="page-hero">
  <div class="container">
    <span class="section-label" style="color:#FF6B00;">Get In Touch</span>
    <h1 class="page-hero__title">Let's Talk IT</h1>
    <p class="page-hero__subtitle">Ready to get started, or just have a question? We're here — and we pick up the phone.</p>
  </div>
</section>

<section style="padding: 5rem 0;">
  <div class="container">
    <div class="contact-layout">

      <!-- Left: Info + Map -->
      <div>
        <span class="section-label">Reach Us</span>
        <h2 style="margin-bottom:2rem;">Contact Information</h2>

        <div class="contact-info__item">
          <div class="contact-info__icon"><i class="bi bi-telephone-fill"></i></div>
          <div class="contact-info__text">
            <strong>Phone</strong>
            <a href="tel:17145550192">{{ site.phone }}</a>
            <span style="display:block;font-size:0.8rem;margin-top:0.2rem;color:var(--color-gray-400);">Mon–Fri 8am–6pm · Emergency line 24/7</span>
          </div>
        </div>

        <div class="contact-info__item">
          <div class="contact-info__icon"><i class="bi bi-envelope-fill"></i></div>
          <div class="contact-info__text">
            <strong>Email</strong>
            <a href="mailto:{{ site.email }}">{{ site.email }}</a>
          </div>
        </div>

        <div class="contact-info__item">
          <div class="contact-info__icon"><i class="bi bi-geo-alt-fill"></i></div>
          <div class="contact-info__text">
            <strong>Office</strong>
            <span>{{ site.address }}</span>
            <span style="display:block;font-size:0.8rem;margin-top:0.2rem;">Serving all of Orange County — on-site available</span>
          </div>
        </div>

        <div class="contact-info__item">
          <div class="contact-info__icon"><i class="bi bi-clock-fill"></i></div>
          <div class="contact-info__text">
            <strong>Business Hours</strong>
            <span>Monday – Friday: 8:00 AM – 6:00 PM</span>
            <span style="display:block;">24/7 Emergency Support Available</span>
          </div>
        </div>

        <!-- Google Maps Embed -->
        <!-- To add a real map:
             1. Go to maps.google.com and search your address
             2. Click Share → Embed a map
             3. Replace the placeholder div below with the <iframe> code
        -->
        <div class="map-placeholder">
          <div class="map-placeholder__inner">
            <i class="bi bi-map-fill"></i>
            <p>
              Replace with your Google Maps embed.<br/>
              <a href="https://maps.google.com/?q=2600+Michelson+Dr,+Irvine,+CA+92612" target="_blank" rel="noopener" style="color:var(--color-orange);">Open in Google Maps</a>
            </p>
          </div>
          <!--
          PASTE YOUR IFRAME HERE, e.g.:
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          -->
        </div>
      </div>

      <!-- Right: Formspree Contact Form -->
      <div class="contact-form-card">
        <h3>Get a Free Consultation</h3>
        <p>Fill out the form and one of our Orange County IT specialists will be in touch within one business day.</p>

        <!--
          FORMSPREE SETUP:
          1. Go to https://formspree.io and create a free account
          2. Create a new form and copy your form ID (e.g. xpwzabcd)
          3. Replace YOUR_FORM_ID in _config.yml
        -->
        <form
          action="https://formspree.io/f/{{ site.formspree_id }}"
          method="POST"
          id="contact-form">

          <div class="form-row">
            <div class="form-group">
              <label for="first_name" class="form-label">First Name *</label>
              <input type="text" id="first_name" name="first_name" class="form-control" required placeholder="Maria" />
            </div>
            <div class="form-group">
              <label for="last_name" class="form-label">Last Name *</label>
              <input type="text" id="last_name" name="last_name" class="form-control" required placeholder="Garcia" />
            </div>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Business Email *</label>
            <input type="email" id="email" name="email" class="form-control" required placeholder="maria@yourcompany.com" />
          </div>

          <div class="form-group">
            <label for="phone" class="form-label">Phone Number</label>
            <input type="tel" id="phone" name="phone" class="form-control" placeholder="(714) 555-0000" />
          </div>

          <div class="form-group">
            <label for="company" class="form-label">Company Name *</label>
            <input type="text" id="company" name="company" class="form-control" required placeholder="Acme Corp" />
          </div>

          <div class="form-group">
            <label for="employees" class="form-label">Number of Employees</label>
            <select id="employees" name="employees" class="form-control">
              <option value="">Select a range</option>
              <option value="1-10">1 – 10</option>
              <option value="11-25">11 – 25</option>
              <option value="26-50">26 – 50</option>
              <option value="51-100">51 – 100</option>
              <option value="100+">100+</option>
            </select>
          </div>

          <div class="form-group">
            <label for="service" class="form-label">How Can We Help?</label>
            <select id="service" name="service" class="form-control">
              <option value="">Select a service</option>
              <option value="managed-it">Managed IT Support</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="cloud">Cloud Services</option>
              <option value="network">Network Management</option>
              <option value="helpdesk">Helpdesk</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Tell Us About Your Situation</label>
            <textarea id="message" name="message" class="form-control" placeholder="Describe your current IT setup, pain points, or questions. The more detail, the better we can help."></textarea>
          </div>

          <!-- Honeypot anti-spam field — do not remove -->
          <input type="text" name="_gotcha" style="display:none;" />

          <!-- Update with your thank-you page URL after form submission -->
          <input type="hidden" name="_next" value="{{ site.url }}/thank-you/" />

          <button type="submit" class="btn btn-primary btn-lg form-submit">
            <i class="bi bi-send-fill"></i> Send My Request
          </button>

          <p style="font-size:0.76rem;color:var(--color-gray-400);text-align:center;margin-top:1rem;">
            We respond within 1 business day. Your information is never sold or shared.
          </p>

        </form>
      </div>

    </div>
  </div>
</section>
