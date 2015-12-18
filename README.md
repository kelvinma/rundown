#CoachUp

Back end repository: https://github.com/kelvinma/coachR-api

Deployed Front-End Application: http://kelvinma.github.io/coachR/

Deployed Back-End Application: https://intense-escarpment-9142.herokuapp.com/


##Statement

This project represents my final project for General Assembly's Web Development Immersive. Our project parameters were essentially wide open, with the only requirements being basic CRUD actions.

I used this as an opportunity to challenge myself as best as I could while still having access to my excellent instructors at General Assembly. I wanted to take on a challenge that I likely would not be able to accomplish with the mentorship available to me in class.

As such, I set two primary goals for myself:

* Build a project with a front-end framework, in this case EmberJS
* Implement third-party authentication with a social media platform such as Facebook, Spotify or Strava
* Use a different combination of back-end framework and database structure

In the end, my project was able to accompish two of my three primary goals. My Ember application is functional with all four CRUD actions performing on two models, and my back-end framework is Express paired with a SQL database via Sequelize.

There were several issues that came up with the Ember CRUD actions, which hindered my ability to achieve my goal of authentication.

##Planning

My idea was a culmination of various reduction in scope based on my learning objectives. I had initially wanted to try to implement OAuth2 to communicate with Strava, a third-party fitness application that I use to track workouts, so that I could pull in user data for analysis via my own third-party application. After attempting to learn OAuth2 and integrating it in to my own back-end server for token exchange, I came to the realization that I would probably not be able to build a functional full-stack application in my four-day window.

As a backup plan, I came up with a variation of the tracker, but by using it as a coaching tool instead. A simple user-story model would work as follows:

* Coach creates an account - success: Account created
* Coach populates roster of athletes for tracking - success: Athlete added to roster
* Coach records workouts for athletes - success: Workout added for selected athlete
* Coach analyzes performance - success: through notes and metrics, coach is able to look at table and judge athlete performance holistically

From a design standpoint, given my newness to Ember and its component structure, I sought to implement proper use of component and action bubbling to achieve forward-compatibility as Ember continues to evolve through Version 2.0.

For styling, I was able to install the ember-bootstrap add-on.

##Challenges

The main challenge of working with Ember was the sheer newness of it. As Ember transitions between versions 1 and 2, the documentation has not been able to keep up with the pace of changes being implemented. However, that has let me play with some of the more flexible aspects of the framework in order to find creative solutions to the problems I encountered.

My biggest conflict was related to the 'create' functionality of my application. Ember did not let me assign associations between hasMany and belongsTo objects upon creation of the belongsTo child object. This was a result the Canonical and Current States not being able to sync up. After creation of the child element and subsequent saving to the database, the belongsTo relationship needed to be added via a PUT request in order for the association to persist on the back end. The PUT request was unable to process during the create action with default configuration.

Through consultation and collaboration between three instructors, we were able to come up with a solution involving the creation of a customized RESTAdapter to handle the PUT request on the server.

##Conclusions

This was the most challenging of the projects I have worked on at WDI, and although I had serious reservations shortly after getting in to the Ember programming, I have come to greatly appreciate the tools that a robust front-end framework can provide. The modularity and bubbling action features of Ember proved to be interesting features that I tried to integrate as much as I could in my small-scale application, and I can see how they would be useful for scaling up.

The more I dove in to the documentation, the more comfortable I became with writing in Ember and the higher-level concepts. I know I have barely scratched the surface, but being able to see the bigger picture and be functionally literate after after about a week with the framework.

Perhaps the most educational aspect of working on this project was the camaraderie between my instructors and my one other classmate who also chose to attempt an Ember project. As we encountered numerous bugs and issues, whether for the project or for future lessons, it felt like we were truly collaborating as a team. With students as junior developers, instructors as our seniors, I can only hope that a real-world development environment can be as much fun to work in.

The experience has been the perfect punctuation mark as I finish my time at General Assembly.



[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
Kelvin Ma, all rights reserved.
