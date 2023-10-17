const MODEL_URL = "https://teachablemachine.withgoogle.com/models/MszFwJEKL/";
let modelo, inputImage, labelContainer, resultContainer, maxPredictions, maxClass;

window.onload = async () => {
    await init();
}

async function init(){
    const modelURL = MODEL_URL + 'model.json';
    const metadataURL = MODEL_URL + 'metadata.json';
    modelo = await tmImage.load(modelURL, metadataURL);

    maxPredictions = modelo.getTotalClasses();

    labelContainer = document.getElementById('label-container')

    document.getElementById('image-upload').addEventListener('change', carregarImagem); 
}

function carregarImagem() {
    let image = document.getElementById("image-upload").files[0];
    let imagePreview = document.createElement('img');
    imagePreview.src = URL.createObjectURL(image);

    imagePreview.onload = async () => {
        imagePreview.width = 300;
        imagePreview.height = 300;
        imagePreview.style.marginTop = "5px"
        const inputContainer = document.getElementById('input-container');

        inputContainer.innerHTML = '';
        document.getElementById("input-container").appendChild(imagePreview)
        classificarImagem(imagePreview);
    }
}


async function classificarImagem(img) {
    labelContainer.innerHTML = '';
    const prediction = await modelo.predict(img);
    let maxProbability = -1;
    for(let i = 0; i < maxPredictions; i++){

        if(prediction[i].className === "Vingadores"){
            const numberBar1 = prediction[i].probability * 100
            const numberBar1Txt = String(numberBar1); 
            const bar1 = document.getElementById("bar-vingadores")           
           
            const prob1 = document.getElementById('prob1')

            bar1.style.width = numberBar1Txt + "%";
           
            prob1.innerHTML = numberBar1.toFixed(2) + "%"

        }
        if(prediction[i].className === "Liga da Justiça"){
            const numberBar2 = prediction[i].probability * 100
            const numberBar2Txt = String(numberBar2);
            const prob2 = document.getElementById('prob2') 
            const bar2 = document.getElementById("bar-liga-da-justica")
           
            bar2.style.width = numberBar2Txt + "%";
            prob2.innerHTML = numberBar2.toFixed(2) + "%"
            
        }
        if(prediction[i].className === "Anti-Herói"){
            const numberBar3 = prediction[i].probability * 100
            const numberBar3Txt = String(numberBar3); 
            const bar3 = document.getElementById("bar-anti-heroi")
            const prob3 = document.getElementById('prob3') 
          
            
            bar3.style.width = numberBar3Txt + "%";
            prob3.innerHTML = numberBar3.toFixed(2) + "%"
            
        }
        if (prediction[i].probability > maxProbability) {
            maxProbability = prediction[i].probability;
            maxClass = prediction[i].className;
        }

    }
    if(maxClass === "Vingadores"){
        const imgClasse = document.getElementById('img-classe');
        imgClasse.src = "Assets/logo_Marvel.jpg";
        imgClasse.style.width = '100px'
        imgClasse.style.padding = '20px'
        imgClasse.style.borderRadius = '10px'
        imgClasse.style.backgroundColor = '#fff'
        imgClasse.style.marginTop = '10px';
        
        const buttonContainer = document.getElementById('button-container');
        buttonContainer.style.display = 'none'

    }else if(maxClass === "Liga da Justiça"){
        const imgClasse = document.getElementById('img-classe');
        imgClasse.src = "Assets/logo_DC.png";
        imgClasse.style.width = '100px'
        imgClasse.style.padding = '20px'
        imgClasse.style.borderRadius = '10px'
        imgClasse.style.backgroundColor = '#fff'
        imgClasse.style.marginTop = '10px';
        
        const buttonContainer = document.getElementById('button-container');
        buttonContainer.style.display = 'none'

    }else if(maxClass === "Anti-Herói"){
        const imgClasse = document.getElementById('img-classe');
        imgClasse.src = "Assets/Logo_Anti.png";
        imgClasse.style.width = '100px'
        imgClasse.style.padding = '20px'
        imgClasse.style.borderRadius = '10px'
        imgClasse.style.backgroundColor = '#fff'
        imgClasse.style.marginTop = '10px';
        
        const buttonContainer = document.getElementById('button-container');
        buttonContainer.style.display = 'none'
    }


    const resultado = document.createElement("div");
    resultado.innerHTML = `<strong>Resultado Final: ${maxClass} (${(maxProbability * 100).toFixed(2)}%)</strong>`;
    labelContainer.appendChild(resultado);
    resultado.style.display = "flex"
    resultado.style.flexDirection = "column"
    resultado.style.alignItems = "center"
    resultado.style.fontFamily = "Bangers"
    resultado.style.fontSize = "1.2rem"
    resultado.style.background = "black"
}