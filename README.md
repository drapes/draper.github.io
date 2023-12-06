![AMDB Logo](https://drapes.github.io/images/amdb.jpg)
Welcome to the Algolia Movie Database!!

This project is a proof of concept of the Algolia AI Search & Discovery Platform using a dataset scraped from imdb.

My goal for this project was to familiarize myself with Algolia and the various aspects of the platform that enable Algolia customers to build world class search interfaces. To acheive this I attempted to use a variety of methods to interact with Algolia. For example - when creating my index I used Node Package manager to install the Algolia Search Client but when creating my serach interface I utilized the CDN to load InstantSearch.js. I also used the UI for several aspects of this project. I mostly used the UI to configure my index; ie. setting specific attributes as searchable and adding additional ranking criteria. I also used the UI to manually update specific records and to perform test searches directly.

Search results are primarily based on movie title - I've configured the UI to highlight the keywords being searched for within the movie titles. You can however search for alternate titles, actors, and genre. The results are ordered first by search relevance and additionally sorted by the rating of the movie when applicable.

A few notes on usability - Unfortunately many of the image urls in the dataset are 404. To help demonstrate the ideal behavior I've added images for all movies that will appear in the results while searching for 'Finding Nemo', this is the query I would suggest running to see the ideal state. This has been tested on Firefox and Chrome on MacOS, for best visual results make the browser window full screen with 3024 × 1964 resolution. I've also tested on iOS both iPhone and iPad; the functionality works but the layout has not been designed for smaller screens.

General feedback for the Algolia team: Frist, great product the search capability is great by the time I was finished I found I had better results searching my project than searching IMDB directly. The documentation is wonderful; the feature of adding API keys automatically and allowing me to copy/paste directly from the documentation is awesome. Though I did have a minor headache near the beginning when I was using the app id of a different project.

For next steps I would like to include filters for genre and rating level allowing users to make more generic searches and still find movies they would be interested in. Additionally it would be nice to fix all of the broken images and include links in the results to either an imdb page or the film's website.
