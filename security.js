/* ============================================================
   EMILY & TRAVIS WEDDING SITE
   FILE: security.js
   PURPOSE: Universal security gate for all protected pages.
            Include this file in EVERY inner page with:
            <script src="security.js"></script>

   HOW IT WORKS:
   - Checks localStorage for rsvpAccess === 'true'
   - Checks that a valid device ID exists
   - If either check fails → bounces to index.html instantly
   - Uses window.location.replace() so back button can't
     sneak anyone back in

   PROTECTED PAGES (add yours here as you build them):
   - home.html
   - details.html
   - schedule.html
   - menu.html
   - registry.html
   - activities.html
   - transition2.html

   UNPROTECTED PAGES (do NOT include this file here):
   - index.html
   - transition.html
   - rsvp.html
   - codepage.html
   - guests.js

   TO ADD A NEW PROTECTED PAGE:
   Just drop this line in the <head>:
   <script src="security.js"></script>
   That's it. Nothing else needed.
============================================================ */

(function () {
  'use strict';

  /* ============================================================
     STORAGE KEYS
     Must match across all pages
  ============================================================ */
  var ACCESS_KEY = 'rsvpAccess';
  var DEVICE_KEY = 'forestDeviceId';

  /* ============================================================
     BOUNCE URL
     Where to send unauthorized visitors
  ============================================================ */
  var BOUNCE_URL = 'index.html';

  /* ============================================================
     SECURITY CHECK
     Runs immediately when the script loads —
     before any HTML has rendered.

     Checks:
     1. rsvpAccess must equal 'true'
     2. A device ID must exist (proves they went through codepage)

     If either fails → instant redirect, no flash of content.
  ============================================================ */
  function runSecurityCheck() {
    var access   = localStorage.getItem(ACCESS_KEY);
    var deviceId = localStorage.getItem(DEVICE_KEY);

    /* fail: no access flag */
    if (access !== 'true') {
      window.location.replace(BOUNCE_URL);
      return false;
    }

    /* fail: no device ID (means they never went through codepage) */
    if (!deviceId) {
      window.location.replace(BOUNCE_URL);
      return false;
    }

    /* pass: mark body as authorized so CSS can reveal it */
    /* body should start with opacity: 0 in CSS,
       this class makes it visible */
    document.addEventListener('DOMContentLoaded', function () {
      if (document.body) {
        document.body.classList.add('authorized');
      }
    });

    /* if DOM already loaded, add class immediately */
    if (document.body) {
      document.body.classList.add('authorized');
    }

    return true;
  }

  /* ============================================================
     RUN IT
     This executes the moment the browser parses the script tag.
     No waiting, no delays.
  ============================================================ */
  runSecurityCheck();

})();
