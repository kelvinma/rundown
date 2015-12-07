![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Ember Starter: Using Ember 2.0

## Foundations
At this point, students have already learned how to:

- Create an Ember 1.13.13 application.

## Objectives
By the end of this lesson, students should be able to:

- Create an Ember 2.0 application, starting with an Ember 1.13.13 application.
- Create an Ember 2.0 application by using this repo as a starting point.

## Checklist

- [ ] Create a new Ember application using `ember-cli`.
- [ ] Edit dependency manifests (`package.json` and `bower.json`) to use Ember 2.
- [ ] Update dependencies. (`npm install && bower install`)
- [ ] Start server. (`ember serve`)
- [ ] Verify that the browser is loading Ember 2 by opening the web inspector.

## Upgrade to Ember 2

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
+    "ember": "^2.2.0",
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
-    "qunit": "~1.20.0"
+    "qunit": "~1.20.0",
+  },
+  "resolutions": {
+    "ember": "^2.2.0",
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
+    "ember-resolver": "~2.0.3"
   }
 }
 ```


[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
