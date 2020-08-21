# Specs Requirements (Good) = MVP

1) User Auth - Create User with Email and Password / Sign in Google
2) Create Profile for Tutor or Student - Fill in more information about yourself. 

--- Series of Prompts asking for A) Student B) Tutor/Teacher

A) Student
    1) Area or Time you need tutoring?
    2) What subject(s)
        (give radio checkbox options)
    3) What grade level are you in? 
    4) Are you seeking in-person or virtual tutoring (null)
        IF (true) {
            then (prompt("What is your location?"));
        };
    5) What are you willing to pay per-hour (range)?
        a) $8-20 b) $20-45


B) Tutor / Teacher

1) Area or Time you need tutoring?
    2) What subject(s)
        (give radio checkbox options)
    3) What grade level are you in? 
    4) Are you willing to do in-person and/or virtual tutoring
        IF (true) {
            then (prompt("What is your location?"));
        };
    5) What are you willing to accept per-hour (range)?

        Sort by 
            (lowest to highest)
            orderBy.desc(lowestToHighest)
            
            (highest to lowest)
            orderBy.asce(hightestToLowest)

        a) $8-10 b) $10-20 c) $20-25 d) $30-45

3) Displaying information or making accessible (SEE ALL).

## After above is completed (Better)
4) Being able to request a tutor - click button (e.target.value={} onClick={requestTutor})
5) Volunteer (HighSchool - College or people wanting to volunteer (free option))

## FUTURE DEVELOPMENTS (Best)
5) Alert Teacher - Yes or No
6) Teacher could reques to fulfill a job. 

#### Subjects
MATH 
TEST PREP
ART
DANCE
SPECIAL EDS
FOREIGN LANGUAGE
MUSIC AND DRAMA
SPORTS AND FITNESS
SCIENCE
COMPUTERS
MUSICAL INSTRUMENTS
BUSINESS