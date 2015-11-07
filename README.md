# Hactus
A dashboard for easing the sponsor deliverable and participant management process.

## Problems
Seeks to simplify:
* Approvals of participant attendance
* Analytics of participant data
* Exporting data for sponsor deliverables

## Features
* Data sources
  * Github
  * LinkedIn
  * Participant attributes

## PostgreSQL schema
* attendee
  * application start
    * YYYY-MM-DD HH:MM:SS
  * application submit
    * YYYY-MM-DD HH:MM:SS
  * name
    * string
  * email
    * string
  * gender
    * M
    * F
    * NA
  * tshirt size
    * XS
    * S
    * M
    * L
    * XL
    * XXL
  * diet restriction
    * vegetarian
    * vegan
    * allergy?
  * school
    * string
  * age
    * integer
  * highschool student
    * bool
  * require travel reimbursement?
    * bool
  * first hackathon?
    * bool
  * github account
    * string
  * linkedin account
    * string
  * personal website
    * string
  * resume
    * file (pdf, doc, docx)
  * what do you like to work with?
    * software
    * hardware
    * virtual reality
    * wearable
    * health
    * sustainability
    * robotics
    * 3d printing
    * web
    * ios
    * android
    * other
