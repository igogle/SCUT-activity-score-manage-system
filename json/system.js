function loginf()
{
	
	var test1=document.getElementById("selectob");
	/*alert(test1.options[test1.selectedIndex].value);*/
	if(test1.options[test1.selectedIndex].value=="student")
		{
			window.location.href="./index_student.html";
			
		}
	else if(test1.options[test1.selectedIndex].value=="worker")
		{
			window.location.href="./index_dept.html";
			
		}
	else if(test1.options[test1.selectedIndex].value=="admin")
		{
			window.location.href="./index_admin.html";
			
		}
	/*alert("Hello World!");*/
}


function indexf()
{
	window.location.href="./index_student.html";
}

function scoref()
{
	window.location.href="./score.html";
}

function activityf()
{
	window.location.href="./activity.html";
}

function studentf()
{
	window.location.href="./student.html";
}

function index_deptf()
{
	window.location.href="./index_dept.html";
}

function activity_uploadf()
{
	window.location.href="./activity_upload.html";
}

function activity_queryf()
{
	window.location.href="./activity_query.html";
}

function message_changef()
{
	window.location.href="./message_change.html";
}

function updatef()
{
	window.location.href="./student2.html";
}
