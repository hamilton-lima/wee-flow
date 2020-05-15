# wee-flow
Workflow management for angular applications

## Install 

```
 npm install wee-flow ts-expression-evaluator
```

# Motivation

When you start a new Single page application project everything is beatiful, you are in love with the framework, `ng generate` is you best friend, and so on.

The you you add one component here, another component there, some grams of `this.router.navigate()` and voilá! the magic happens.

![screenshot](https://raw.githubusercontent.com/hamilton-lima/wee-flow/master/images/first-day.png)

Then time goes by and the navigation between components starts go get a little, err... challenging... 

![screenshot](https://raw.githubusercontent.com/hamilton-lima/wee-flow/master/images/second-week.png)

And as time goes by the challenge only grows. This motivated me to build this little flow management to remove the decision of the ***next route*** from the components to the a set of rules.

# How it works 

These are the main concepts described in this image:
- set of rules
- domain data
- next route calculation

![screenshot](https://raw.githubusercontent.com/hamilton-lima/wee-flow/master/images/main-flow.png)

# Implementation plan 

## Phase 1
ok - first route
ok - domain data update
ok - set of rules
ok - rules parsing
ok - navigate to the next route 
- save domain state to continue navigation
- default route when rules parsing 
- publish library to npm

## Phase 2
- add url guard
- expose events
- add error page in the example

## Phase 3
- create editor
