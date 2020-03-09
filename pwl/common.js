var data = localStorage.getItem("sample");
localStorage.clear(); 
var value1 = JSON.parse(data).key2;
var html =  '<img class = "image_sec" src="20,000%20Leagues%20Under%20the%20Sea.jpg"><h1 class="text">20000 Leagues under the sea</h1><p class="text1">Comics</p><p class="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation and the design of software systems.</p><a href="Ide.cpp" target="_blank" download="newfilename" class="target">Download the pdf</a>';

document.querySelector('.tt').innerHTML = html;


