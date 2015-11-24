(require '[cljs.build.api])

(cljs.build.api/build (cljs.build.api/inputs "tests" "src")
  {:main 'challenge.core_tests
   :target :nodejs
   :output-to "tests.js"
   :verbose true})