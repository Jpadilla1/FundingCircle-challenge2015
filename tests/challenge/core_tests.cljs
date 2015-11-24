(ns challenge.core-tests
  (:require
    [cljs.test :as t]
    [challenge.core :as core]))

(enable-console-print!)

(t/deftest test-if-number-is-prime
  (t/is (core/prime? 2))
  (t/is (core/prime? 5))
  (t/is (not (core/prime? 10)))
  (t/is (core/prime? 13))
  (t/is (not (core/prime? 12))))

(t/deftest test-if-generated-primes-are-primes
  (def primes (core/n-primes 10))
  (loop [x 0]
    (if (< x (count primes))
      (do
      (t/is (core/prime? (nth primes x)))
      (recur (inc x)))))
  )

(set! *main-cli-fn* #(t/run-tests))
