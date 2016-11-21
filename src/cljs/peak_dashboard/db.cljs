(ns peak-dashboard.db)

(def data-source-types {:file "File",  :sql "Sql", :api "Api", :rest "Rest Api"})
(def chart-types [:bar-chart :pie-chart])

(def default-db
  {:name "re-frame"
   :reports [:report1 :report2]

   ;; report1 configs
   :report1 {:config-report {:name "Report1 (csv data)"
                             :data-source :file}
             ;; data-source definitions
             :config-data-source {:file-name "datafile.csv"}
             ;; views on data
             :views [:view-1 :view-2 :view-3]
             ;; config for view-1
             :config-view-1 {:name "Results"
                             :columns :all}
             ;; config for view-2
             :config-view-2 {:name "Barchart"
                             :type :bar-chart
                             :x-axis nil
                             :y-axis nil}
             ;; config for view-3
             :config-view-3 {:name "piechart"
                             :type :pie-chart
                             :columns :all}}

   ;; report2 configs
   :report2 {:config-report {:name "report2"
                             :data-source :sql}
             ;; data-source definitions
             :config-data-source {:query ""}
             ;; views on data
             :views [:view-1 :view-2 :view-3]
             ;; config for view-1
             :config-view-1 {:name "Results"
                             :columns :all}
             ;; config for view-2
             :config-view-2 {:name "Barchart"
                             :type :bar-chart
                             :x-axis nil
                             :y-axis nil}
             ;; config for view-3
             :config-view-3 {:name "piechart"
                             :type :pie-chart
                             :columns :all}}
   
   })
