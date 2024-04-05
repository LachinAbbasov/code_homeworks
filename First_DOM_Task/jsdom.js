document.addEventListener("DOMContentLoaded", function() {
    // Container divini yaratmaq:
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    // bigDiv'i Yaratdmaq
    let bigDiv = document.createElement("div");
    bigDiv.classList.add("bigdiv");
    let h1 = document.createElement("h1");
    h1.textContent = "960 x 360 px";
    bigDiv.appendChild(h1);

    // cards divini yaratmaq:
    let cardsDiv = document.createElement("div");
    cardsDiv.classList.add("cards");

    // Kartlarin Yaradılması:
    for (let i = 0; i < 3; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        let pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixelDiv");
        let pixelTxt = document.createElement("h3");
        pixelTxt.classList.add("pixelsizetxt");
        pixelTxt.textContent = "290 x 190 px";
        pixelDiv.appendChild(pixelTxt);

        let p = document.createElement("p");
        p.textContent = "Indonectetus facilis";

        let h5 = document.createElement("h5");
        h5.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, vitae deleniti.";

        let a = document.createElement("a");
        a.href = "";
        a.textContent = "Read More →";

        cardDiv.appendChild(pixelDiv);
        cardDiv.appendChild(p);
        cardDiv.appendChild(h5);
        cardDiv.appendChild(a);

        cardsDiv.appendChild(cardDiv);
    }

    // cardsDiv'i bigDiv'ə əlavə et:
    containerDiv.appendChild(bigDiv);
    containerDiv.appendChild(cardsDiv);

    // HTML elementlərini ekranda göstər:
    document.body.appendChild(containerDiv);

        // CSS Kodlarini Əlavə edirik:
    let style = document.createElement("style");
    style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .bigdiv {
            width: 960px;
            height: 360px;
            background-color: rgb(49, 49, 49);
        }
        h1 {
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 150px;
        }
        .card { 
            width: 290px;
            height: 230px;
        }
        .cards {
            margin-top: 15px ;
            display: flex;
            column-gap: 40px ;
        }
        .pixelDiv {
            width: 300px;
            height:150px;
            background-color: rgb(49,49,49);
            border: 7px solid rgb(135, 135, 135);
        }
        .pixelsizetxt {
            text-align: center;
            padding-top: 70px;
            color: white;
        }
        p {
            color: rgb(117, 117, 117);
        }
        h5 {
            color: rgb(117, 117, 117);
        }
        a {
            color: rgb(137, 80, 34);
            padding-left: 150px;
            text-decoration: none;
        }
        .container {
            width: 100%;
        }
        body {
            width: 100%;
            margin-left: 25%;
            margin-top: 10%;
        }
    `;
    document.head.appendChild(style);
});
