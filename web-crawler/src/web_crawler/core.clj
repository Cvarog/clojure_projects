(ns web-crawler.core
  (:import (org.jsoup Jsoup)
           (java.io FileInputStream)))

(defn -main []
  (with-open [input (FileInputStream. "site.html")]
    (let [doc (Jsoup/parse input "UTF-8" "http://en.wikipedia.org/wiki/Main_Page")
          links (.select doc "a[href]")]
      (doseq [link links]
        (println (.attr link "abs:href"))))))