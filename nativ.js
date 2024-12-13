const btn=document.createElement('button');

btn.onclick=function(){
    alert("ez egy nativ kod")
}

btn.innerHTML="Nativ gomb";

document.getElementById("nativ-button-container").appendChild(btn);

//react- > mit akarok látni?
const gomb= React.createElement("button",
{
    onclick:function()

    {
        alert("ez egy react kod");
    }
}
)
//ezen az órán videót néztünk és leírtuk a kódot, jelenleg funkciókat adunk gomboknak és natív kodot irunk