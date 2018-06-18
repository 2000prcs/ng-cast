# Ng-cast

> AngularJS is Interesting in a Few Key Ways

- AngularJS uses a mix of standard and custom HTML elements and attributes that transforms standard HTML into HTML with superpowers.
- When using AngularJS, developers don't have to think about when to re-render or how to extract values from the DOM (for example, a developer does not need to query an input element to obtain its current value).
- AngularJS improves code quality and modularity because your modules never directly reference external dependencies. More precisely, AngularJS supplies dependencies to your modules in a way that decouples your code from any other code.

# App Organization

Here's how the app is organized:

<img src="https://s3-us-west-2.amazonaws.com/sprint.content/course.ng-cast/components.png">

1. app - The top level container for the entire application.
2. search - Responsible for knowing and communicating information about the search input field
3. videoPlayer - Responsible for playing a single video and displaying information about it
4. videoList - A container component responsible for populating video list entry components
5. videoListEntry - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be shown in the videoPlayer component

Unlike Backbone, models in AngularJS are just regular JavaScript objects.

# Demo

<img src="https://s3-us-west-2.amazonaws.com/sprint.content/course.ng-cast/video-player.gif">
