(ns challenge.core
  (:require
    [cljs.nodejs :as nodejs]
    [clojure.string :as string]
    [goog.string :as gstring]
    [goog.string.format]))

; Enables print to console
(nodejs/enable-util-print!)

; Number of primes to generate with their multiplication table
(def N 10)

; Checks if number is prime
(defn prime?
  [n]
  (if (= n 2) true
    (if (even? n) false
      (let [root (int (Math/sqrt n))]
        (loop [i 3]
          (if (> i root) true
              (if (zero? (mod n i)) false
                (recur (+ i 2)))))))))

; Generates N primes
(defn n-primes
  [n]
  (loop [num 2 p [2]]
    (if (>= (count p) n) p
      (recur (inc num)
        (if (prime? num)
          (concat p [num]) p)))))


(defn -main [& args]
    ; Calls the n-primes function and stores the result in the primes symbol
  (def primes (n-primes N))

  ; Prints out the first row of the table (primes only)
  (println (gstring/format "%s," "x")
    (string/join  ", " primes))

  ; Prints the multiplication table for all the primes
  (loop [x 0]
    (if (< x (- (count primes) 1))
      (loop [i 0]
        (if (< i (count primes))
          (do
            (println (gstring/format "%d," (nth primes i))
              (string/join  ", " (map #(* % (nth primes i)) primes)))
            (recur (inc i)))))
    (recur (inc x))))
)

(set! *main-cli-fn* -main)
