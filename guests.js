/* ============================================================
   EMILY & TRAVIS WEDDING SITE
   FILE: guests.js
   PURPOSE: The official guest list. Every person who gets
            a code lives here. This is the ONLY file you
            need to edit to add, remove, or update guests.

   ============================================================
   HOW TO ADD A GUEST:
     "THEIRCODE": "Their Full Name",

   HOW TO REMOVE A GUEST:
     Delete their line entirely.

   HOW TO UPDATE A CODE:
     Change the code on the left side.
     Their old localStorage will still keep them in on
     their device. The new code lets the new person in
     independently. Nobody gets kicked out.

   CODE RULES:
     - ALL CAPS, no spaces, no special characters
     - Make it personal so nobody can guess it
     - Recommended format: FIRSTNAME + YEAR
       Example: "KAREN2028": "Karen Johnson",
     - Or get creative: "TACOTUESDAY": "Uncle Mike",
     - Min 6 characters recommended

   HOW TO REVOKE ACCESS:
     You can't remotely kick someone out once they're in
     (that would need a paid backend). But you can:
     - Remove their code so nobody NEW can use it
     - For the wedding day itself this doesn't matter
       since the site is invite-only anyway

   ADDING A GUEST EXAMPLE:
     Before:
       "BESTIE2028": "Your Best Friend",

     After adding Paul:
       "BESTIE2028": "Your Best Friend",
       "PAUL2028":   "Paul Smith",

   ============================================================
   CURRENT GUEST COUNT: update this manually as you add people
   Last updated: 2026
   ============================================================ */

const GUESTS = {

  /* ── FAMILY ──────────────────────────────────────────── */
  "FAMILY2028A":  "Family Guest One",
  "FAMILY2028B":  "Family Guest Two",
  "FAMILY2028C":  "Family Guest Three",
  "FAMILY2028D":  "Family Guest Four",
  "FAMILY2028E":  "Family Guest Five",

  /* ── FRIENDS ─────────────────────────────────────────── */
  "FRIEND2028A":  "Friend Guest One",
  "FRIEND2028B":  "Friend Guest Two",
  "FRIEND2028C":  "Friend Guest Three",
  "FRIEND2028D":  "Friend Guest Four",
  "FRIEND2028E":  "Friend Guest Five",

  /* ── TRAVIS'S SIDE ───────────────────────────────────── */
  "TRAVIS2028A":  "Travis Guest One",
  "TRAVIS2028B":  "Travis Guest Two",
  "TRAVIS2028C":  "Travis Guest Three",

  /* ── TEST CODES (remove before wedding) ─────────────── */
  "TACOTEST2028": "Taco Test User",
  "EMILYTEST":    "Emily Test",
  "TRAVISTEST":   "Travis Test",

};

/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   This makes the guest list available to codepage.html
============================================================ */
if (typeof module !== 'undefined') {
  module.exports = GUESTS;
}
