# shake-your-weekend
App for finding upcoming events.

Working Title: Shake Your Weekend
    Possible Titles: "Spice It Up (tagline: Live Life with some Zest...)", "Shake It Up"/ "Shake things up", "Something Different", "Event-o-matic", "Let's Go Out"

    (Possible silly tagline- Can't decide where to go out? Sick of dinner and a movie? Why not Shake It Up?)

Description:

Main features:
    1- Quiz that matches users with upcoming events
    2- Uses APIs:
        - Eventbrite - to search events
        - Metro - to map nearest Metro Station to event locations
    3- Have users make a username and password in order to store their results
        - each user has a record in firebase with their list of results
        - add a "save this event" button to the page to push it to firebase
        - put in username and password and press "get my events", gets user's list of events from firebase
    4- New Library/Tech Requirement - Leaflet - to map locations
    
    5- Possible additions later
        - search gives you a random result or two rather than all the results to make decision-making easier, and if yu
        - add randomize feature "Shake things up!"
        - add restaurants near event
        - add other event APIs (like park services, ticketfly) for variety or results (would need to handle duplication)
        - add welcome/intro explaining the page or an about us pop-up blurb or page if user wants to know more ("what is this?" "Why should I take your quiz?" etc.)

Planning Questions:

Who is your target audience?
Singles in the DC Metro Area looking for exciting activities.

What is the problem that the product will address?
Boredom and last minute planning.

What is the primary goal of the product?
Making cool events faster and easier to find, and helping people decide what to do.

Identify and prioritize essential user stories (limit this to 3 or fewer)?
1- As a user, I want to take a quick quiz and see all the choices to help me find something to do.

2- As a user, I want to view all the important information about each event in one place so I can pick one easily, and so I'll be prepared when I get there.

3- As a Metro area resident, I want to know how to get there using metro.

(Broad user story for entire app- "As a busy young professional in the DC area, I have trouble keeping track of everything happening and usually end up stuck when making plans with friends because none of us knows what we want to do. I need something that finds out what's happening near us without cluttering the results with events we wouldn't want to attend and that makes it easy to make a decision, especially last-minute. I also want to have all the information in one place to attend the event, including the nearest Metro station.")


Starter Task List:

    Front-End Work (View):
    - Wireframe (done)
    - Write HTML content
        - Create a form
        - Implement validation
    - Style HTML Content
        - Create a layout
        - CSS
    - Pick framework

    Back-End Work (Ctrl & Database):
    - Form processing
    - AJAX Call to EventBrite
    - AJAX Call to Metro
    - Output Top Event Choices to Results Section
    - Interface with FireBase Database
    - Save Username & password data
    - Save/Load event data
    - Leaflet

    Infrastructure & Project Mgmt:
    - Set up GITHUB & Branching
    - Set up directory structure


    Metro Demo API Key: e13626d03d8e4c03ac07f95541b3091b

