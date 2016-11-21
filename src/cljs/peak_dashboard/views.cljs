(ns peak-dashboard.views
    (:require [re-frame.core :as re-frame]))

;; home

(defn home-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div
       [:div {:class "container"}
        [:nav {:class "navbar navbar-dark bg-primary"}
         [:ul {:class "nav navbar-nav"}
          [:li {:class "nav-item active"}
           [:a {:class "nav-link", :href "#"} "PeakDashboard"]]
          [:li {:class "nav-item"}
           [:a {:class "nav-link", :href "#"} "Report 1"]]]]]

       [:div {:class "container"}
        [:div {:class "card-group"}
         [:div {:class "card card-block"}
          [:div {:class "card-header"} "Configurations"]

          [:div {:class "card-group"}
           ;; card 1
           [:div {:class "col-sm-6 card card-block"}
            [:div {:class "navbar navbar-light bg-faded"}
             [:div {:class "navbar-brand"} "Report"]
             [:ul {:class "nav navbar-nav"}
              [:a {:class "btn-sm btn-primary float-xs-right", :href "#"} "Save"]]]

            [:p]
            ;; config report name
            [:div {:class "input-group"}
             [:span {:class "input-group-addon"} "Report Name"]
             [:input {:type "text", :id "config-report-name", :class "form-control" :placeholder "Specify Report Name"}]]
             
             ;; config report data source type

            [:div {:class "input-group"}
             [:span {:class "input-group-addon"} "Data Source Type"]
             [:input {:type "text", :id "config-data-source-type", :class "form-control" :placeholder "Specify Source Type"}]]]

           
           ;; card 2
           [:div {:class "col-sm-6 card card-block"}
            [:div {:class "navbar navbar-light bg-faded"}
             [:div {:class "navbar-brand"} "Data Source"]
             [:ul {:class "nav navbar-nav"}
              [:a {:class "btn-sm btn-primary float-xs-right", :href "#"} "Save"]]]            

            [:p]            
            ;; config data file name
            [:div {:class "form-group"}
             [:label {:for "config-data-file-name"} "Data File Name"]
             [:input {:type "file", :id "config-data-file-name", :class "form-control" :placeholder "Choose File"}]]]]

          [:div {:class "card-group"}
           ;; card - 3
           [:div {:class "col-sm-6 card card-block"}
            [:div {:class "navbar navbar-light bg-faded"}
             [:div {:class "navbar-brand"} "Data Grid"]
             [:ul {:class "nav navbar-nav"}
              [:a {:class "btn-sm btn-primary float-xs-right", :href "#"} "Save"]]]]
       
           ;; card - 4
           [:div {:class "col-sm-6 card card-block"}
            [:div {:class "navbar navbar-light bg-faded"}
             [:div {:class "navbar-brand"} "Chart"]
             [:ul {:class "nav navbar-nav"}
              [:a {:class "btn-sm btn-primary float-xs-right", :href "#"} "Save"]]]]]]]]

       
       [:div {:class "container"}
        [:div {:class "card-group"}]
        [:div {:class "card card-block"}
         [:div {:class "card-header"} "Data Grid"]
         [:table {:class "table"}
          [:thead
           [:tr
            [:th "Emp #"]
            [:th "Emp Name"]
            [:th "Salary"]
            [:th "Commission"]]]
          [:tbody
           [:tr
            [:th {:scope "row"} 1]
            [:td "Mark O"]
            [:td 100000.00]
            [:td 200000.00]]
           [:tr
            [:th {:scope "row"} 2]
            [:td "John D"]
            [:td 300000.00]
            [:td 400000.00]]
           [:tr
            [:th {:scope "row"} 3]
            [:td "Rick D"]
            [:td 500000.00]
            [:td 600000.00]]            
           ]]
         ]]
       
       [:div {:class "container"}
        [:div {:class "card-group"}
         [:div {:class "card card-block"}
          [:h6 {:class "card-header"} "Chart Report"]
          [:div {:class "col-sm-12 card card-block"}
           [:p "charts go here"]]]]]])))


;; about

(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))


;; main

(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn show-panel
  [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
