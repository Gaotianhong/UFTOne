WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Mary Sanchez"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
WpfWindow("Micro Focus MyFlight Sample").WpfProgressBar("progBar").WaitProperty "value", 100
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
