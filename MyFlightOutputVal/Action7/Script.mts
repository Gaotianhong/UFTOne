WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set DataTable("passengerName_text", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectCell 1, 1
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click
