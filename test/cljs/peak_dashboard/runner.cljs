(ns peak-dashboard.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [peak-dashboard.core-test]))

(doo-tests 'peak-dashboard.core-test)
