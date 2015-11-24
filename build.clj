(require '[cljs.build.api cljs.repl.nashorn])

(cljs.build.api/build "src"
  {:main 'challenge.core
   :output-to "out/main.js"})