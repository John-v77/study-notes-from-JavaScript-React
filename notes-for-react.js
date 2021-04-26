1   ||  onClick={fuction-to-be-called}  + useState =>  is the right way, 
            if {fuction-to-be-called()} => infinite loop as it calls the function everytime the page it is rendered. ( and every time the state is changed)

2   || onSubmit={} will recongnized "enter" key being pressed.  
