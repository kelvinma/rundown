![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Ember Starter: Using Ember 2.0

## Foundations
At this point, students have already learned how to:

- Create an Ember 1.13.13 application.

## Objectives
By the end of this lesson, students should be able to:

- Create an Ember 2.0 application, starting with an Ember 1.13.13 application.
- Create an Ember 2.0 application by using this repo as a starting point.
- Configure an Ember application to use the pods file structure.

## Upgrade to Ember 2

### Checklist

- [ ] Create a new Ember application using `ember-cli`.
- [ ] Edit dependency manifests (`package.json` and `bower.json`) to use Ember 2.
- [ ] Update dependencies. (`npm install && bower install`)
- [ ] Start server. (`ember serve`)
- [ ] Verify that the browser is loading Ember 2 by opening the web inspector.

### Change Version Numbers

```diff
diff --git a/bower.json b/bower.json
index 35d850a..29c48a2 100644
--- a/bower.json
+++ b/bower.json
@@ -1,16 +1,19 @@
 {
   "name": "chirper",
   "dependencies": {
-    "ember": "1.13.11",
+    "ember": "2.2.0",
     "ember-cli-shims": "0.0.6",
     "ember-cli-test-loader": "0.2.1",
-    "ember-data": "1.13.15",
+    "ember-data": "2.2.1",
     "ember-load-initializers": "0.1.7",
     "ember-qunit": "0.4.16",
     "ember-qunit-notifications": "0.1.0",
-    "ember-resolver": "~0.1.20",
-    "jquery": "^1.11.3",
+    "jquery": "^2.1.4",
     "loader.js": "ember-cli/loader.js#3.4.0",
     "qunit": "~1.20.0"
+  },
+  "resolutions": {
+    "ember": "2.2.0",
+    "jquery": "^2.1.4"
   }
 }
 ```


 ```diff
diff --git a/package.json b/package.json
index 662d008..6032ddc 100644
--- a/package.json
+++ b/package.json
@@ -33,8 +33,9 @@
     "ember-cli-release": "0.2.8",
     "ember-cli-sri": "^1.2.0",
     "ember-cli-uglify": "^1.2.0",
-    "ember-data": "1.13.15",
+    "ember-data": "2.2.1",
     "ember-disable-proxy-controllers": "^1.0.1",
-    "ember-export-application-global": "^1.0.4"
+    "ember-export-application-global": "^1.0.4",
+    "ember-resolver": "^2.0.3"
   }
 }
 ```

### Install

 ```
 npm install && bower install
 ```


## Using Pods

We'll use pods instead of the traditional MVC file structure. The reason for this is twofold:

1. Pods structure better emulates thinking in components, where we "separate concerns, not technologies".
1. UI programming is fundamentally different than backend programming. It helps to emphasize that difference by using a file structure that more closely maps to parts of the UI.

### The Difference

Suppose we had a taqueria. If we had a resource for our different menu items, it might look like this with a traditional MVC file structure:

```
app/controllers/taco.js
app/routes/taco.js
app/models/taco.js
app/templates/taco.hbs
```

With a pod-based naming convention, the files would be located at:

```
app/taco/controller.js
app/taco/route.js
app/taco/model.js
app/taco/template.hbs
```

Here's the mapping:

```diff
- app/controllers/taco.js
+ app/taco/controller.js

- app/routes/taco.js
+ app/taco/route.js

- app/models/taco.js
+ app/taco/model.js

- app/templates/taco.hbs
+ app/taco/template.hbs
```

### Activating Pods

```diff
diff --git a/.ember-cli b/.ember-cli
index ee64cfe..927fabe 100644
--- a/.ember-cli
+++ b/.ember-cli
@@ -5,5 +5,6 @@

     Setting `disableAnalytics` to true will prevent any data from being sent.
   */
-  "disableAnalytics": false
+  "disableAnalytics": false,
+  "usePods": true
 }
```

Now, if you use `ember generate`, the `--pod` flag will be used automatically.

## Cleaning Up

Remove the following directories from your project so you aren't tempted to stray from the pods structure:

- [ ] `app/controllers`
- [ ] `app/models`
- [ ] `app/routes`
- [ ] `app/templates`

Removing the last directory gets rid of the default generated application template. If you want to regenerate it, use

```
ember destroy template application # should no-op
ember generate template application
```

## Optional: Use This Repo

If you'd rather not complete these steps manually, you can use the following instructions to use this repository as a basis of your own Ember 2 with Pods® application.

### Checklist

- [ ] Navigate to your project directory.
- [ ] `git clone --depth 1 --no-single-branch git@github.com:ga-wdi-boston/ember-starter.git my-app-name`
- [ ] `npm install && bower install`
- [ ] Make our solution branch your master branch.

### Branch Shuffle

Once you've cloned the starter repo, you'll want to use the `solution` branch as the basis for your Ember application, but you won't want to work on `solution`.

After you change into the project directory:

- [ ] Switch to the `solution` branch. (`git checkout solution`)
- [ ] Delete the `master` branch. (`git branch -d master`)
- [ ] Rename the `solution` branch to `master`. (`git branch -m master`)


[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
