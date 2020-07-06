# wee-flow
Workflow management for angular applications

## Install 

```
 npm install wee-flow ts-expression-evaluator
```

## Examples

- Define the flow configuration: https://github.com/hamilton-lima/wee-flow/blob/master/workspace/src/app/checkout.service.ts
- Route guard using the flow service: https://github.com/hamilton-lima/wee-flow/blob/master/workspace/src/app/checkout-workflow.guard.ts

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
