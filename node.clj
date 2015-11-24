(require '[cljs.build.api])

(cljs.build.api/build "src"
  {:main 'challenge.core
   :output-to "main.js"
   :target :nodejs})