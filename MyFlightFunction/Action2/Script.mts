WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles" @@ hightlight id_;_2046130064_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Sydney"
currentDate = WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").GetROProperty("DisplayDate")
orderDate = currentDate + 10
WpfWindow ("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate orderDate
departureDate = WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").GetROProperty("date")
If check_data_validity(departureDate) Then
	reporter.ReportEvent micPass, "Date is valid", departureDate
End If
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2046133472_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2065768592_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2046134624_;_script infofile_;_ZIP::ssf18.xml_;_
