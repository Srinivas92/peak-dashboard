(ns peak-dashboard.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [peak-dashboard.events]
              [peak-dashboard.subs]
              [peak-dashboard.routes :as routes]
              [peak-dashboard.views :as views]
              [peak-dashboard.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
