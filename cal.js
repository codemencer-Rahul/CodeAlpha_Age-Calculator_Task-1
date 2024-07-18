const inputBtn = document.querySelector("#age-dob-input");
const calBtn = document.querySelector("#cal-btn");
const ageRes = document.querySelector(".age-result");

inputBtn.max = new Date().toISOString().split("T")[0];

calBtn.addEventListener("click", () => {
    if(inputBtn.value===""){
        alert("Please enter your Date of Birth");
    }else{
        let dob = new Date(inputBtn.value);
        let d1 = dob.getDate();
        let m1 = dob.getMonth() + 1;
        let y1 = dob.getFullYear();

        let today = new Date();
        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3,m3,y3;

        y3 = y2 - y1;

        if(m2 >= m1){
            m3 = m2 - m1;
        }else{
            y3--;
            m3 = 12 + m2 - m1;
        }

        if(d2 >= d1){
            d3 = d2 - d1;
        }else{
            m3--;
            d3 = getDaysInMonth(y2,m2) + d2 - d1;
            if(m3 == 0){
                m3 = 11;
            }
        }
        
        ageRes.innerText = `Your age is ${y3}yrs ${m3}months ${d3}days.`;
    }
})

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

