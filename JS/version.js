
let previousBox = null;

function changeColor(box) {
  if (previousBox && previousBox !== box) {
    previousBox.classList.remove('selected');
    previousBox.querySelector('.textVersion').classList.remove('selectedVersion');
    previousBox.querySelector('.textDate').classList.remove('selectedDate');
  }

  box.classList.add('selected');
  box.querySelector('.textVersion').classList.add('selectedVersion');
  box.querySelector('.textDate').classList.add('selectedDate');

  previousBox = box;
}

document.querySelectorAll('.infoBoxBottom').forEach(box => {
  box.addEventListener('click', function () {
    changeColor(this);
  });
});



function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isSidebarOpen = sidebar.classList.contains('lg:w-[82px]');

    if (isSidebarOpen) {
        sidebar.classList.remove('lg:w-[82px]');
        sidebar.classList.add('lg:w-[322px]');

    } else {
        sidebar.classList.remove('lg:w-[322px]');
        sidebar.classList.add('lg:w-[82px]');
     

    }

}







//displayVersion




function getParagraphText1() {
  

    let version = document.getElementById('vText');
    let date = document.getElementById('dText');
    let vtext = version.innerText;
    let dtext = date.innerText;


    document.getElementById("textVersionDes").innerHTML = dtext;

    document.getElementById("displayVersionDes").innerHTML = vtext;






}


function getParagraphText2() {
   

    let version = document.getElementById('vText1');
    let date = document.getElementById('dText1');
    let vtext = version.innerText;
    let dtext = date.innerText;

    document.getElementById("textVersionDes").innerHTML = dtext;


    document.getElementById("displayVersionDes").innerHTML = vtext;





}
function getParagraphText3() {
  

    let version = document.getElementById('vText2');
    let date = document.getElementById('dText2');
    let vtext = version.innerText;
    let dtext = date.innerText;
    document.getElementById("textVersionDes").innerHTML = dtext;

    document.getElementById("displayVersionDes").innerHTML = vtext;


}
function getParagraphText4() {
   
    let version = document.getElementById('vText3');
    let date = document.getElementById('dText3');
    let vtext = version.innerText;
    let dtext = date.innerText;
    document.getElementById("textVersionDes").innerHTML = dtext;

    document.getElementById("displayVersionDes").innerHTML = vtext;


   
}
function getParagraphText5() {
  

    let version = document.getElementById('vText4');
    let date = document.getElementById('dText4');
    let vtext = version.innerText;
    let dtext = date.innerText;
    document.getElementById("textVersionDes").innerHTML = dtext;

    document.getElementById("displayVersionDes").innerHTML = vtext;



}


function getParagraphText6() {
  

    let version = document.getElementById('vText5');
    let date = document.getElementById('dText5');
    let vtext = version.innerText;
    let dtext = date.innerText;
    document.getElementById("textVersionDes").innerHTML = dtext;

    document.getElementById("displayVersionDes").innerHTML = vtext;


}
function getParagraphText7() {
  
    let version = document.getElementById('vText6');
    let date = document.getElementById('dText6');
    let vtext = version.innerText;
    let dtext = date.innerText;
    document.getElementById("textVersionDes").innerHTML = dtext;



    document.getElementById("displayVersionDes").innerHTML = vtext;



}














document.addEventListener('DOMContentLoaded', function () {
    function adjustTextNameWidth() {
        const textName = document.querySelectorAll('.textName');
        const textVersion = document.querySelectorAll('.textVersion');

        textName.forEach((nameElement, index) => {
            const versionElement = textVersion[index];
            const containerWidth = nameElement.parentElement.offsetWidth;
            const versionWidth = versionElement.offsetWidth;
            const padding = 20;

            const maxWidth = containerWidth - versionWidth - padding;
            nameElement.style.maxWidth = `${maxWidth}px`;
        });
    }

    window.addEventListener('resize', adjustTextNameWidth);
    adjustTextNameWidth();
});







document.addEventListener("DOMContentLoaded", function () {
    // بررسی اینکه آیا عرض صفحه کمتر از 1024 پیکسل است
    if (window.matchMedia("(max-width: 1024px)").matches) {
        const accHeaders = document.querySelectorAll(".infoBoxBottom");

        accHeaders.forEach((header) => {
            header.addEventListener("click", function () {
                const isCollapsed = header.classList.contains("collapsed");

                // بستن تمامی آکاردئون‌های باز
                document.querySelectorAll(".infoBoxBottom.expanded").forEach((item) => {
                    item.classList.remove("expanded");
                    item.classList.add("collapsed");
                    item.querySelector('.accordion-content').style.maxHeight = "0px"; // بستن آکاردئون
                });

                // تغییر وضعیت آکاردئون کلیک شده
                if (isCollapsed) {
                    header.classList.remove("collapsed");
                    header.classList.add("expanded");
                    header.querySelector('.accordion-content').style.maxHeight = header.querySelector('.accordion-content').scrollHeight + "px"; // باز کردن آکاردئون
                } else {
                    header.classList.remove("expanded");
                    header.classList.add("collapsed");
                    header.querySelector('.accordion-content').style.maxHeight = "0px"; // بستن آکاردئون
                }
            });
        });

        // به‌روزرسانی max-height آکاردئون‌ها در صورت تغییر اندازه صفحه
        window.addEventListener('resize', function () {
            if (window.matchMedia("(max-width: 1024px)").matches) {
                document.querySelectorAll(".infoBoxBottom.expanded").forEach((item) => {
                    item.querySelector('.accordion-content').style.maxHeight = item.querySelector('.accordion-content').scrollHeight + "px";
                });
            }
        });
    }
});



