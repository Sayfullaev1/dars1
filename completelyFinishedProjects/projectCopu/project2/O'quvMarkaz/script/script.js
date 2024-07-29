



bigInfoCardPosition()

function bigInfoCardPosition() {
    let header = document.querySelector(".page-header")

    let card = document.querySelector(".page-section__card")
    let cardImg = document.querySelector(".page-section__card__img")
    let cardInfo = document.querySelector(".page-section__card__info")

    console.log(window.innerWidth);

    if (window.innerWidth <= 580) {
        cardImg.style.order = 2;
        cardInfo.style.order = 1;
    } else {
        cardImg.style.order = 1;
        cardInfo.style.order = 2;
    }
}




clickBtn()

function clickBtn() {
    let header = document.querySelector(".page-header")
    let card = document.querySelector(".card__info")

    let cardInfoWrapBackground = document.querySelector(".card__info__wrap")

    let btn = document.querySelector(".page-header__photos__btn")

    let btn2 = document.querySelector(".card__info__photos__btn")



    btn.addEventListener( "click", function () {
        header.style.display= "none"
    })

    btn2.addEventListener( "click", function () {
        card.style.display= "none"
        cardInfoWrapBackground.style.display= "none";
    })

}




pushData()


function pushData() {


    const corsProxy = 'https://mental.bmgsoft.uz/append-data'; // Public CORS proxy
    // const webAppUrl = 'https://script.google.com/macros/s/AKfycbwtt8H5qRlqJbGiRTA-Kpytxy2pQvTeaBumku5Gryudde4ZiwCmYcLsu1o_0KxgTOxK/exec';



    let btnPush = document.querySelector(".page-main__card__btn")

    let inputValue = document.querySelectorAll(".page-main__card__input")


    let sentInformation = false


    btnPush.addEventListener( "click", function () {

        let filledFields = 0



        let data = []


        inputValue.forEach( (item, index) =>{
            

            let input = item.value

            item.style.cssText=`
                border: 1px solid #2C2399;
            `
                item.style.outline = '1px solid #002199';

            if (input==="") {
                item.style.cssText=`
                    border: 1px solid red;
                `
                    item.style.outline = '1px solid rgb(162, 0, 0)';


            } else{
                data.push(input)

                filledFields++
            }

        })



        if (filledFields===5 && sentInformation===false) {

            let checkMarkImg = document.createElement("img")

            checkMarkImg.src = "./photos/mainImages/Vector (2).svg"


            btnPush.style.cssText +=`
                transition: 0.4s;
                color: #2C2399;
                position: relative;


                // &:hover{
                //     background: #2C2399;
                //     color: #2C2399;
                // }
                // &:active {
                //     transform: none;
                //     box-shadow: none;
                // }
                
            `

            btnPush.classList.remove('custom-button');


            checkMarkImg.style.cssText= `
                // transition: 0.4s;
                width: 17.34px;
                position: absolute;
                z-index: 2;
                top:  calc( 50% - 15.34px / 2 );
                left: calc( 50% - 17.34px / 2 );
            `

            btnPush.appendChild(checkMarkImg)
            
            
            sentInformation = true

            fetch(corsProxy, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    "values": [data]
                } )
                
            })
                .then(response => response.text())
                .then(data => {
                    // console.log(data);
                    // alert('Data sent to Google Sheets successfully!');
                })
                .catch(error => {
                    // console.error('Error:', error);
                    // alert('Error sending data.');
                });
            
        }

    })
}


